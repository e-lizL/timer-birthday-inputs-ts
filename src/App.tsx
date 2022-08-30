import React from 'react';
import { useState, useEffect } from 'react';
import { AppWrapper, FieldWrapper, MessageWrapper, Button } from './styles';

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [name, setName] = useState('Lenny');
  const [birthdate, setBirthdate] = useState('03/06/2023');

  function sortName(event: React.ChangeEvent<HTMLInputElement>){
    setName(event.target.value)
  };

  function sortBirthdate(event: React.ChangeEvent<HTMLInputElement>){
    setBirthdate (event.target.value)
  }

  useEffect(() => {
    const birthday = new Date (birthdate);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = birthday.getTime() - now.getTime();
    }, 1000);

    return () => clearInterval(interval);
  }, [birthdate])

  return (
    <AppWrapper>
        <h2>Birthday Countdown App</h2>
      <FieldWrapper>
        <label htmlFor="name">name:</label>
        <input 
          type="text"
          onChange={sortName}
          autoComplete="off" 
        />
      </FieldWrapper>
      <FieldWrapper>
        <label htmlFor="name">next birthday:</label>
        <input 
          type="text" 
          onChange={sortBirthdate}
          autoComplete="off"
        />
      </FieldWrapper>
      <Button onClick={() => setShowMessage(true)}>calculate</Button>
      {showMessage &&
        <MessageWrapper>
          <div>{name}, it's your birthday in...</div>
          <div>{birthdate}</div>
        </MessageWrapper>
      }
    </AppWrapper>
  );
}

export default App;
