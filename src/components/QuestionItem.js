import React from "react";

function QuestionItem({ question, handleQuestionDeleted, onUpdatedItem }) {
  const { id, prompt, answers, correctIndex } = question;
   console.log(answers)
   const options = answers.map((answer, index) => (
    <option key = {index} value = {index}>
      {answer}
    </option>

   ));

   function handleUpdateQuestion(event) {
    const correctIndex = parseInt(event.target.value)
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers: {
          "Content-Type": "application/json"
      },

      body: JSON.stringify({
        correctIndex: correctIndex

      })

    })
    .then((response) => response.json())
    .then((updatedItem) => onUpdatedItem(updatedItem))

   }

   function handleDelete() {
    fetch(`http://localhost:4000/questions/${id}`, {
    method: 'DELETE',

  })

  .then((response) => response.json())
  .then(() => handleQuestionDeleted(id));

}

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select 
        defaultValue={correctIndex}
        onChange={handleUpdateQuestion}
        >
          {options}
        </select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
