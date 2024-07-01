import {
  Button,
  Container,
  Flex,
  Heading,
} from "@dynatrace/strato-components-preview";
import {
  ArrowRightIcon,
  HelpIcon,
  InformationIcon,
  OpenWithIcon,
} from "@dynatrace/strato-icons";
import React from "react";
import { type NodeObject } from "react-force-graph-2d";
import type { DagGraphNodeType } from "../types";

interface InspectComponentProps {
  node: NodeObject<DagGraphNodeType>;
}

const InspectComponent: React.FC<InspectComponentProps> = () => {
  return (
    <Container>
      <Heading level={5}>Additional Links</Heading>
      <br />
      <Flex flexDirection="column">
        <Button variant="emphasized" width="full" textAlign="start">
          <Button.Prefix>
            <ArrowRightIcon />
          </Button.Prefix>
          Inspect
        </Button>
        <Button variant="emphasized" width="full" textAlign="start">
          <Button.Prefix>
            <OpenWithIcon />
          </Button.Prefix>
          Open With
        </Button>
        <Button variant="emphasized" width="full" textAlign="start">
          <Button.Prefix>
            <InformationIcon />
          </Button.Prefix>
          View Information
        </Button>
        <Button variant="emphasized" width="full" textAlign="start">
          <Button.Prefix>
            <HelpIcon />
          </Button.Prefix>
          Help
        </Button>
        <Button
          color="neutral"
          variant="accent"
          width="content"
          size="condensed"
        >
          Close
        </Button>
      </Flex>
    </Container>
  );
};

export default InspectComponent;
