import React from "react";

import Title from "../../components/Title";
import Text from "../../components/Text";

const StartPage: React.FunctionComponent = () => {
  return (
    <>
      <Title level={1} text={"StartPage"}></Title>
      <Text text={"This is <bold>THE START PAGE</bold>"}></Text>
    </>
  );
};

export default StartPage;
