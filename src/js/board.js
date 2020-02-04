export default class Board {
  constructor() {
    this.boardSize = 4;
    this.cellIndexes = this.generateBoard();
    this.boardContainer = document.querySelector('.board-container');
  }

  generateBoard() {
    const arr = [];
    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      arr.push(i);
    }
    return arr;
  }

  drawBoard() {
    const cellsHTML = this.cellIndexes.map((index) => `<div class="cell" data-id="${index}"></div>`);

    cellsHTML.forEach((element) => {
      this.boardContainer.insertAdjacentHTML('beforeEnd', element);
    });

    this.cells = Array.from(document.getElementsByClassName('cell'));
  }
}
