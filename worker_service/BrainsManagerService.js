module.exports = class BrainsManagerService {
  constructor() {
    this.MINDS = {
      1: `問題を自分ごとにして考え、やり抜き・解決する。`,
      2: `Good Input/Output & Algorithm`,
      3: `スピードは価値。早く、速く。`,
      4: `All for One, One for All'`,
      5: `心と身体の健康を保つ。`,
    };
  }

  getBrainsMind(id) {
    const mind = this.MINDS[id];
    if (mind === undefined) return `引数が適切ではありません.`;

    return mind;
  }

  getBrainsMindButtons() {
    return [
      {
        'name': 'one',
        'text': this.MINDS[1],
        'value': 1,
        'type': 'button',
      },
      {
        'name': 'two',
        'text': this.MINDS[2],
        'value': 2,
        'type': 'button',
      },
      {
        'name': 'three',
        'text': this.MINDS[3],
        'value': 3,
        'type': 'button',
      },
      {
        'name': 'four',
        'text': this.MINDS[4],
        'value': 4,
        'type': 'button',
      },
      {
        'name': 'five',
        'text': this.MINDS[5],
        'value': 5,
        'type': 'button',
      }
    ];
  }
}