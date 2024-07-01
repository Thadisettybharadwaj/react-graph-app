import {
  Heading,
  SimpleTable,
  SimpleTableColumn,
  Strong,
} from "@dynatrace/strato-components-preview";
import React from "react";
import type { DagGraphNodeType } from "../types";

interface GetTableOnHoverProps {
  data: DagGraphNodeType;
}

const tableColumns: SimpleTableColumn[] = [
  {
    header: "Level",
    accessor: "level",
    alignment: "center",
  },
  {
    header: "Leaf",
    accessor: "leaf",
    alignment: "center",
  },
  {
    header: "Path",
    accessor: "path",
    alignment: "center",
  },
];

export const GetTableOnNodeHover: React.FC<GetTableOnHoverProps> = (props) => {
  const tableData = [
    {
      level: props.data.level,
      leaf: props.data.leaf,
      path: props.data.path,
    },
  ];
  return (
    <>
      <Heading level={6} as="h6">
        <Strong>Node Details</Strong>
      </Heading>
      <SimpleTable
        columns={tableColumns}
        data={tableData}
        variant={{
          contained: true,
          fontStyle: "text",
          rowDensity: "comfortable",
          rowSeparation: "zebraStripes",
          verticalDividers: true,
        }}
      />
    </>
  );
};
