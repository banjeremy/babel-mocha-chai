import { expect } from 'chai';

describe('example', () => {
  it('should compare 1 and 1', () => {
    expect(1).to.equal(1);
  });

  it('should compare 1 and 1 asynchronously', (done) => {
    setTimeout(() => {
      expect(1).to.equal(1);
      done();
    }, 10);
  });

  it('should support object spread syntax', () => {
    var x = { a: 1, b: 2 };
    var y = { c: 3, a: 4 };

    expect({...x, ...y}).to.deep.equal({ a: 4, b: 2, c: 3  });
  });
});
