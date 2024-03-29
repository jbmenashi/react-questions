import data from "./data"
import { useState } from "react"
import Questions from "./Questions"

const App = () => {
  const [questions, setQuestions] = useState(data)
  const [activeId, setActiveId] = useState(null)

  const toggleQuestion = (id) => {
    id === activeId ? setActiveId(null) : setActiveId(id)
  }

  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  )
}
export default App
