
function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Student.prototype.getFirstName = function() {
  return this.firstName;
}

Student.prototype.getLastName = function() {
  return this.lastName;
}

Student.prototype.getGreeting = function() {
  return 'Hi, my  name is ' + this.firstName;
}

module.exports = Student;
