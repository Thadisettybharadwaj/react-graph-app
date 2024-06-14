import type { DagGraphNodeType } from "../types";

export const getTableOnNodeHover = (val: DagGraphNodeType) => {
  return `<div>
      <p>Path: ${val.path}</p>
      <table>
        <tr>
          <th>Level</th>
          <th>Leaf</th>
        </tr>
        <tr>
          <th>${val.level}</th>
          <th>${val.leaf}</th>
        </tr>
      </table>
    </div>`;
};
