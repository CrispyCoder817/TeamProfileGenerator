const Employee = require('../lib/Employee');

test('it should return the name of the user', ()=>{
    let firstUser = new Employee('Robert', 23, 'friends@gmail.com')
    expect(firstUser.getName()).toBe('Robert')
});

test('it should return the identified user', ()=>{
    let idCard = new Employee('Robert', 23, 'friends@gmail.com')
    expect(idCard.getId()).toBe(23)
});

test('it should return the user email', ()=>{
    let emailCard = new Employee('Robert', 23, 'friends@gmail.com')
    expect(emailCard.getEmail()).toBe('friends@gmail.com')
});