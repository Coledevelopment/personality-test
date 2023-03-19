import React from "react";

import Title from "./components/Title";
import Text from "./components/Text";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div>
      <MainLayout>
        <Title level={1} text={"Hello"}></Title>
        <Text text={"This is <bold>Bold</bold> text"}></Text>
      </MainLayout>
    </div>
  );
}

export default App;
