const { default: expect } = require('expect');
const getUserById = require('../users');


// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

test("get id", () => {
    expect(getUserById(1)).toEqual({
        id: 1,
        username: "hpLover4",
        email: "sirious90@gmail.com",
        password: "hArrydotCom"
    });
})