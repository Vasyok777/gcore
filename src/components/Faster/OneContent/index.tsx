import ImgOneContent from "../../../assets/images/faster/content-one.png"
import ImgFiveSvg from "../../../assets/images/faster/five-svg.svg"
import ImgFourSvg from "../../../assets/images/faster/four-svg.svg"
import ImgOneSvg from "../../../assets/images/faster/one-svg.svg"
import ImgSevenSvg from "../../../assets/images/faster/seven-svg.svg"
import ImgSixSvg from "../../../assets/images/faster/six-svg.svg"
import ImgThreeSvg from "../../../assets/images/faster/three-svg.svg"
import ImgTwoSvg from "../../../assets/images/faster/two-svg.svg"

import "./OneContent.scss"

const OneContent = () => {
  return (
    <div className="faster-one">
      <div className="faster-one__left">
        <img src={ImgOneContent} alt="" />
        <p>Try Gcore Inference at the Edge: Speed up AI, reduce latency.</p>
      </div>
      <div className="faster-one__right">
        <div className="faster-one__right-top">
          <h6>
            Gcore Inference at the Edge reduces the latency of your ML model
            output and improves the performance of AI-enabled applications.{" "}
          </h6>
          <p>
            It’s particularly useful for AI apps that need immediate processing
            and minimal delay, like generative AI and real-time object
            detection. 
          </p>
        </div>
        <div className="faster-one__right-bottom">
          <div className="faster-one__right-one">
            <div className="faster-one__right-item">
              <div className="faster-one__right-item-img">
                <img src={ImgOneSvg} alt="" />
              </div>
              <p>Text generation</p>
            </div>
            <div className="faster-one__right-item">
              <div className="faster-one__right-item-img">
                <img src={ImgTwoSvg} alt="" />
              </div>
              <p>Image generation   </p>
            </div>
            <div className="faster-one__right-item">
              <div className="faster-one__right-item-img">
                <img src={ImgThreeSvg} alt="" />
              </div>
              <p>Image classification   </p>
            </div>
            <div className="faster-one__right-item">
              <div className="faster-one__right-item-img">
                <img src={ImgFourSvg} alt="" />
              </div>
              <p>Speech recognition   </p>
            </div>
            <div className="faster-one__right-item">
              <div className="faster-one__right-item-img">
                <img src={ImgFiveSvg} alt="" />
              </div>
              <p>Text generation  </p>
            </div>
          </div>
          <div className="faster-one__right-two">
            <div className="faster-one__right-item">
              <div className="faster-one__right-item-img">
                <img src={ImgFourSvg} alt="" />
              </div>
              <p>Speech recognition</p>
            </div>
            <div className="faster-one__right-item">
              <div className="faster-one__right-item-img">
                <img src={ImgFiveSvg} alt="" />
              </div>
              <p>Text generation</p>
            </div>
            <div className="faster-one__right-item">
              <div className="faster-one__right-item-img">
                <img src={ImgSixSvg} alt="" />
              </div>
              <p>Speech recognition   </p>
            </div>
            <div className="faster-one__right-item">
              <div className="faster-one__right-item-img">
                <img src={ImgOneSvg} alt="" />
              </div>
              <p>Text generation</p>
            </div>
            <div className="faster-one__right-item">
              <div className="faster-one__right-item-img">
                <img src={ImgTwoSvg} alt="" />
              </div>
              <p>Image generation</p>
            </div>
            <div className="faster-one__right-item">
              <div className="faster-one__right-item-img">
                <img src={ImgThreeSvg} alt="" />
              </div>
              <p>Image classification   </p>
            </div>
          </div>
          <div className="faster-one__right-three">
            <div className="faster-one__right-item">
              <div className="faster-one__right-item-img">
                <img src={ImgTwoSvg} alt="" />
              </div>
              <p>Image generation</p>
            </div>
            <div className="faster-one__right-item">
              <div className="faster-one__right-item-img">
                <img src={ImgThreeSvg} alt="" />
              </div>
              <p>Image classification   </p>
            </div>
            <div className="faster-one__right-item">
              <div className="faster-one__right-item-img">
                <img src={ImgFourSvg} alt="" />
              </div>
              <p>Speech recognition</p>
            </div>
            <div className="faster-one__right-item">
              <div className="faster-one__right-item-img">
                <img src={ImgSixSvg} alt="" />
              </div>
              <p>Speech recognition   </p>
            </div>
            <div className="faster-one__right-item">
              <div className="faster-one__right-item-img">
                <img src={ImgSevenSvg} alt="" />
              </div>
              <p>Text generation</p>
            </div>
            <div className="faster-one__right-item">
              <div className="faster-one__right-item-img">
                <img src={ImgOneSvg} alt="" />
              </div>
              <p>Text generation</p>
            </div>
            <div className="faster-one__right-item">
              <div className="faster-one__right-item-img">
                <img src={ImgFiveSvg} alt="" />
              </div>
              <p>Text generation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default OneContent
