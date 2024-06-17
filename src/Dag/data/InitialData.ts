import type {
  ContextMenuType,
  DagGraphLinkType,
  DagGraphNodeType,
} from "../types";

export const initialNode: DagGraphNodeType = {
  id: 0,
  leaf: "",
  level: 1,
  module: "",
  size: 0,
  path: "",
  NodeColor: "",
  Links: [],
  Neighbors: [],
};

export const initialLink: DagGraphLinkType = {
  source: "",
  target: "",
  sourceNode: initialNode,
  targetNode: initialNode,
};

export const initialContextMenu: ContextMenuType = {
  visible: false,
  x: 0,
  y: 0,
  node: initialNode,
};
