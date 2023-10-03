#!/usr/bin/env node
import runGame from '../index.js';
import evenRound from '../src/games/even-game.js';
import { phrases } from '../phrases.js';

const evenGame = () => runGame(phrases.DESCRIPTION_EVEN_GAME, evenRound);

evenGame();
