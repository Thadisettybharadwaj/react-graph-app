import React, { useEffect, useRef, useState } from "react";
import ForceGraph, {
  type ForceGraphMethods,
  type LinkObject,
  type NodeObject,
} from "react-force-graph-2d";
import type {
  DagGraphDataType,
  DagGraphLinkType,
  DagGraphNodeType,
} from "../types";
import { dagData } from "../data/Data";
import { getTableOnNodeHover } from "./GetTableOnHover";

const initialNode: DagGraphNodeType = {
  id: 0,
  leaf: "",
  level: 1,
  module: "",
  size: 0,
  path: "",
  Links: [],
  Neighbors: [],
};

const initialLink: DagGraphLinkType = {
  source: "",
  target: "",
  sourceNode: initialNode,
  targetNode: initialNode,
};

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
        linkLabel={(link) => link.targetNode.path}
        /////////
        ////////// nodes ///////////
        nodeRelSize={1}
        nodeId="path"
        nodeVal={(node) => 100 / (node.level + 1)} // for changing node size
        nodeLabel={(node) => getTableOnNodeHover(node).toString()}
        nodeAutoColorBy={(node) => node.__indexColor}
      />
    </div>
  );
};

export default DagGraph2D;
