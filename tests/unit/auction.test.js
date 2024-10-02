const { createAuction, getAuctionById, placeBid, getBidsForAuction } = require('/Users/pedro/dev/Cesusc/teste-software-leilao-node/src/auction');


test('devera criar um leilão', () => {
    const auction = { id: 1, name: 'Leilão de arte', startingPrice: 100 };
    createAuction(auction);

    expect(getAuctionById(1)).toEqual(auction);
  });

  test('retornara "undefined" se leião não existir ', () => {
    expect(getAuctionById(99)).toBeUndefined();
  });

  test('devera colocar uma aposta', () => {
    createAuction({ id: 1, name: 'Leilão de arte', startingPrice: 100 });
    placeBid(1, 2, 120);

    const bids = getBidsForAuction(1);
    expect(bids.length).toBe(1);
    expect(bids[0]).toEqual({ auctionId: 1, userId: 2, amount: 120 });
  });

  test('erro se o leilão não for encontrado', () => {
    expect(() => placeBid(99, 2, 120)).toThrow('Leilão não encontrado.');
  });

  test('erro se o numero da aposta é menor que o valor inicial', () => {
    createAuction({ id: 1, name: 'Leilão de arte', startingPrice: 100 });
    
    expect(() => placeBid(1, 2, 90)).toThrow('O valor do lance deve ser maior do que o preço inicial.');
  });