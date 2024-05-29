import {motion as m} from "framer-motion"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import {useLayoutEffect, useRef} from "react"

import ImgOne from "../../assets/images/other_products/1.svg"
import ImgTwo from "../../assets/images/other_products/2.svg"
import ImgThree from "../../assets/images/other_products/3.svg"
import ImgFour from "../../assets/images/other_products/4.svg"
import ImgFive from "../../assets/images/other_products/5.svg"
import ImgSix from "../../assets/images/other_products/6.svg"
import ImgEllips from "../../assets/images/other_products/ellips.svg"

import "./OtherProducts.scss"

gsap.registerPlugin(ScrollTrigger)

const OtherProducts = () => {
  const productsRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".other-products__item",
        {
          y: 200,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".other-products__item.first-row",
            scrub: true,
            start: "top 95%",
            end: "50% 20%",
            // markers: true,
          },
        },
      )
    }, productsRef)

    return () => ctx.revert()
  }, [])
  return (
    <section className="other-products">
      <div className="container">
        <div className="other-products__wrapper">
          <m.h2
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.4, duration: 1, ease: "easeInOut"}}
            className="other-products__title"
          >
            Try other Gcore products 
          </m.h2>
          <div className="other-products__inner" ref={productsRef}>
            <div className="other-products__item first-row">
              <div className="other-products__item-img">
                <img src={ImgOne} alt="" />
                <img
                  className="other-products__item-ellips"
                  src={ImgEllips}
                  alt=""
                />
              </div>
              <h6>AI GPU Infrastructure </h6>
              <p>
                Virtual Machines and Bare Metal servers with A100 and H100
                NVIDIA GPUs for LLM training and high-performance computing 
              </p>
              <a href="#">
                Learn More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071C8.90237 17.3166 8.90237 16.6834 9.29289 16.2929L13.5858 12L9.29289 7.70711C8.90237 7.31658 8.90237 6.68342 9.29289 6.29289C9.68342 5.90237 10.3166 5.90237 10.7071 6.29289L15.7071 11.2929Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            {/* 2 */}
            <div className="other-products__item first-row">
              <div className="other-products__item-img">
                <img src={ImgTwo} alt="" />
                <img
                  className="other-products__item-ellips"
                  src={ImgEllips}
                  alt=""
                />
              </div>
              <h6>AI IPU Infrastructure   </h6>
              <p>
                Virtual and dedicated instances powered by Graphcore AI
                processors designed to accelerate ML workloads 
              </p>
              <a href="#">
                Learn More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071C8.90237 17.3166 8.90237 16.6834 9.29289 16.2929L13.5858 12L9.29289 7.70711C8.90237 7.31658 8.90237 6.68342 9.29289 6.29289C9.68342 5.90237 10.3166 5.90237 10.7071 6.29289L15.7071 11.2929Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            {/* end 2 */}
            {/* 3 */}
            <div className="other-products__item first-row">
              <div className="other-products__item-img">
                <img src={ImgThree} alt="" />
                <img
                  className="other-products__item-ellips"
                  src={ImgEllips}
                  alt=""
                />
              </div>
              <h6>Container as a Service </h6>
              <p>
                Serverless solution for running containerized applications and
                ML models in the cloud 
              </p>
              <a href="#">
                Learn More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071C8.90237 17.3166 8.90237 16.6834 9.29289 16.2929L13.5858 12L9.29289 7.70711C8.90237 7.31658 8.90237 6.68342 9.29289 6.29289C9.68342 5.90237 10.3166 5.90237 10.7071 6.29289L15.7071 11.2929Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            {/* end 3 */}
            {/* 4 */}
            <div className="other-products__item">
              <div className="other-products__item-img">
                <img src={ImgFour} alt="" />
                <img
                  className="other-products__item-ellips"
                  src={ImgEllips}
                  alt=""
                />
              </div>
              <h6>FastEdge </h6>
              <p>
                Low-latency edge computing for deploying serverless
                applications 
              </p>
              <a href="#">
                Learn More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071C8.90237 17.3166 8.90237 16.6834 9.29289 16.2929L13.5858 12L9.29289 7.70711C8.90237 7.31658 8.90237 6.68342 9.29289 6.29289C9.68342 5.90237 10.3166 5.90237 10.7071 6.29289L15.7071 11.2929Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            {/* end 4 */}
            {/* 5 */}
            <div className="other-products__item">
              <div className="other-products__item-img">
                <img src={ImgFive} alt="" />
                <img
                  className="other-products__item-ellips"
                  src={ImgEllips}
                  alt=""
                />
              </div>
              <h6>Managed Kubernetes </h6>
              <p>
                Fully managed Kubernetes clusters with GPU worker node support
                for AI/ML workloads  
              </p>
              <a href="#">
                Learn More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071C8.90237 17.3166 8.90237 16.6834 9.29289 16.2929L13.5858 12L9.29289 7.70711C8.90237 7.31658 8.90237 6.68342 9.29289 6.29289C9.68342 5.90237 10.3166 5.90237 10.7071 6.29289L15.7071 11.2929Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            {/* end 5 */}
            {/* 6 */}
            <div className="other-products__item">
              <div className="other-products__item-img">
                <img src={ImgSix} alt="" />
                <img
                  className="other-products__item-ellips"
                  src={ImgEllips}
                  alt=""
                />
              </div>
              <h6>Object Storage </h6>
              <p>
                Scalable S3-compatible cloud storage for storing and retrieving
                any amount of data 
              </p>
              <a href="#">
                Learn More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071C8.90237 17.3166 8.90237 16.6834 9.29289 16.2929L13.5858 12L9.29289 7.70711C8.90237 7.31658 8.90237 6.68342 9.29289 6.29289C9.68342 5.90237 10.3166 5.90237 10.7071 6.29289L15.7071 11.2929Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            {/* end 6 */}
          </div>
        </div>
      </div>
    </section>
  )
}
export default OtherProducts
