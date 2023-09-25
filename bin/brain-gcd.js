#!/usr/bin/env node
import runGame from '../index.js';
import gcdRound from '../src/games/gcd-game.js';
import { phrases } from '../phrases.js';

const gcdGame = () => runGame(phrases.DESCRIPTION_GCD_GAME, gcdRound);

gcdGame();