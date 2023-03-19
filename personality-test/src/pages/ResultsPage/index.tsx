import React from "react";
import Title from "../../components/Title";
import Text from "../../components/Text";

const ResultsPage: React.FunctionComponent = () => {
  return (
    <>
      <Title level={1} text={"Results Page"}></Title>
      <Text text={"This is <bold>THE RESULTS</bold>"}></Text>
    </>
  );
};

export default ResultsPage;
