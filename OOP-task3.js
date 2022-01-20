// Create a Worker class that will have a constructor that accepts the following properties: fullName (first and last name), dayRate (rate per day of work), workingDays (number of days worked).
// 1) the class must have a showSalary() method that will display the employee's salary. Salary is the product of the dayRate by the number of days worked workingDays.
// 2) add a personal experience field and assign it a value of 1.2 and use it as an additional multiplier when determining the salary - create the showSalaryWithExperience() method. Print the salary value with this coefficient.
// 3) add getters and setters for the experience field. Set experience = 1.5 and display it.
// 4) Derive salary value with new experience.
// 5) Create multiple instances of the class (workers) with different salaries as shown in the example below. Sort the salaries of the most experienced workers
// by growth and display the result in the format: worker_fullName: salary_value
// 6) Implement dynamic sorting for any number of Worker class instances.
class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary() {
        this.salary = this.dayRate * this.workingDays;
        console.log(this.fullName + ' salary: ' + this.salary);
    }
    exp = 1.2;
    showSalaryWithExperience() {
        this.salary = this.salary * this.exp;
        console.log(this.fullName + ' salary: ' + this.salary);
    }

     get showExp () {
        return this.exp;
    }

     set setExp (value) {
         this.exp = value;
    }
}
const worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
const worker2 = new Worker("Tom Tomson", 48, 22);
const worker3 = new Worker("Andy Ander", 29, 23);
