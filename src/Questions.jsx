import Question from "./Question"

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((q) => {
        return (
          <Question
            key={q.id}
            {...q}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        )
      })}
    </section>
  )
}
export default Questions
