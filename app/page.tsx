// App.tsx
'use client'
import DynamicRenderer from "@/components/DynamicRenderer";
import uiJson from "@/jsonUi/jsonUi";
import React from "react";

const App: React.FC = () => {
  return <DynamicRenderer jsonUI={uiJson} />;
};

export default App;
