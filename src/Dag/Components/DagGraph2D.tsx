import React, { useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";
import ForceGraph, {
  type ForceGraphMethods,
  type LinkObject,
  type NodeObject,
} from "react-force-graph-2d";
import { dagData } from "../data/Data";
import {
  initialContextMenu,
  initialLink,
  initialNode,
} from "../data/InitialData";
import type { DagGraphLinkType, DagGraphNodeType } from "../types";
import { getNodeColor } from "../utils/GetNodeColor";
import { GetTableOnNodeHover } from "./GetTableOnHover";
import InspectComponent from "./InspectComponent";

type ImageMap = Map<number | string, HTMLImageElement>;
interface ImageQueueItem {
  id: number | string;
  image: string;
}

const syncLoadAllImages = (
  imageQueue: ImageQueueItem[],
  callback: (imageMap: ImageMap) => void
): void => {
  const numAll = imageQueue.length;
  let numProcessed = 0;
  const allImages: ImageMap = new Map();

  if (numAll === 0) {
    callback(allImages);
    return;
  }

  imageQueue.forEach((item) => {
    const image = new Image();
    const id = item.id;

    image.addEventListener("load", () => {
      numProcessed++;
      allImages.set(id, image);
      if (numAll === numProcessed) {
        callback(allImages);
      }
    });

    image.addEventListener("error", () => {
      numProcessed++;
      if (numAll === numProcessed) {
        callback(allImages);
      }
    });

    image.src = item.image;
  });
};

const IMAGE_SIZE = 24;
// const NODE_RELSIZE = IMAGE_SIZE;
// const ZOOM = 1.7;
// const FORCE_LINK_DISTANCE = IMAGE_SIZE * 4;
// const FORCE_MANYBODIES_STRENGTH = -(IMAGE_SIZE * 4);
// const FORCE_COLLIDE_RADIUS = NODE_RELSIZE * 1.5;

const DagGraph2D: React.FC = () => {
  const ref =
    useRef<
      ForceGraphMethods<
        NodeObject<DagGraphNodeType>,
        LinkObject<DagGraphNodeType, DagGraphLinkType> | undefined
      >
    >();
  const [graph, setGraph] = useState({
    nodes: [initialNode],
    links: [initialLink],
  });
  const [contextMenu, setContextMenu] = useState(initialContextMenu);
  const [imageMap, setImageMap] = useState<ImageMap>(new Map());

  const closeContextMenu = () => {
    setContextMenu(initialContextMenu);
  };

  const handleNodeRightClick = (node, event) => {
    event.preventDefault();
    setContextMenu({
      visible: true,
      x: event.clientX,
      y: event.clientY,
      node,
    });
  };

  useEffect(() => {
    const nodes: DagGraphNodeType[] = [];
    const links: DagGraphLinkType[] = [];

    console.log(nodes, "nodesss");

    dagData.forEach((each, i) => {
      const levels = each.path.split("/");
      const level = levels.length - 1;
      const module = level > 0 ? levels[1] : null;
      const leaf = levels.pop();
      const parent = levels.join("/");

      const node: DagGraphNodeType = {
        id: i,
        path: each.path,
        leaf,
        module,
        size: each.size || 20,
        level,
        NodeColor: getNodeColor(i),
        Links: [],
        Neighbors: [],
        icon: each.pic ? "assets/setting.webp" : "",
      };

      nodes.push(node);

      if (parent) {
        links.push({
          source: parent,
          target: each.path,
          sourceNode: initialNode,
          targetNode: node,
        });
      }
    });

    if (nodes && links) {
      setGraph({ nodes, links });

      const images: ImageQueueItem[] = nodes.map((e) => ({
        id: e.id,
        image: e.icon,
      }));

      syncLoadAllImages(images, setImageMap);
    }
  }, []);

  if (!imageMap) {
    return null; // Or a loading spinner
  }

  const nodeCanvasObject = (node, ctx, globalScale) => {
    const label = node.leaf || node.path;
    const fontSize = 12 / globalScale;
    ctx.font = `${fontSize}px Sans-Serif`;
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const nodeX = node.x ?? 0;
    const nodeY = node.y ?? 0;

    const image = imageMap.get(node.id);
    if (image) {
      ctx.drawImage(
        image,
        nodeX - IMAGE_SIZE / 2,
        nodeY - IMAGE_SIZE / 2,
        IMAGE_SIZE,
        IMAGE_SIZE
      );
    } else {
      ctx.fillText(label, nodeX, nodeY);
    }
  };

  return (
    <div>
      <ForceGraph
        ref={ref}
        graphData={graph}
        dagMode={"radialout"}
        dagLevelDistance={300}
        backgroundColor="#101020"
        autoPauseRedraw={false}
        d3AlphaDecay={0.08}
        d3VelocityDecay={0.9}
        cooldownTicks={50}
        onEngineStop={() => ref.current?.zoomToFit(400, 100)}
        linkColor={() => "rgba(255,255,255,0.2)"}
        linkLabel={(link) => link.targetNode.path} // onLinkHover, this label will be appeared
        linkDirectionalParticles={6} // how many dots should be there in the link
        linkDirectionalParticleWidth={6} // dots width
        linkDirectionalParticleSpeed={0.00001} // dots speed in the link
        linkDirectionalArrowLength={10} // arrow length
        linkDirectionalArrowColor={() => "#fff"} // arrow color
        /////////
        ////////// nodes ///////////
        nodeRelSize={1.5}
        nodeId="path"
        nodeVal={(node) => 100 / (node.level + 1)} // for changing node size
        nodeLabel={(node) => {
          return contextMenu.visible
            ? ""
            : renderToString(<GetTableOnNodeHover data={node} />);
        }}
        nodeColor={(node) => node.NodeColor}
        nodeCanvasObjectMode={() => "after"}
        nodeCanvasObject={nodeCanvasObject}
        onNodeRightClick={handleNodeRightClick}
      />
      {contextMenu.visible && (
        <div
          style={{
            position: "absolute",
            top: contextMenu.y,
            left: contextMenu.x,
            borderRadius: "12px",
            padding: "4px",
            zIndex: 1000,
          }}
          onClick={closeContextMenu}
        >
          <InspectComponent node={contextMenu.node} />
        </div>
      )}
      {/* <img alt="sa" src="assets/setting.webp" height={200} width={200} /> */}
    </div>
  );
};

export default DagGraph2D;
