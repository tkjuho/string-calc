const calc = require('./calc')

test('string with 0 should return 0', () => {
    expect(calc.add('0')).toBe(0);
  });

test('string with 1 should return 1', () => {
    expect(calc.add('1')).toBe(1);
});