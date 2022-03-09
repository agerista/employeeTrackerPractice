class Employee {
  constructor(name, id, email) {
    this.name = name
    this.id = id
    this.email = email
  }

  getEmail() {
    return this.email
  }
  getId() {
    return this.id
  }

  getRole() {
    return "Employee"
  }

  getName() {
    return this.name
  }
}

module.exports = Employee
