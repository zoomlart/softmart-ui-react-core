import React, { Component, ReactNode, ReactElement, cloneElement } from 'react';
import styles from './Field.module.css';

// Define prop types for the component
interface FieldProps {
  label?: string;
  as?: 'div' | 'fieldset';
  validationMessage?: string;
  validationMessageIcon?: ReactNode;
  hint?: string;
  children: ReactNode;
  orientation?: 'horizontal' | 'vertical';
  validationState?: 'success' | 'warning' | 'error';
  required?: boolean;
  size?: 'small' | 'medium' | 'large';
  customStyles?: React.CSSProperties;
  className?: string;
}

type ChildElementWithSize = ReactElement<
  { size?: 'small' | 'medium' | 'large' },
  any
>;

class Field extends Component<FieldProps> {
  render() {
    const {
      label,
      as = 'div',
      validationMessage,
      validationMessageIcon,
      hint,
      children,
      orientation = 'vertical',
      validationState,
      required = false,
      size = 'medium',
      customStyles,
      className,
    } = this.props;

    // Determine the component to render based on the 'as' prop
    const ComponentType = as;

    // Clone the children and pass down the 'size' prop
    const childrenWithSizeProp = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        // Use the defined type 'ChildElementWithSize' to avoid type errors
        return cloneElement(child as ChildElementWithSize, { size });
      }
      return child;
    });

    // Combine all the CSS classes using the CSS module styles
    const classNames = [
      styles.field,
      styles[orientation],
      validationState ? styles[validationState] : '',
      styles[size],
      className || '',
    ].join(' ');

    // Combine the custom styles with the CSS module styles
    const combinedStyles = { ...customStyles, ...styles };

    // Add size class for the label based on the 'size' prop
    const labelClassName = `${required ? styles.required : ''} ${
      styles.formLabel
    } ${styles[size]}`;

    return (
      <ComponentType className={classNames} style={combinedStyles}>
        {label && (
          <label className={labelClassName}>
            {label}
            {required && <span className={styles['required-symbol']}>*</span>}
          </label>
        )}
        {childrenWithSizeProp}
        {validationMessage && (
          <div
            className={
              validationState
                ? styles['validation-message'] + ' ' + styles[validationState]
                : ''
            }
          >
            {validationMessageIcon && (
              <span className={styles['validation-icon']}>
                {validationMessageIcon}
              </span>
            )}
            {validationMessage}
          </div>
        )}
        {hint && <div className={styles.hint}>{hint}</div>}
      </ComponentType>
    );
  }
}

export default Field;
