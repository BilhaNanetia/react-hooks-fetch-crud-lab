import React from "react";
import QuestionItem from "./QuestionItem.js"


function QuestionList({ questions, handleDelete, handlePatch }) {
  console.log(questions)
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        {questions.map((question) => (
          <QuestionItem
           key={question.id} 
           question={question}
           handleQuestionDeleted={handleDelete} 
            onUpdateItem={handlePatch}
            />
        ))}
        </ul>
    </section>
  );
}

export default QuestionList;
