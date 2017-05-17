var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var splitter = require('./splitter.js');

//splitTotal test
// describe('moneySplitter', function() {
//   it('splitTotal() should return [266.67,266.67,266.67] if 800.0 is passed in', function() {
//     expect(splitter.splitter(800.0)).deep.equal([266.67,266.67,266.67]);
//   });
// });

describe('moneySplitter', function() {
  it('moneySplitter() should return [266.66,266.66,266.68] if 800.0 is passed in', function() {
    expect(splitter.splitter(800.0)).deep.equal([266.66,266.66,266.68]);
  });
});

describe('moneySplitter', function() {
  it('moneySplitter() should return [-266.66,-266.66,-266.68] if -800.0 is passed in', function() {
    expect(splitter.splitter(-800.00)).deep.equal([-266.66,-266.66,-266.68]);
  });
});

//splitTotal test including amount to split by
// describe('moneySplitter', function() {
//   it('moneySplitter() should return [266.66,266.66,266.68] if 800.0 split 3 ways is passed in', function() {
//     expect(splitter.splitter(800.0, 3)).deep.equal([266.67,266.67,266.67]);
//   });
// });

describe('moneySplitter', function() {
  it('moneySplitter() should return [266.66,266.66,266.68] if 800.0 is passed in and divided amongst two people', function() {
    expect(splitter.splitter(800.0, 2)).deep.equal([400.00,400.00]);
  });
});

describe('moneySplitter', function() {
  it('moneySplitter() should return [140,140,140,140,140] if 700.0 is passed in and divided amongst five people', function() {
    expect(splitter.splitter(700.0, 5)).deep.equal([140,140,140,140,140]);
  });
});

describe('moneySplitter', function() {
  it('moneySplitter() should return [140,140,140,140,140] if 700.0 is passed in and divided amongst five people', function() {
    expect(splitter.splitter(.85, 3)).deep.equal([.29,.29,.27]);
  });
});

describe('moneySplitter', function() {
  it('moneySplitter() should return [140,140,140,140,140] if 700.0 is passed in and divided amongst five people', function() {
    expect(splitter.splitter(-3.85, 3)).deep.equal([-1.29,-1.29,-1.27]);
  });
});

describe('moneySplitter', function() {
  it('moneySplitter() should return [140,140,140,140,140] if 700.0 is passed in and divided amongst five people', function() {
    expect(splitter.splitter(.08, 2)).deep.equal([.04,.04]);
  });
});

describe('moneySplitter', function() {
  it('moneySplitter() should return [140,140,140,140,140] if 700.0 is passed in and divided amongst five people', function() {
    expect(splitter.splitter(.58, 4)).deep.equal([.15,.15,.15,.13]);
  });
});
