import User from './src/User.js';
import Task from './src/Task.js';

const user1 = new User(new Task('task text'));
user1.do();
