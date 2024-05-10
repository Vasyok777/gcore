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
  return (
    <div className="footer-top">
      <div className="footer-top__left">
        <div className="footer-top__logo">
          <AppLogo />
          <p className="footer-top__left-text">
            Powerful solutions to help your business grow globally. Experience
            our superior performance, proven by the largest online businesses.
          </p>
          <ListSocial />
        </div>
      </div>
      <div className="footer-top__right">
        <FooterList title="Products" items={productsLink} />
        <FooterList title="Company" items={companyLink} />
        <FooterList title="Resources" items={resourcesLink} />
        <div className="footer-top__right-contact">
          <h6>Contact</h6>
          <ul className="footer-top__right-list">
            <li>
              <a href="tel:35220880507">+ 352 208 80 507</a>
            </li>
            <li>
              <a href="mailto:sales@gcorelabs.com">sales@gcorelabs.com</a>
            </li>
          </ul>
          <h6 style={{marginBottom: "13px"}}>Contact</h6>
          <ul>
            <li>
              <a href="mailto:support@gcorelabs.com">support@gcorelabs.com</a>
            </li>
            <li>
              <a href="mailto:info@gcorelabs.com">info@gcorelabs.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default FooterTop
