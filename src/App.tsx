import React from 'react';
import { useState, useEffect } from 'react';
import { AppWrapper, FieldWrapper, MessageWrapper, Button } from './styles';

function App() {
  return (
    <AppWrapper>
        <h2>Birthday Countdown App</h2>
      <FieldWrapper>
        <label htmlFor="name">name:</label>
        <input type="text" />
      </FieldWrapper>
      <FieldWrapper>
        <label htmlFor="name">next birthday:</label>
        <input type="text" />
      </FieldWrapper>
      <Button>calculate</Button>
      <MessageWrapper>
        <div>Eliz, it's your birthday in...</div>
        <div>birthday calculator</div>
      </MessageWrapper>
    </AppWrapper>
  );
}

export default App;
