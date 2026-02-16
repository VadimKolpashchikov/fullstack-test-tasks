import User from './User.js';
import Task from './Task.js';

const user1 = new User(new Task('task text'));
user1.do();
