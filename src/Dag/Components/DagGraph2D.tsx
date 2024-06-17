import React, { useEffect, useRef, useState } from "react";
import ForceGraph, {
  type ForceGraphMethods,
  type LinkObject,
  type NodeObject,
} from "react-force-graph-2d";
import { dagData } from "../data/Data";
import type {
  ContextMenuType,
  DagGraphDataType,
  DagGraphLinkType,
  DagGraphNodeType,
} from "../types";
import { getNodeColor } from "../utils/GetNodeColor";
import { getTableOnNodeHover } from "./GetTableOnHover";
import {
  initialContextMenu,
  initialLink,
  initialNode,
} from "../data/InitialData";
import InspectComponent from "./InspectComponent";

const DagGraph2D: React.FC<{}> = () => {
  /** Optional Ref, to access additional functions of lib */
  const ref =
    useRef<
      ForceGraphMethods<
        NodeObject<DagGraphNodeType>,
        LinkObject<DagGraphNodeType, DagGraphLinkType> | undefined
      >
    >();

  /** Dag Graph Data  */
  const [graph, setGraph] = useState<DagGraphDataType>({
    nodes: [initialNode],
    links: [initialLink],
  });
  const [contextMenu, setContextMenu] =
    useState<ContextMenuType>(initialContextMenu);

  const closeContextMenu = () => {
    setContextMenu(initialContextMenu);
  };

  const handleNodeRightClick = (
    node: NodeObject<DagGraphNodeType>,
    event: MouseEvent
  ) => {
    event.preventDefault();
    setContextMenu({
      visible: true,
      x: event.clientX,
      y: event.clientY,
      node,
    });
  };

  useEffect(() => {
    const nodes: DagGraphNodeType[] = [],
      links: DagGraphLinkType[] = [];

    dagData.forEach((each, i) => {
      const levels = each.path.split("/");
      const level = levels.length - 1;
      const module = level > 0 ? levels[1] : null;
      const leaf = levels.pop();
      const parent = levels.join("/");

      ///////
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
    }
  }, []);

  const nodeCanvasObject = (
    node: NodeObject<DagGraphNodeType>,
    ctx: CanvasRenderingContext2D,
    globalScale: number
  ) => {
    const label = node.leaf || node.path;
    const fontSize = 12 / globalScale;
    ctx.font = `${fontSize}px Sans-Serif`;
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const nodeX = node.x ?? 0;
    const nodeY = node.y ?? 0;

    // Calculate the angle based on the node's connections
    const link = graph.links.find((l) => l.target === node.path);
    if (link) {
      const angle = Math.atan2(nodeY, nodeX);
      ctx.save();
      ctx.translate(nodeX, nodeY);
      ctx.rotate(angle);
      ctx.fillText(label, 0, 0);
      ctx.restore();
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
        /////////////
        ////// links //////////
        linkColor={() => "rgba(255,255,255,0.2)"}
        linkLabel={(link) => link.targetNode.path} // onLinkHover, this label will be appeared
        linkDirectionalParticles={6} // how many dots should be there in the link
        linkDirectionalParticleWidth={6} // dots width
        linkDirectionalParticleSpeed={0.00001} // dots speed in the link
        linkDirectionalArrowLength={10} // arrow length
        linkDirectionalArrowColor={() => "#fff"} // arrow color
        /////////
        ////////// nodes ///////////
        nodeRelSize={1}
        nodeId="path"
        nodeVal={(node) => 100 / (node.level + 1)} // for changing node size
        nodeLabel={(node) => getTableOnNodeHover(node).toString()}
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
    </div>
  );
};

export default DagGraph2D;
