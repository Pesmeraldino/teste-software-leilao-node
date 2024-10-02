const { addUser, getUserById } = require('/Users/pedro/dev/Cesusc/teste-software-leilao-node/src/user');


test('deve adicionar usuario', () => {
    const user = { id: 1, name: 'Alice' };
    addUser(user);

    expect(getUserById(1)).toEqual(user);
  });

  test('deve retornar "undefined" se usuario não existe', () => {
    expect(getUserById(99)).toBeUndefined();
  });