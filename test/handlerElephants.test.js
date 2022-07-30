const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Para o argumento count deve retornar o número inteiro 4', () => {
    expect(handlerElephants(0)).toBe('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('0')).toBe(null);
    expect(handlerElephants(undefined)).toBe(undefined);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(typeof (handlerElephants('names'))).toBe('object');
    expect(handlerElephants('averageAge')).toBe(10.5);
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
