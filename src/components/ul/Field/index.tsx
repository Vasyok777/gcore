import cn from "clsx"
import {InputHTMLAttributes, forwardRef} from "react"

import styles from "./Field.module.scss"

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  error?: string | undefined | any
}

const Field = forwardRef<HTMLInputElement, IField>(
  ({placeholder, error, className, type = "text", style, ...rest}, ref) => {
    return (
      <div className={cn(styles.root, className)} style={style}>
        <label>
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            className={cn(styles.input, {[styles.input__errorsdf]: !!error})}
            {...rest}
          />
          {error && <span className={styles.input__error}></span>}
        </label>
        {error && (
          <div className={styles.error}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M7.9987 1.83301C4.32536 1.83301 1.33203 4.82634 1.33203 8.49967C1.33203 12.173 4.32536 15.1663 7.9987 15.1663C11.672 15.1663 14.6654 12.173 14.6654 8.49967C14.6654 4.82634 11.672 1.83301 7.9987 1.83301ZM7.4987 5.83301C7.4987 5.55967 7.72536 5.33301 7.9987 5.33301C8.27203 5.33301 8.4987 5.55967 8.4987 5.83301V9.16634C8.4987 9.43967 8.27203 9.66634 7.9987 9.66634C7.72536 9.66634 7.4987 9.43967 7.4987 9.16634V5.83301ZM8.61203 11.4197C8.5787 11.5063 8.53203 11.573 8.47203 11.6397C8.40536 11.6997 8.33203 11.7463 8.25203 11.7797C8.17203 11.813 8.08536 11.833 7.9987 11.833C7.91203 11.833 7.82536 11.813 7.74536 11.7797C7.66536 11.7463 7.59203 11.6997 7.52536 11.6397C7.46536 11.573 7.4187 11.5063 7.38536 11.4197C7.35203 11.3397 7.33203 11.253 7.33203 11.1663C7.33203 11.0797 7.35203 10.993 7.38536 10.913C7.4187 10.833 7.46536 10.7597 7.52536 10.693C7.59203 10.633 7.66536 10.5863 7.74536 10.553C7.90536 10.4863 8.09203 10.4863 8.25203 10.553C8.33203 10.5863 8.40536 10.633 8.47203 10.693C8.53203 10.7597 8.5787 10.833 8.61203 10.913C8.64536 10.993 8.66536 11.0797 8.66536 11.1663C8.66536 11.253 8.64536 11.3397 8.61203 11.4197Z"
                fill="#E31C1C"
              />
            </svg>
            {error}
          </div>
        )}
      </div>
    )
  },
)

Field.displayName = "Field"

export default Field
