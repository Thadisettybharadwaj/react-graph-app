import { type NodeObject } from "react-force-graph-2d";

export type DagGraphLinkType = {
  source: string;
  target: string;
  sourceNode: NodeObject<DagGraphNodeType>;
  targetNode: NodeObject<DagGraphNodeType>;
};

export type DagGraphNodeType = {
  id: number;
  path: string;
  leaf: string | undefined;
  module: string | null;
  size: number;
  level: number;
  NodeColor: string;
  Links: DagGraphLinkType[];
  Neighbors: DagGraphNodeType[];
};

export type DagGraphDataType = {
  nodes: DagGraphNodeType[];
  links: DagGraphLinkType[];
};

export type ContextMenuType = {
  visible: boolean;
  x: number;
  y: number;
  node: NodeObject<DagGraphNodeType>;
};

export type NodeColor = {
  id: number;
  color: string;
};
