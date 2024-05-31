import clsx from "clsx"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {FC, useLayoutEffect, useRef} from "react"

import styles from "./FooterList.module.scss"

interface FooterListProps {
  title: string
  time?: number
  items: {id: string; text: string; link: string}[]
}

const FooterList: FC<FooterListProps> = ({title, items}) => {
  const listRf = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const animationTitle = gsap.from(".footer__list-menu-title", {
        y: 16,
        opacity: 0,
        duration: 0.5,
        delay: 2,
        paused: true,
      })
      const animation = gsap.from(".footer__list-menu-item", {
        y: 28,
        opacity: 0,
        duration: 0.3,
        stagger: 0.15,
        paused: true,
      })

      ScrollTrigger.create({
        trigger: listRf.current,
        onEnter: () => animation.restart(),
        onLeave: () => animation.pause().progress(0),
        onEnterBack: () => animation.restart(),
        onLeaveBack: () => animation.pause().progress(0),
      })
      ScrollTrigger.create({
        trigger: listRf.current,
        onEnter: () => animationTitle.restart(),
        onLeave: () => animationTitle.pause().progress(0),
        onEnterBack: () => animationTitle.restart(),
        onLeaveBack: () => animationTitle.pause().progress(0),
      })
    }, listRf)

    return () => ctx.revert()
  }, [])
  return (
    <div className={clsx(styles.root, "footer__list-menu")} ref={listRf}>
      <h6 className={clsx(styles.title, "footer__list-menu-title")}>{title}</h6>
      <ul className={styles.list}>
        {items.map((item) => (
          <li
            key={item.id}
            className={clsx(styles.item, "footer__list-menu-item")}
          >
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default FooterList
