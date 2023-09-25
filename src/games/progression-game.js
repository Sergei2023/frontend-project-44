import { rand } from "../cli.js";



const progressionRound = () => {


  const start = rand(1, 100);

  const step = rand(1, 5);

  const progression = [];

  for (let i = 0; i < step * 10; i += step) {

    progression.push(start + i);
  }


  const hiddenNumber = rand(1, 9);

  const modifiedProgression = progression;

  const correctAnswer = modifiedProgression[hiddenNumber];

  modifiedProgression[hiddenNumber] = '..';
  
  const question = progression.join(' ').toString();

  return [question, correctAnswer.toString()];
};

export default progressionRound;