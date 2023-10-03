#!/usr/bin/env node
import runGame from "../index.js";
import primeRound from "../src/games/prime-game.js";
import { phrases } from "../phrases.js";

const primeGame = () => runGame(phrases.DESCRIPTION_PRIME_GAME, primeRound);

primeGame();
