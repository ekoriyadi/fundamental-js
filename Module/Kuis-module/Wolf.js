class Wolf {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }

  howl() {
    return 'Auuuuuuuuu';
  }
}

// TODO 2
module.export = Wolf;