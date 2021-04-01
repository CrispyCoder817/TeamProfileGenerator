const Intern = require("../lib/Intern");

test('it should return the role of the user', ()=>{
    let firstUser = new Intern('Harry', 21, 'friday@gmail.com', 'henry hubert dow')
    expect(firstUser.getRole()).toBe('Intern')
});

test('it should return the school of the intern', ()=>{
    let firstUser = new Intern('Harry', 21, 'friday@gmail.com', 'henry hubert dow')
    expect(firstUser.getSchool()).toBe('henry hubert dow')
});