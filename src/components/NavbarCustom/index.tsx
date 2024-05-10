import Navbar from "../Header/Navbar"

import "./NavbarCustom.scss"

const NavbarCustom = () => {
  return (
    <div className="navbar-custom">
      <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <rect width="36" height="36" rx="12" fill="#FF4C00" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27 18C27 24.0748 22.309 29 16.5231 29C14.1857 29 12.0267 28.196 10.2842 26.8382C10.5825 27.0139 10.8899 27.1723 11.2064 27.3156C12.405 27.858 13.6965 28.1387 15.0024 28.1387C17.4343 28.1387 19.7753 27.1723 21.5578 25.4384C23.3403 23.7043 24.4354 21.3268 24.6209 18.7811C24.6464 18.5405 24.6609 18.2998 24.6645 18.0592C24.6645 17.7517 24.6409 17.3965 24.61 17.0719C24.6082 17.0413 24.6063 17.0089 24.6045 16.9783C24.6045 16.942 24.6027 16.9057 24.599 16.8714L24.59 16.8809C24.5463 16.4589 24.5008 16.1342 24.5008 16.1342H16.8996L16.3084 17.2953L14.9515 19.9881H20.6956C20.4828 20.6546 20.1645 21.2809 19.7552 21.8385C19.1968 22.6063 18.4784 23.2269 17.6526 23.6547C16.8286 24.0824 15.921 24.3059 15.0006 24.304C14.2967 24.304 13.5982 24.1703 12.938 23.9144C11.783 23.4714 10.7862 22.6674 10.0823 21.6093C9.37834 20.5495 9 19.291 9 18C9 17.1731 9.15461 16.3519 9.45655 15.588C9.75849 14.8241 10.2005 14.129 10.7571 13.5427C11.3137 12.9583 11.9758 12.4924 12.7051 12.1773C13.4345 11.8622 14.2148 11.6979 15.0024 11.6979C16.2739 11.696 17.5144 12.12 18.5402 12.9087L19.3278 11.3599L20.2663 9.49792C18.7003 8.42656 16.8705 7.85746 15.0006 7.85937C13.3472 7.85937 11.7375 8.30625 10.3133 9.13507C12.054 7.79444 14.2003 7 16.5231 7C22.309 7 27 11.9252 27 18Z"
            fill="white"
          />
        </svg>
      </a>
      <Navbar />
      <a href="#" className="navbar-custom__sign">
        Sign up for free
      </a>
    </div>
  )
}
export default NavbarCustom