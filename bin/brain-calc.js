#!/usr/bin/env node
import runGame from '../index.js';
import calcRound from '../src/games/calc-game.js';
import { phrases } from '../phrases.js';

const calcGame = () => runGame(phrases.DESCRIPTION_CALC_GAME, calcRound);

calcGame();
