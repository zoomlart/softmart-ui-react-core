import React, { Component, ReactNode } from 'react';
import styles from './Button.module.scss'; // Import the CSS module for styles

// Define prop types for the component
interface ButtonProps {
  icon?: React.ReactNode;
  as?: 'a' | 'button';
  disabledFocusable?: boolean;
  size?: 'small' | 'medium' | 'large';
  appearance?: 'subtle' | 'outline' | 'secondary' | 'primary' | 'transparent';
  iconPosition?: 'left' | 'right';
  shape?: 'circular' | 'square' | 'rounded';
  children: ReactNode;
}

class Button extends Component<ButtonProps> {
  render() {
    const {
      icon,
      as: ComponentType = 'button',
      disabledFocusable = false,
      size = 'medium',
      appearance = 'default',
      iconPosition = 'left',
      shape = 'square',
      children,
      ...restProps
    } = this.props;

    const content = (
      <>
        {iconPosition === 'left' && icon}
        {children}
        {iconPosition === 'right' && icon}
      </>
    );

    // Combine all the CSS classes using the CSS module styles
    const classNames = [
      styles.button,
      styles[size],
      styles[appearance],
      styles[`icon-${iconPosition}`],
      styles[shape],
      disabledFocusable ? styles['disabled-focus'] : '',
    ].join(' ');

    return (
      <ComponentType
        {...restProps}
        className={classNames}
        disabled={disabledFocusable}
      >
        {content}
      </ComponentType>
    );
  }
}

export default Button;
