  
const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const employee = new Employee();
  expect(typeof (employee)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Rhys";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testId = 10;
  const employee = new Employee(10, testId);
  expect(employee.id).toBe(testId);
});

test("Can set email via constructor argument", () => {
  const testEmail = "test@noemail.com";
  const employee = new Employee("Hannah", 1, testEmail);
  expect(employee.email).toBe(testEmail);
});

describe('getName', () => {
    it('Should get name from getName()', () => {
        const testName = 'Shawn';
        const employee = new Employee(testName);
        expect(employee.getName()).toBe(testName);
    });
});


describe('getEmail', () => {
    it('Should get Email from getEmail()', () => {
        const testEmail = 'test@noemail.com';
        const employee = new Employee('email', 1, testEmail);
        expect(employee.getEmail()).toBe(testEmail);
    });
});


describe('getRole', () => {
    it('getRole() should return \"Employee\"', () => {
          const testRole = 'Employee';
        const employee = new Employee('Role', 1, 'test@noemail.com');
        expect(employee.getRole()).toBe(testRole);
    });
});