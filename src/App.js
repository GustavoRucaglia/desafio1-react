import React, { useState } from 'react';
import { Container, Content, Row } from './Styles';
import Imput from './components/Imput';
import Button from './components/Button';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [operation, setOperation] = useState(0);

  const handleOnClear = () => {
    setCurrentNumber('');
    setOperation('');
  };

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev}${number}`);
  };

  const handleSumNumbers = () => {
    if (firstNumber === 0) {
      setFirstNumber(Number(currentNumber));
      setCurrentNumber('');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(sum);
      setFirstNumber(0);
      setOperation('');
    }
  };

  const handleSubtractNumbers = () => {
    if (firstNumber === 0) {
      setFirstNumber(Number(currentNumber));
      setCurrentNumber('');
      setOperation('-');
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(sum);
      setFirstNumber(0);
      setOperation('');
    }
  };

  const handleEquals = () => {
    if (firstNumber !== 0 && operation !== '') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleSubtractNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Imput value={currentNumber} />
        <Row>
          <Button label="x" />
          <Button label="/" />
          <Button label="C" />
          <Button label="X" onClick={handleOnClear} />
        </Row>
        <Row>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="-" onClick={handleSubtractNumbers}/>
          </Row>
          <Row>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="+" onClick={handleSumNumbers}/>
          </Row>
          <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
          </Row>
      </Content>
    </Container>
  );
};

export default App;
