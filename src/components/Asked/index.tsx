import {useState} from "react"

import "./Asked.scss"
import AskedItem from "./AskedItem"

const Asked = () => {
  const questions = [
    {
      id: 1,
      question: "What is AI inference? ",
      answer:
        "It’s particularly useful for AI apps that need immediate processing and minimal delay, like generative AI and real-time object detection. It’s particularly useful for AI apps that need immediate processing and minimal delay, like generative AI and real-time object detection. ",
    },
    {
      id: 2,
      question:
        "What is the difference between AI inference at the edge and in the cloud?",
      answer:
        "It’s particularly useful for AI apps that need immediate processing and minimal delay, like generative AI and real-time object detection. It’s particularly useful for AI apps that need immediate processing and minimal delay, like generative AI and real-time object detection. ",
    },
    {
      id: 3,
      question:
        "What are the key benefits of Gcore Inference at the Edge for end users?",
      answer:
        "It’s particularly useful for AI apps that need immediate processing and minimal delay, like generative AI and real-time object detection. It’s particularly useful for AI apps that need immediate processing and minimal delay, like generative AI and real-time object detection. ",
    },
    {
      id: 4,
      question: "Is Gcore Inference at the Edge suitable for AIoT systems?",
      answer:
        "It’s particularly useful for AI apps that need immediate processing and minimal delay, like generative AI and real-time object detection. It’s particularly useful for AI apps that need immediate processing and minimal delay, like generative AI and real-time object detection.",
    },
    {
      id: 5,
      question: "Why is the NVIDIA L40S GPU good for AI inference?",
      answer:
        "It’s particularly useful for AI apps that need immediate processing and minimal delay, like generative AI and real-time object detection. It’s particularly useful for AI apps that need immediate processing and minimal delay, like generative AI and real-time object detection.",
    },
  ]
  const [active, setActive] = useState<null | any>(null)

  const handleToggle = (index: number) => {
    if (active === index) {
      setActive(null)
    } else {
      setActive(index)
    }
  }
  return (
    <section className="asked">
      <div className="container">
        <div className="asked__wrapper">
          <h2 className="asked__title">Frequently asked questions </h2>
          <div className="asked__box">
            {questions.map((question, index) => (
              <AskedItem
                key={index}
                active={active}
                handleToggle={handleToggle}
                faq={question}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Asked
