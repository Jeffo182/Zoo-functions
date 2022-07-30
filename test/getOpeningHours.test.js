const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const zooClosed = 'The zoo is closed';
  it('Verifica se ao receber um array vazio a função `average` retorna `undefined`', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(zooClosed);
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(zooClosed);
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
    expect(getOpeningHours('Tuesday', '12:12-AM')).toBe(zooClosed);
    expect(() => getOpeningHours(12, '12:12-AM')).toThrow('Cannot read properties of undefined (reading \'toUpperCase\')');
  });
});
