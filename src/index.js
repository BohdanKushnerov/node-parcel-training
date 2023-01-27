// Експортується по дефолту одна сущность
import validatePass from './js/validate-pass';
// import apiService from './js/api-service';

// console.log(validatePass);
console.log(validatePass('qweqwe'));

// console.log(apiService);

// ____Іменований імпорт_______________________
// import {
//   fetchAllUsers,
//   fetchUsersbyId,
//   updateUsersbyId,
//   x as value,
//   y as name
// } from './js/api-service';

// console.log(fetchAllUsers);
// console.log(fetchUsersbyId);
// console.log(updateUsersbyId);
// console.log(value);
// console.log(name);

// _________________________

import * as apiService from './js/api-service';

// console.log(apiService);

// _________________________

import { addUser } from './js/api-service';

addUser('mango')