import {FC} from "react"

import styles from "./FooterList.module.scss"

interface FooterListProps {
  title: string
  items: {id: string; text: string; link: string}[]
}

const FooterList: FC<FooterListProps> = ({title, items}) => {
  return (
    <div className={styles.root}>
      <h6>{title}</h6>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default FooterList
