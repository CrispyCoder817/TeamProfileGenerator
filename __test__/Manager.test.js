const Manager = require("../lib/Manager");

test('it should return the role of the Manager', ()=>{
    let firstUser = new Manager('Harry', 21, 'friday@gmail.com', 'henry hubert dow')
    expect(firstUser.getRole()).toBe('Manager')
});

test('it should return the officeNumber', ()=>{
    let firstUser = new Manager('Harry', 21, 'friday@gmail.com', '281-330-8004')
    expect(firstUser.getOfficeNumber()).toBe('281-330-8004')
});