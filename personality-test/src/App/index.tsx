import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import QuestionsPage from "../pages/QuestionsPage";
import ResultsPage from "../pages/ResultsPage";
import StartPage from "../pages/StartPage";

function App() {
  type PAGES = "start" | "questions" | "results";

  const [currentPage, setCurrentPage] = useState<PAGES>("start");

  return (
    <MainLayout>
      {currentPage === "start" && <StartPage></StartPage>}
      {currentPage === "questions" && <QuestionsPage></QuestionsPage>}
      {currentPage === "results" && <ResultsPage></ResultsPage>}
      <div>
        <button onClick={() => setCurrentPage("questions")}>Start Test</button>
        <button onClick={() => setCurrentPage("results")}>See Results</button>
      </div>
    </MainLayout>
  );
}

export default App;
