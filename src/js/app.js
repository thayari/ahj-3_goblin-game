import Board from './board';
import Gameplay from './gameplay';

const board = new Board();
const gameplay = new Gameplay(board);

board.drawBoard();
gameplay.start();
