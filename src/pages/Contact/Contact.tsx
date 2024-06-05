import clsx from "clsx"
import {Controller, SubmitHandler, useForm} from "react-hook-form"

import Field from "../../components/ul/Field"
import Select from "../../components/ul/Select"

import styles from "./Contact.module.scss"

interface IData {
  name?: string
  company?: string
  website?: string
  email?: string
  phone?: string | number
  country?: string | number
  product?: string | number
  message?: string | number
}
const Contact = () => {
  const {
    register: formRegister,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    mode: "onChange",
  })
  const onSubmit: SubmitHandler<IData> = (data) => {
    console.log(data)
    reset()
  }
  const countryOptions = [
    {value: "United States", label: "United States"},
    {value: "Canada", label: "Canada"},
    {value: "France", label: "France"},
  ]
  const productOptions = [
    {value: "1x NVIDIA L40S GPU", label: "1x NVIDIA L40S GPU"},
    {value: "2x NVIDIA L40S GPU", label: "2x NVIDIA L40S GPU"},
    {value: "2x NVIDIA L40S GPU", label: "2x NVIDIA L40S GPU"},
  ]
  return (
    <main className={styles.contact}>
      <div className={clsx(styles.container, "container")}>
        <div className={styles.contact__wrapper}>
          <div className={styles.contact__left}>
            <p className={styles.contact__subtitle}>Contact us</p>
            <h1 className={styles.contact__title}>How can we assist you?</h1>
            <p className={styles.contact__text}>
              Contact our team to learn more about our products, pricing, or to
              get answers to any questions you may have
            </p>
            <div className={styles.contact__bottom}>
              <div>
                <div className={styles["contact__bottom-item"]}>
                  <span>Phone Number:</span>
                  <a href="tel:35220880507">+352 208 80 507</a>
                </div>
                <div className={styles["contact__bottom-item"]}>
                  <span>Sales:</span>
                  <a href="mailto:sales@gcore.com">sales@gcore.com</a>
                </div>
                <div className={styles["contact__bottom-item"]}>
                  <span>Support:</span>
                  <a href="mailto:support@gcore.com">support@gcore.com</a>
                </div>
              </div>
              <div>
                <div className={styles["contact__bottom-item"]}>
                  <span>Help Center:</span>
                  <a href="https://support.gcore.com/hc">
                    https://support.<br></br>gcore.com/hc
                  </a>
                </div>
                <div className={styles["contact__bottom-item"]}>
                  <span>Partnership:</span>
                  <a href="mailto:partner@gcore.com">partner@gcore.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contact__right}>
            <div className={styles.contact__decor}></div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <Field
                placeholder="Full name*"
                error={errors.name?.message}
                {...formRegister("name", {
                  required: "Please complete this required field.",
                })}
              />
              <Field
                placeholder="Company*"
                error={errors.company?.message}
                {...formRegister("company", {
                  required: "Please complete this required field.",
                })}
              />
              <Field
                placeholder="Website URL"
                error={errors.website?.message}
                {...formRegister("website")}
              />
              <Field
                placeholder="Email*"
                error={errors.email?.message}
                {...formRegister("email", {
                  required: "Please complete this required field.",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              <Field
                placeholder="Phone number"
                error={errors.phone?.message}
                {...formRegister("phone")}
              />
              <div className={styles["form__flex__selects"]}>
                <Controller
                  name="country"
                  // control={control}
                  rules={{required: "Please complete this required field."}}
                  render={({field}) => (
                    <Select
                      placeholder="Country*"
                      error={errors.country?.message}
                      options={countryOptions}
                      onChange={field.onChange} // Adapt onChange
                    />
                  )}
                />
                <Controller
                  name="product"
                  // control={control}
                  rules={{required: "Please complete this required field."}}
                  render={({field}) => (
                    <Select
                      placeholder="Product*"
                      error={errors.product?.message}
                      options={productOptions}
                      {...field}
                    />
                  )}
                />
              </div>
              <textarea
                className={styles.textarea}
                placeholder="Message"
                {...formRegister("message")}
              ></textarea>
              <label className={styles.checkout}>
                <input type="checkbox" />
                I'd like to receive Gcore updates on product news, blog
                articles, and other related information.
              </label>
              <button className={styles.form__button}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Contact
