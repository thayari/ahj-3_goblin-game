export default class Gameplay {
  constructor(board) {
    this.missed = 0;
    this.hit = 0;
    this.board = board;
    this.wasHit = true;
  }

  placeGoblin() {
    let allowedIndexes;
    const goblinImage = document.querySelector('.goblin');
    if (goblinImage) {
      allowedIndexes = this.board.cellIndexes.filter((item) => item !== Number(this.position));
      goblinImage.classList.remove('goblin');
    } else {
      allowedIndexes = this.board.cellIndexes;
    }
    const randIndex = allowedIndexes[Math.floor(Math.random() * allowedIndexes.length)];
    // eslint-disable-next-line max-len
    const randCell = this.board.cells.filter((element) => Number(element.dataset.id) === randIndex)[0];

    if (!this.wasHit) {
      this.missed += 1;
      document.getElementById('missed-number').textContent = this.missed;
    }
    this.wasHit = false;

    randCell.classList.add('goblin');
    this.position = randCell.dataset.id;

    if (this.missed === 5) {
      alert('Game over!');
      this.restart();
    }
  }

  addCellListener() {
    document.querySelector('.board-container').addEventListener('click', (event) => {
      if (event.target.classList.contains('goblin')) {
        this.hit += 1;
        this.wasHit = true;
      }
      document.getElementById('hit-number').textContent = this.hit;
      if (this.hit === 5) {
        alert('You win!');
        this.restart();
      }
    });
  }

  start() {
    this.addCellListener();
    setInterval(() => this.placeGoblin(), 1000);
  }

  restart() {
    this.missed = 0;
    this.hit = 0;
    this.wasHit = true;
    document.getElementById('missed-number').textContent = 0;
    document.getElementById('hit-number').textContent = 0;
  }
}
