import { useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

const Question = ({ id, title, info, activeId, toggleQuestion }) => {
  //   const [show, setShow] = useState(false)
  const isActive = id === activeId

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => toggleQuestion(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive ? <p>{info}</p> : <></>}
    </article>
  )
}
export default Question
