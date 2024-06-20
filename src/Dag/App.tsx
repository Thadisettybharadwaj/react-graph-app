import React from "react";
import DagGraph2D from "./Components/DagGraph2D";
import type { AppCompProps } from "./types";

const App: React.FC<AppCompProps> = () => {
  return (
    <div>
      <DagGraph2D />
    </div>
  );
};

export default App;
