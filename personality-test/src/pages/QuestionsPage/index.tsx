import React from "react";
import Title from "../../components/Title";
import Text from "../../components/Text";

const QuestionsPage: React.FunctionComponent = () => {
  return (
    <>
      <Title level={1} text={"Questions Page"}></Title>
      <Text text={"This is <bold>THE QUESTIONS</bold>"}></Text>
    </>
  );
};

export default QuestionsPage;
