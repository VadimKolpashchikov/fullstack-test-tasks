export default class Task {
  constructor(text = '') {
    this.text = text;
  }

  run() {
    console.log(this.text);
  }
}
