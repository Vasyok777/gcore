import "./Discuss.scss"

const Discuss = () => {
  return (
    <section className="discuss">
      {/* <div className="discuss__block-top"></div> */}
      <div className="container">
        <div className="discuss__wrapper">
          <h2 className="discuss__title">Contact us to discuss your project</h2>
          <p className="discuss__text">
            Get in touch with us, and we’ll guide you through running your ML
            model on Gcore Inference at the Edge. Together, we’ll explore how
            our service can benefit your end users. 
          </p>
          <a href="#" className="discuss__link">
            Talk to an expert
          </a>
        </div>
      </div>
    </section>
  )
}
export default Discuss
