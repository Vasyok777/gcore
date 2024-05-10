import {useRef} from "react"

import "./AskedItem.scss"

const AskedItem = (props: any) => {
  const contentEl = useRef<null | any>(null)
  const {handleToggle, active, faq} = props
  const {question, id, answer} = faq
  return (
    <div className={`asked-item ${active === id ? "active" : ""}`}>
      <div className="asked-item__header">
        <div
          className={`asked-item__box ${active === id ? "active" : ""}`}
          onClick={() => handleToggle(id)}
        >
          <svg
            className="asked-item__svg"
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.0607 23.5607C18.4749 24.1464 17.5251 24.1464 16.9393 23.5607L9.43934 16.0607C8.85355 15.4749 8.85355 14.5251 9.43934 13.9393C10.0251 13.3536 10.9749 13.3536 11.5607 13.9393L18 20.3787L24.4393 13.9393C25.0251 13.3536 25.9749 13.3536 26.5607 13.9393C27.1464 14.5251 27.1464 15.4749 26.5607 16.0607L19.0607 23.5607Z"
              fill="white"
            />
          </svg>
          <h5 className="asked-item__title">{question}</h5>
        </div>
      </div>
      <div
        ref={contentEl}
        className={`asked-item__collapse ${active === id ? "show" : ""}`}
        style={
          active === id
            ? {height: contentEl?.current.scrollHeight}
            : {height: "0px"}
        }
      >
        <div className="asked-item__body">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}
export default AskedItem
