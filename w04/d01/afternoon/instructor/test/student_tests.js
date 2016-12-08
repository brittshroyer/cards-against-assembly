var expect = require('chai').expect;
var Student = require('../lib/student');
var john;

describe('Student test suite', function() {

  beforeEach(function() {
    john = new Student('John', 'Doe');
  })

  it('should return the first name', function() {
    expect(john.getFirstName()).to.equal('John');
  });

  it('should return the last name', function() {
    expect(john.getLastName()).to.equal('Doe');
  });
});
