import {motion as m} from "framer-motion"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useLayoutEffect, useRef} from "react"

import styles from "./ListSocial.module.scss"

const ListSocial = () => {
  const listRef = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const targets = ".footer-list__social-item"

      const animation = gsap.from(targets, {
        y: 35,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        paused: true,
      })

      ScrollTrigger.create({
        trigger: listRef.current,
        onEnter: () => animation.restart(),
        onLeave: () => animation.pause().progress(0),
        onEnterBack: () => animation.restart(),
        onLeaveBack: () => animation.pause().progress(0),
      })
    }, listRef)

    return () => ctx.revert()
  }, [])

  return (
    <ul className={styles.root} ref={listRef}>
      <m.li className="footer-list__social-item">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_382_12246)">
              <path
                d="M17.8308 0.694336H1.76001C0.990176 0.694336 0.367676 1.3021 0.367676 2.05352V18.1907C0.367676 18.9421 0.990176 19.5535 1.76001 19.5535H17.8308C18.6007 19.5535 19.2269 18.9421 19.2269 18.1943V2.05352C19.2269 1.3021 18.6007 0.694336 17.8308 0.694336ZM5.96281 16.7652H3.1634V7.76285H5.96281V16.7652ZM4.56311 6.53626C3.66435 6.53626 2.93871 5.81063 2.93871 4.91555C2.93871 4.02048 3.66435 3.29484 4.56311 3.29484C5.45818 3.29484 6.18382 4.02048 6.18382 4.91555C6.18382 5.80694 5.45818 6.53626 4.56311 6.53626ZM16.4385 16.7652H13.6428V12.3892C13.6428 11.3468 13.6244 10.0024 12.1878 10.0024C10.7329 10.0024 10.5119 11.1406 10.5119 12.3156V16.7652H7.71981V7.76285H10.4014V8.99312H10.4382C10.8102 8.2859 11.7237 7.53816 13.0829 7.53816C15.9155 7.53816 16.4385 9.40198 16.4385 11.8257V16.7652Z"
                fill="url(#paint0_linear_382_12246)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_382_12246"
                x1="6.13021"
                y1="0.694336"
                x2="6.13021"
                y2="25.3161"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <clipPath id="clip0_382_12246">
                <rect
                  x="0.367676"
                  y="0.694336"
                  width="18.8592"
                  height="18.8592"
                  rx="4.04125"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
      </m.li>
      <li className="footer-list__social-item">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13.5 21.8873C18.3113 21.1635 22 17.012 22 11.999C22 6.47617 17.5228 1.99902 12 1.99902C6.47715 1.99902 2 6.47617 2 11.999C2 17.012 5.68874 21.1635 10.5 21.8873L10.5 14.999H9C8.17157 14.999 7.5 14.3274 7.5 13.499C7.5 12.6706 8.17157 11.999 9 11.999H10.5V9.99902C10.5 8.06602 12.067 6.49902 14 6.49902H14.5C15.3284 6.49902 16 7.17059 16 7.99902C16 8.82745 15.3284 9.49902 14.5 9.49902H14C13.7239 9.49902 13.5 9.72288 13.5 9.99902V11.999H15C15.8284 11.999 16.5 12.6706 16.5 13.499C16.5 14.3274 15.8284 14.999 15 14.999H13.5L13.5 21.8873Z"
              fill="url(#paint0_linear_382_12248)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_382_12248"
                x1="14"
                y1="-1.33431"
                x2="14"
                y2="23.9432"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </li>
      <li className="footer-list__social-item">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.1485 2.66699C19.0121 2.66699 21.3337 4.98848 21.3337 7.85218V16.1485C21.3337 19.0121 19.0121 21.3337 16.1485 21.3337H7.85218C4.98848 21.3337 2.66699 19.0121 2.66699 16.1485L2.66699 7.85218C2.66699 4.98848 4.98848 2.66699 7.85218 2.66699L16.1485 2.66699ZM12.0003 7.85218C9.70937 7.85218 7.85218 9.70937 7.85218 12.0003C7.85218 14.2912 9.70937 16.1485 12.0003 16.1485C14.2912 16.1485 16.1485 14.2912 16.1485 12.0003C16.1485 9.70937 14.2912 7.85218 12.0003 7.85218ZM12.0003 9.92625C13.1458 9.92625 14.0744 10.8548 14.0744 12.0003C14.0744 13.1458 13.1458 14.0744 12.0003 14.0744C10.8548 14.0744 9.92625 13.1458 9.92625 12.0003C9.92625 10.8548 10.8548 9.92625 12.0003 9.92625ZM16.667 6.29662C16.0942 6.29662 15.63 6.76092 15.63 7.33366C15.63 7.90639 16.0942 8.3707 16.667 8.3707C17.2397 8.3707 17.704 7.90639 17.704 7.33366C17.704 6.76092 17.2397 6.29662 16.667 6.29662Z"
              fill="url(#paint0_linear_382_12251)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_382_12251"
                x1="10.667"
                y1="0.666992"
                x2="10.667"
                y2="26.0003"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </li>
      <li className="footer-list__social-item">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_382_12254)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.1238 2.69434C13.1609 2.69434 14.2232 2.72076 15.2537 2.76243L16.4715 2.81902L17.637 2.88596L18.7283 2.95893L19.7235 3.03365C21.9519 3.20945 23.7427 4.88603 23.9606 7.0686L24.0088 7.569L24.0997 8.64155C24.1848 9.75334 24.2475 10.9657 24.2475 12.1239C24.2475 13.2822 24.1848 14.4945 24.0997 15.6063L24.0088 16.6789C23.9929 16.8501 23.9767 17.0172 23.9606 17.1793C23.7427 19.3619 21.9519 21.0384 19.7235 21.2142L18.7283 21.2889L17.637 21.3619L16.4715 21.4288L15.2537 21.4854C14.2232 21.5271 13.1609 21.5535 12.1238 21.5535C11.0867 21.5535 10.0244 21.5271 8.99382 21.4854L7.77601 21.4288L6.61052 21.3619L5.51922 21.2889L4.52398 21.2142C2.29565 21.0384 0.504834 19.3619 0.286945 17.1793L0.238743 16.6789L0.147817 15.6063C0.0627957 14.4945 0 13.2822 0 12.1239C0 10.9657 0.0627957 9.75334 0.147817 8.64155L0.238743 7.569C0.254631 7.39773 0.270761 7.2307 0.286945 7.0686C0.504834 4.88603 2.29565 3.20945 4.52398 3.03365L5.51922 2.95893L6.61052 2.88596L7.77601 2.81902L8.99382 2.76243C10.0244 2.72076 11.0867 2.69434 12.1238 2.69434ZM9.69901 9.26574V14.9822C9.69901 15.5266 10.3052 15.8668 10.7901 15.5946L15.8821 12.7364C16.3671 12.4642 16.3671 11.7836 15.8821 11.5115L10.7901 8.65326C10.3052 8.38105 9.69901 8.72132 9.69901 9.26574Z"
                fill="url(#paint0_linear_382_12254)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_382_12254"
                x1="13.6392"
                y1="2.69434"
                x2="13.6392"
                y2="25.1803"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <clipPath id="clip0_382_12254">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </li>
      <li className="footer-list__social-item">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.0005 2C15.1051 2 16.0005 2.89543 16.0005 4C16.0005 5.44733 17.0305 6.6618 18.3989 6.93991C19.4813 7.15992 20.1804 8.21575 19.9604 9.29819C19.7404 10.3806 18.6846 11.0798 17.6021 10.8598C17.0411 10.7457 16.5042 10.5646 16.0005 10.3252V16C16.0005 19.3137 13.3142 22 10.0005 22C6.68678 22 4.00049 19.3137 4.00049 16C4.00049 13.2015 5.91456 10.8551 8.50197 10.1891C9.57168 9.91382 10.6621 10.5578 10.9374 11.6275C11.2127 12.6972 10.5687 13.7876 9.49901 14.0629C8.63596 14.285 8.00049 15.0708 8.00049 16C8.00049 17.1046 8.89592 18 10.0005 18C11.1051 18 12.0005 17.1046 12.0005 16V4C12.0005 2.89543 12.8959 2 14.0005 2Z"
              fill="url(#paint0_linear_382_12257)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_382_12257"
                x1="8.00049"
                y1="-1.33333"
                x2="8.00049"
                y2="27.3333"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </li>
      <li className="footer-list__social-item">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20.5962 2.00098H17.454C17.2062 2.00098 16.8395 2.11764 16.6873 2.42431C16.5351 2.73098 16.3429 3.11209 16.3429 3.11209L10.7873 14.2232L14.1207 20.8899L14.4651 21.5776C14.6184 21.8832 14.984 22.001 15.2318 22.001H18.374C18.9295 22.001 18.9073 21.5776 18.7684 21.2999L18.5651 20.8899L15.2318 14.2232L20.7873 3.11209L20.9918 2.70209C21.1307 2.42431 21.1518 2.00098 20.5962 2.00098ZM8.49843 6.86875C8.34621 6.56209 7.97954 6.44542 7.73176 6.44542H4.58954C4.03399 6.44542 4.05621 6.86875 4.1951 7.14653L4.39843 7.55653L5.78732 10.3343L3.28732 15.3343L3.08288 15.7443C2.94399 16.0221 2.92288 16.4454 3.47843 16.4454H6.62065C6.86843 16.4454 7.2351 16.3276 7.38843 16.0221L7.73176 15.3343L10.2318 10.3343L8.84287 7.55653L8.49843 6.86875Z"
              fill="url(#paint0_linear_382_12260)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_382_12260"
                x1="9.33333"
                y1="0.667643"
                x2="9.33333"
                y2="25.3343"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </li>
      <li className="footer-list__social-item">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_382_12262)">
              <path
                d="M22.182 18.8328C22.182 18.8328 22.0645 20.5555 20.4984 20.5555C19.2889 20.5555 18.4629 19.633 17.6894 18.4351C19.8863 16.5175 21.2814 13.6539 21.2814 10.4539C21.2815 4.6804 16.7413 0 11.1407 0C5.54016 0 1 4.6804 1 10.454C1 16.2276 5.54016 20.908 11.1407 20.908C12.1571 20.908 13.1382 20.7531 14.064 20.4663C15.2353 22.327 16.7221 24 19.0497 24C23.7872 24 23.983 18.8328 23.983 18.8328H22.182V18.8328ZM11.1407 19.1852C7.87551 19.1852 5.22854 15.2761 5.22854 10.454C5.22854 5.63188 7.87551 1.72276 11.1407 1.72276C14.4059 1.72276 17.0529 5.63188 17.0529 10.454C17.0529 12.3715 16.634 14.1442 15.9244 15.5846C15.1229 14.4403 14.1608 13.4658 12.7852 13.1556C10.3449 12.6053 8.24336 13.7037 7.57775 14.2519L8.20419 15.5439C8.20419 15.5439 8.83748 15.1798 10.4078 15.5435C11.3972 15.7726 12.1661 17.1457 13.0472 18.721C12.4491 19.0218 11.8079 19.1852 11.1407 19.1852Z"
                fill="url(#paint0_linear_382_12262)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_382_12262"
                x1="14"
                y1="-4.66667"
                x2="14"
                y2="25"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <clipPath id="clip0_382_12262">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </li>
      <li className="footer-list__social-item">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24 12.001C24 18.6284 18.6274 24.001 12 24.001C5.37258 24.001 0 18.6284 0 12.001C0 5.37356 5.37258 0.000976562 12 0.000976562C18.6274 0.000976562 24 5.37356 24 12.001ZM18.2448 10.2461C19.2132 10.2461 19.9992 11.0321 19.9992 12.0005C19.9992 12.7163 19.5641 13.3338 18.9887 13.6145C19.0167 13.783 19.0308 13.9514 19.0308 14.1338C19.0308 16.8286 15.9009 19.004 12.0272 19.004C8.15356 19.004 5.02374 16.8286 5.02374 14.1338C5.02374 13.9514 5.03777 13.7689 5.06584 13.6005C4.4483 13.3198 4.02725 12.7163 4.02725 12.0005C4.02725 11.0321 4.81321 10.2461 5.78163 10.2461C6.24479 10.2461 6.67988 10.4426 6.98865 10.7373C8.19567 9.85313 9.86584 9.30577 11.7325 9.24963L12.6167 5.06717C12.6448 4.98296 12.6869 4.91278 12.7571 4.87068C12.8272 4.82857 12.9115 4.81454 12.9957 4.82857L15.9009 5.44612C16.0974 5.02506 16.5185 4.74436 17.0097 4.74436C17.6974 4.74436 18.2588 5.30577 18.2588 5.99349C18.2588 6.68121 17.6974 7.24261 17.0097 7.24261C16.336 7.24261 15.7887 6.70927 15.7606 6.04963L13.1641 5.50226L12.3641 9.24963C14.1887 9.3198 15.8448 9.8812 17.0378 10.7373C17.3465 10.4286 17.7676 10.2461 18.2448 10.2461ZM9.2483 12.0005C8.56058 12.0005 7.99918 12.5619 7.99918 13.2496C7.99918 13.9373 8.56058 14.4987 9.2483 14.4987C9.93602 14.4987 10.4974 13.9373 10.4974 13.2496C10.4974 12.5619 9.93602 12.0005 9.2483 12.0005ZM12.0132 17.4602C12.4904 17.4602 14.1185 17.404 14.9746 16.5479C15.1009 16.4216 15.1009 16.2251 15.0027 16.0847C14.8764 15.9584 14.6658 15.9584 14.5395 16.0847C13.9922 16.618 12.8553 16.8145 12.0272 16.8145C11.1992 16.8145 10.0483 16.618 9.51497 16.0847C9.38865 15.9584 9.17812 15.9584 9.05181 16.0847C8.92549 16.211 8.92549 16.4216 9.05181 16.5479C9.89391 17.39 11.536 17.4602 12.0132 17.4602ZM13.5009 13.2496C13.5009 13.9373 14.0623 14.4987 14.7501 14.4987C15.4378 14.4987 15.9992 13.9373 15.9992 13.2496C15.9992 12.5619 15.4378 12.0005 14.7501 12.0005C14.0623 12.0005 13.5009 12.5619 13.5009 13.2496Z"
              fill="url(#paint0_linear_382_12264)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_382_12264"
                x1="12"
                y1="-1.99902"
                x2="12"
                y2="28.6676"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </li>
      <li className="footer-list__social-item">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_382_12268)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.0851 2.00098C16.9322 2.00098 16.7774 2.00604 16.6249 2.01607C16.1766 2.04555 15.837 2.43293 15.8665 2.88129C15.896 3.3296 16.2837 3.66897 16.7317 3.63972C16.8488 3.63204 16.9677 3.6281 17.0851 3.6281C20.001 3.6281 22.3732 6.00035 22.3732 8.9162C22.3732 9.27274 22.3376 9.62889 22.2674 9.97469C22.202 10.297 22.3467 10.6407 22.6225 10.8196C22.9033 11.0017 23.284 10.9877 23.552 10.788C23.7108 10.6696 23.8227 10.4923 23.862 10.2984C23.9538 9.8462 24.0003 9.3812 24.0003 8.91616C24.0003 5.10321 20.8981 2.00098 17.0851 2.00098ZM18.915 11.5906C19.4864 10.4787 19.5478 9.43912 19.0812 8.63109C18.5977 7.79352 17.5997 7.31704 16.2713 7.28943C15.2959 7.26942 14.1883 7.49151 13.0777 7.92356C13.4605 6.61804 13.337 5.58164 12.7085 4.95314C11.9532 4.19784 10.6039 4.17192 8.90903 4.88011C7.32864 5.54048 5.59197 6.77057 4.0188 8.34365C1.67589 10.6866 0.119269 13.4042 0.0447851 15.2779C0.0153945 15.4636 0.000488281 15.6494 0.000488281 15.8304C0.000488281 17.5082 1.17658 19.0656 3.31211 20.2154C5.36795 21.3225 8.09237 21.9321 10.9835 21.9321C13.8746 21.9321 16.599 21.3225 18.6548 20.2154C20.7904 19.0656 21.9665 17.5082 21.9665 15.8304C21.9665 14.2191 20.8868 12.7246 18.915 11.5906ZM17.0721 14.5921C16.9518 13.2062 16.0371 11.9854 14.4966 11.1544C13.0116 10.3532 11.1075 10.0064 9.13498 10.1777C7.16253 10.3491 5.34664 11.0191 4.02205 12.0643C2.64796 13.1486 1.95744 14.5089 2.07786 15.8947C2.19828 17.2806 3.11295 18.5014 4.65345 19.3324C5.89044 19.9997 7.41795 20.3519 9.03378 20.3518C9.35782 20.3518 9.68557 20.3377 10.0151 20.309C11.9875 20.1377 13.8033 19.4677 15.1279 18.4225C16.5021 17.3382 17.1925 15.9779 17.0721 14.5921ZM16.8818 6.06818C16.8818 5.73119 17.155 5.45801 17.492 5.45801C19.3985 5.45801 20.9496 7.0091 20.9496 8.91565C20.9496 9.25263 20.6765 9.52582 20.3395 9.52582C20.0025 9.52582 19.7293 9.25263 19.7293 8.91565C19.7293 7.68199 18.7257 6.67835 17.492 6.67835C17.155 6.67835 16.8818 6.40516 16.8818 6.06818ZM13.4373 14.6159C12.9916 12.7623 10.8334 11.6859 8.6261 12.2164C6.41885 12.7471 4.98575 14.6869 5.43129 16.5406C5.65076 17.4534 6.28235 18.2043 7.20987 18.6549C7.78563 18.9346 8.4334 19.0769 9.10151 19.0769C9.47848 19.0769 9.86187 19.0316 10.2424 18.9401C12.4497 18.4095 13.8829 16.4697 13.4373 14.6159ZM11.7977 15.0175C11.7977 15.4668 11.4334 15.8311 10.9841 15.8311C10.5348 15.8311 10.1705 15.4668 10.1705 15.0175C10.1705 14.5682 10.5348 14.204 10.9841 14.204C11.4334 14.204 11.7977 14.5682 11.7977 15.0175ZM9.76381 16.4412C9.76381 17.2275 9.12638 17.865 8.34008 17.865C7.55377 17.865 6.91635 17.2275 6.91635 16.4412C6.91635 15.6549 7.55377 15.0175 8.34008 15.0175C9.12638 15.0175 9.76381 15.6549 9.76381 16.4412Z"
                fill="url(#paint0_linear_382_12268)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_382_12268"
                x1="12.0004"
                y1="0.667708"
                x2="12.0004"
                y2="24.6665"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <clipPath id="clip0_382_12268">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </li>
    </ul>
  )
}
export default ListSocial
