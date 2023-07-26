import React, { Component, ReactNode } from 'react';
import './Label.css';

// Define prop types for the component
interface LabelProps {
  as?: 'label' | 'span' | 'div';
  disabled?: boolean;
  required?: boolean;
  size?: 'small' | 'medium' | 'large';
  weight?: 'normal' | 'bold';
  children: ReactNode;
}

class Label extends Component<LabelProps> {
  render() {
    const {
      as = 'label',
      disabled = false,
      required = false,
      size = 'medium',
      weight = 'normal',
      children,
    } = this.props;

    // Determine the component to render based on the 'as' prop
    const ComponentType = as;

    return (
      <ComponentType
        className={`label ${disabled ? 'disabled' : ''} ${
          required ? 'required' : ''
        } ${size} ${weight}`}
      >
        {children}
      </ComponentType>
    );
  }
}

export default Label;
