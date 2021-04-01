const Engineer = require("../lib/Engineer");

test('it should return the role of the user', ()=>{
    let firstUser = new Engineer('George', 23, 'friends@gmail.com', 'ruse45')
    expect(firstUser.getRole()).toBe('Engineer')
});

test('it should return the github of the user', ()=>{
    let firstUser = new Engineer('George', 23, 'friends@gmail.com', 'ruse45')
    expect(firstUser.getGithub()).toBe('ruse45')
});

test('it should return the name of the user', ()=>{
    let firstUser = new Engineer('George', 23, 'friends@gmail.com', 'ruse45')
    expect(firstUser.getName()).toBe('George')
});