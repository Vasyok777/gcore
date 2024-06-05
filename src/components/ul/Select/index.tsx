import cn from "clsx";
import { useState, forwardRef } from "react";
import styles from "./Select.module.scss";

export interface ISelectOption {
  value: string;
  label: string;
}

export interface ISelectProps {
  options: ISelectOption[];
  placeholder?: string;
  error?: string;
  onChange?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

const Select: React.ForwardRefRenderFunction<HTMLDivElement, ISelectProps> = (
  { options, placeholder, error, onChange, className, style },
  ref
) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    placeholder ? "" : undefined
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (value: string, label: string) => {
    setSelectedValue(value);
    onChange && onChange(value);
    setIsOpen(false);
  };

  return (
    <div className={cn(styles.root, className)} style={style} ref={ref}>
      <div className={cn(styles.select, { [styles.select__error]: !!error })}>
        <div className={styles.selected} onClick={() => setIsOpen(!isOpen)}>
          {selectedValue || placeholder}
          <svg
            className={cn(styles.arrow, { [styles.arrow__open]: isOpen })}
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9197 0.180178L6.68975 0.180177L1.07975 0.180176C0.119748 0.180176 -0.360252 1.34018 0.319748 2.02018L5.49975 7.20018C6.32975 8.03018 7.67975 8.03018 8.50975 7.20018L10.4797 5.23018L13.6897 2.02018C14.3597 1.34018 13.8797 0.180178 12.9197 0.180178Z"
              fill="white"
              fillOpacity="0.6"
            />
          </svg>
        </div>
        {isOpen && (
          <div className={styles.options}>
            {options.map(option => (
              <div
                key={option.value}
                className={styles.option}
                onClick={() => handleSelect(option.value, option.label)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
      {error && <span className={styles.select__error}></span>}
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
  );
};

export default forwardRef<HTMLDivElement, ISelectProps>(Select);
