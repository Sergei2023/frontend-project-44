import { rand } from '../cli.js';

const getGcd = (num1, num2) => (!num2 ? num1 : getGcd(num2, num1 % num2));

const gcdRound = () => {
  const firstOperand = rand(1, 100);

  const secondOperand = rand(1, 100);

  const question = `${firstOperand} ${secondOperand}`;

  const correctAnswer = `${getGcd(firstOperand, secondOperand)}`;

  return [question, correctAnswer.toString()];
};

export default gcdRound;
