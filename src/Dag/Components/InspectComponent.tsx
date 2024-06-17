import React from "react";
import { type NodeObject } from "react-force-graph-2d";
import type { DagGraphNodeType } from "../types";

interface InspectComponentProps {
  node: NodeObject<DagGraphNodeType>;
}

const InspectComponent: React.FC<InspectComponentProps> = ({ node }) => {
  return (
    <div>
      <ul>
        <li>
          <p>ID : {node.id}</p>
        </li>
        <li>
          <p>Leaf : {node.leaf}</p>
        </li>
        <li>
          <p>Module : {node.module}</p>
        </li>
      </ul>
      <button>Close</button>
    </div>
  );
};

export default InspectComponent;
