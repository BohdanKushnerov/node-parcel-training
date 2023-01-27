// const fetchAllUsers = () => {
//   console.log('fetchAllUsers')
// };

// const fetchUsersbyId = id => {
//   console.log('fetchUsersbyId')
// };

// const updateUsersbyId = id => {
//   console.log('updateUsersbyId')
// };

// export default {
//   fetchAllUsers,
//   fetchUsersbyId,
//   updateUsersbyId
// };

// _____Іменований експорт__________________
import shortid from "shortid";

export const fetchAllUsers = () => {
  console.log('fetchAllUsers')
};

export const fetchUsersbyId = id => {
  console.log('fetchUsersbyId')
};

export const updateUsersbyId = id => {
  console.log('updateUsersbyId')
};

export const x = 5;

export const y = 'qweqwe';

export const addUser = name => {
  const user = {
    id: shortid.generate(),
    name
  }

  console.log(user);
}
