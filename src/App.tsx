import React from 'react';
import logo from './logo.svg';
import './assets/styles/scss/styles.scss';
import './App.scss';
import Button from './components/button/Button';
import { AccessTimeFilled, Add24Regular } from '@fluentui/react-icons';
import Input from './components/input/Input';
import Label from './components/label/Label';
import Field from './components/field/Field';

function App() {
  const customStyles = {
    backgroundColor: 'lightblue',
    borderRadius: '5px',
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <Field
          className='custom-field'
          label='Tên'
          size='medium'
          orientation='vertical'
          customStyles={customStyles}
          // hint='Validation message and hint are below the input.'
        >
          <Input />
        </Field>
        <Field
          label='Email'
          size='medium'
          orientation='vertical'
          // hint='Validation message and hint are below the input.'
        >
          <Input type='email' />
        </Field>
        <Field
          label='Địa chỉ'
          size='medium'
          orientation='vertical'
          // hint='Validation message and hint are below the input.'
        >
          <Input />
        </Field>
        {/* <AccessTimeFilled /> */}
        <Label>Label</Label>
        <Input
          appearance='outline'
          size='small'
          placeholder='Enter your name'
          onChange={(event, data) => console.log('Input value:', data.value)}
        />
        <Input
          appearance='underline'
          defaultValue='Hello'
          size='small'
          placeholder='Search...'
          contentBefore={<i className='search-icon'>🔍</i>}
        />
        <Button size='large' icon={<Add24Regular />} appearance='outline'>
          Button
        </Button>
      </header>
    </div>
  );
}

export default App;
