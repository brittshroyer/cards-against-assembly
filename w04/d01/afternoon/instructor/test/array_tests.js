var expect = require('chai').expect;
var items = [];

describe('Built in Array methods', function() {

  beforeEach(function() {
    items = ['John', 'Jane'];
  });

  afterEach(function() {
    items = [];
  })

  it('should return number of items in array', function() {
    expect(items.length).to.equal(2);
  });

  // push
  it('should add new element', function() {
    items.push('Joe');

    expect(items[2]).to.equal('Joe');
  });

  // pop
  it('should remove last element and return it', function() {
    var last = items.pop();

    expect(last).to.equal('Jane');
    expect(items.length).to.equal(1);
  });

  // shift
  it('should remove first element and return it', function() {
    var first = items.shift();

    expect(first).to.equal('John');
    expect(items.length).to.equal(1);
  });

  // should find a value in Array
  it('should find index of element if exists', function() {
    expect(items.indexOf('John')).to.be.above(-1);
  });

  // should NOT find value in Array
  it('should NOT find index of element if it does not exist', function() {
    expect(items.indexOf('Fake')).to.not.be.above(-1);
  });
});
