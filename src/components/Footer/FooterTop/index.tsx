import {motion as m} from "framer-motion"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useLayoutEffect, useRef} from "react"

import AppLogo from "../../ul/AppLogo/AppLogo"

import FooterList from "./FooterList"
import "./FooterTop.scss"
import ListSocial from "./ListSocial"

const FooterTop = () => {
  const productsLink = [
    {
      id: "1",
      text: "CDN",
      link: "#",
    },
    {
      id: "2",
      text: "Hosting",
      link: "#",
    },
    {
      id: "3",
      text: "Streaming Platform",
      link: "#",
    },
    {
      id: "4",
      text: "Storage",
      link: "#",
    },
    {
      id: "5",
      text: "DDoS Protection",
      link: "#",
    },
    {
      id: "6",
      text: "Software Development",
      link: "#",
    },
    {
      id: "7",
      text: "Cloud",
      link: "#",
    },
    {
      id: "8",
      text: "IT Infrastructure Managment",
      link: "#",
    },
  ]
  const companyLink = [
    {
      id: "1",
      text: "About",
      link: "#",
    },
    {
      id: "2",
      text: "Customers",
      link: "#",
    },
    {
      id: "3",
      text: "Case studies",
      link: "#",
    },
    {
      id: "4",
      text: "Careers",
      link: "#",
    },
    {
      id: "5",
      text: "Blog",
      link: "#",
    },
    {
      id: "6",
      text: "Press",
      link: "#",
    },
    {
      id: "7",
      text: "Legal information",
      link: "#",
    },
    {
      id: "8",
      text: "Site map",
      link: "#",
    },
  ]
  const resourcesLink = [
    {
      id: "1",
      text: "Status page",
      link: "#",
    },
    {
      id: "2",
      text: "API Documentation",
      link: "#",
    },
    {
      id: "3",
      text: "Internet peering points",
      link: "#",
    },
    {
      id: "4",
      text: "Product Documentation",
      link: "#",
    },
    {
      id: "5",
      text: "Looking Glass",
      link: "#",
    },
    {
      id: "6",
      text: "Developer Tools",
      link: "#",
    },
  ]

  const listRf = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const animationTitle = gsap.from(".footer-top__right-contact-title", {
        y: 16,
        opacity: 0,
        duration: 0.6,
        delay: 1,
        paused: true,
      })
      const animation = gsap.from(".footer-top__right-contact-item", {
        y: 35,
        opacity: 0,
        duration: 0.4,
        stagger: 0.2,
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
    <div className="footer-top">
      <div className="footer-top__left">
        <div className="footer-top__logo">
          <AppLogo />
          <m.p
            initial={{opacity: 0, y: 10}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.2, duration: 1, ease: "easeInOut"}}
            className="footer-top__left-text"
          >
            Powerful solutions to help your business grow globally. Experience
            our superior performance, proven by the largest online businesses.
          </m.p>
          <ListSocial />
        </div>
        <div className="footer-top__left-line"></div>
      </div>
      <div className="footer-top__right" ref={listRf}>
        <FooterList title="Products" items={productsLink} />
        <FooterList title="Company" items={companyLink} time={0.5} />
        <FooterList title="Resources" items={resourcesLink} time={0.6} />
        <div className="footer-top__right-contact">
          <h6 className="footer-top__right-contact-title">Contact</h6>
          <ul className="footer-top__right-list">
            <li className="footer-top__right-contact-item">
              <a href="tel:35220880507">+ 352 208 80 507</a>
            </li>
            <li className="footer-top__right-contact-item">
              <a href="mailto:sales@gcorelabs.com">sales@gcorelabs.com</a>
            </li>
          </ul>
          <h6
            style={{marginBottom: "13px"}}
            className="footer-top__right-contact-title"
          >
            Contact
          </h6>
          <ul>
            <li className="footer-top__right-contact-item">
              <a href="mailto:support@gcorelabs.com">support@gcorelabs.com</a>
            </li>
            <li className="footer-top__right-contact-item">
              <a href="mailto:info@gcorelabs.com">info@gcorelabs.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default FooterTop
