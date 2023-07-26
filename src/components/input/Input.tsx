import React, { ChangeEvent, Component } from 'react';
import './Input.css';

// Define prop types for the component
interface InputProps {
  appearance?: 'outline' | 'underline' | 'filled-darker' | 'filled-lighter';
  contentBefore?: React.ReactNode;
  contentAfter?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  type?:
    | 'number'
    | 'time'
    | 'text'
    | 'search'
    | 'tel'
    | 'url'
    | 'email'
    | 'date';
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: string;
  value?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => void;
}

interface InputOnChangeData {
  value: string;
}

class Input extends Component<InputProps> {
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    const value = event.target.value;
    if (onChange) {
      onChange(event, { value });
    }
  };

  render() {
    const {
      appearance = 'outline',
      contentBefore,
      contentAfter,
      size = 'medium',
      type = 'text',
      placeholder,
      disabled = false,
      defaultValue,
      value,
    } = this.props;

    const inputProps = {
      type,
      placeholder,
      disabled,
      defaultValue,
      value,
      onChange: this.handleChange,
    };

    return (
      <div className={`input ${appearance} ${size}`}>
        {contentBefore && (
          <span className='input-content-before'>{contentBefore}</span>
        )}
        <input {...inputProps} />
        {contentAfter && (
          <span className='input-content-after'>{contentAfter}</span>
        )}
      </div>
    );
  }
}

export default Input;
