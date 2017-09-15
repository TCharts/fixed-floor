var floor = require('./');
var expect = require('expect');

describe('fixed-floor', function() {
  it('1. fixed > 0', function() {
    expect(floor(125.34567, 1)).toBe(125.3);
    expect(floor(125.34567, 2)).toBe(125.34);
    expect(floor(125.34567, 3)).toBe(125.345);
    expect(floor(125.34567, 4)).toBe(125.3456);
    expect(floor(125.34567, 5)).toBe(125.34567);
    expect(floor(125.34567, 6)).toBe(125.34567);
  });

  it('2. fixed = 0', function() {
    expect(floor(125.6, 0)).toBe(125);
    expect(floor(125.4, 0)).toBe(125);
    expect(floor(125.6, null)).toBe(125);
    expect(floor(125.6, '')).toBe(125);
    expect(floor(125.6)).toBe(125);
    expect(floor(125.4, null)).toBe(125);
    expect(floor(125.6, undefined)).toBe(125);
    expect(floor(125.4, undefined)).toBe(125);
    expect(floor(125.6)).toBe(125);
    expect(floor(125.4)).toBe(125);
  });

  it('3. fixed < 0', function() {
    expect(floor(125.34567, -1)).toBe(120);
    expect(floor(125.34567, -2)).toBe(100);
  });

  it('4. exception', function() {
    expect(floor.bind(null, 'hello', 2)).toThrow('Parameters should be type of number!');
    expect(floor.bind(null, 123, '2')).toThrow('Parameters should be type of number!');
    expect(floor.bind(null, 123, 1.1)).toThrow('Parameter `fixed` should be an integer!');
    expect(floor.bind(null, 123, -1.1)).toThrow('Parameter `fixed` should be an integer!');
  });

  it('5. random', function() {
    for (var i = 0; i < 10000; i += 1) {
      var r = Math.random();
      expect((floor(r, 2) + '').length).toBeLessThanOrEqualTo(4);
    }
  });
});
