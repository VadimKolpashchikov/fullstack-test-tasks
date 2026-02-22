export default class User {
  #task;

  constructor(task) {
    this.task = task;
  }

  set task(value) {
    if (typeof value !== 'object') {
      throw new Error('incorrect "task" parameter format');
    }

    this.#task = value;
  }

  do() {
    if (!this.#task) {
      console.warn(
        'Task is not defined. Please, set task before calling "do" method',
      );
      return;
    }

    this.#task.run();
  }
}
