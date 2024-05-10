import {useGSAP} from "@gsap/react"
import clsx from "clsx"
import gsap from "gsap"
import {FC, useContext, useEffect, useRef, useState} from "react"

import {MainContext} from "../../providers/MainContext"

import styles from "./index.module.scss"

interface IMouseFollowLight {}

export const MouseFollowLight: FC<IMouseFollowLight> = ({}) => {
  const {posY, mousePosition} = useContext(MainContext)

  const [isPlay, setIsPlay] = useState<boolean>(false)

  const refRoot = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isPlay && refRoot.current) {
      let parent = refRoot.current.parentElement
      let rootPos = refRoot.current.getBoundingClientRect()
      if (parent && rootPos) {
        let parentPos = parent?.getBoundingClientRect()

        let blockPosY = mousePosition.y - parentPos.y - rootPos.height / 2
        let blockPosX = mousePosition.x - parentPos.x - rootPos.width / 2

        gsap.set(refRoot.current, {
          y: blockPosY,
          x: blockPosX,
        })
      }
    }
  }, [posY, mousePosition, isPlay])

  useGSAP(() => {
    const refRootParent = refRoot.current?.parentElement

    if (refRootParent) {
      ScrollTrigger.create({
        trigger: refRootParent,
        start: `top bottom`,
        end: `bottom top`,
        // markers: true,

        onEnter() {
          setIsPlay(true)
        },
        onEnterBack() {
          setIsPlay(true)
        },
        onLeave() {
          setIsPlay(false)
        },
        onLeaveBack() {
          setIsPlay(false)
        },
      })
    }
  }, [])

  return (
    <>
      {window.innerWidth > 1024 && (
        <div className={clsx(styles.MouseFollowLight)} ref={refRoot} />
      )}
    </>
  )
}
