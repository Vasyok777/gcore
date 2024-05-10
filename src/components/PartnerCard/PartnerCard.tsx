import partnersBG from "../../assets/images/partners/partners-bg.png"
import {IPartner} from "../../library/types"
import {MouseFollowLight} from "../mouse-follow-light"

const PartnerCard = ({props}: {props: IPartner}) => {
  const {logo, name, description} = props

  return (
    <div
      className="
        relative w-82.5 h-52 flex flex-col items-center justify-center p-8 rounded-[1.25rem] overflow-hidden z-50
        border border-transparent
        before:bg-gradient-to-br before:from-[#424141] before:to-[#424141]/10
        before:border-inherit before:border before:rounded-[20px]
        before:absolute before:inset-0 before:z-10 before:bg-origin-border before:[mask-composite:exclude] gradient
      "
    >
      <div>
        <MouseFollowLight />
      </div>
      <img
        src={partnersBG}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
      <img src={logo} alt="Logo" />
      <p className="text-[1.375rem] mt-5 mb-4 z-50">{name}</p>
      <p className="text-center font-light text-[#54565B] z-50">
        {description}
      </p>
    </div>
  )
}

export {PartnerCard}
