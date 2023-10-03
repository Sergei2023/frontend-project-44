#!/usr/bin/env node
import runGame from '../index.js';
import progressionRound from '../src/games/progression-game.js';
import { phrases } from '../phrases.js';




const progressionGame = () => runGame(phrases.DESCRIPTION_PROGRESSION_GAME, progressionRound);

progressionGame();