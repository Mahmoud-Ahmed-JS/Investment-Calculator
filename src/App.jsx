import { useState } from 'react';
import { Header } from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

function App() {
  const [userInput, setUserInput] = useState({
    intitialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInputState={userInput} onChangeValue={handleChange} />
      {!inputIsValid && (
        <p>Please enter a duration for a Year Greater than Zero</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
