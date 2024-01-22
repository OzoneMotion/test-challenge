const users = require('./data');

// Fetches all users
// const getUsers = () => {
//     return users;
// }

// Filters users by specific ID
function getUserById(id) {
    return users.find(user => user.id === id);
}



// test
// console.log(getUser(3));

module.exports = getUserById;