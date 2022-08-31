import React from 'react';
import { useState, useEffect } from 'react';
import { AppWrapper, FieldWrapper, MessageWrapper, Button, MessageHeading, MessageDiv, Input } from './styles';

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [name, setName] = useState('Lenny');
  const [birthdate, setBirthdate] = useState('03/06/2023');

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

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
      
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor((difference % 1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      setHours(h);

      const m = Math.floor((difference % 1000 * 60 * 60) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor(( difference % 1000 * 60 * 60) / (1000))
      setSeconds(s);

    }, 1000);

    return () => clearInterval(interval);
  }, [birthdate])

  return (
    <AppWrapper>
        <h2>Birthday Countdown Timer</h2>
      <FieldWrapper>
        <label htmlFor="name">name:</label>
        <Input
          type="text"
          onChange={sortName}
          autoComplete="off" 
        />
      </FieldWrapper>
      <FieldWrapper>
        <label htmlFor="name">next birthday:</label>
        <Input 
          type="text" 
          onChange={sortBirthdate}
          autoComplete="off"
        />
      </FieldWrapper>
      <Button onClick={() => setShowMessage(true)}>calculate</Button>
      {showMessage &&
        <MessageWrapper>
          <MessageHeading>{name}, it's your birthday in...</MessageHeading>
          <MessageDiv>{days} days,</MessageDiv>
          <MessageDiv>{hours} hours,</MessageDiv>
          <MessageDiv>{minutes} minutes,</MessageDiv>
          <MessageDiv>and {seconds} seconds.</MessageDiv>
        </MessageWrapper>
      }
    </AppWrapper>
  );
}

export default App;
