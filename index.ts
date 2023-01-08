#! /usr/bin/env node
class person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name= name;
        this.age = age;
    }
    public getname(){
        return this.name;
    }
}

class student extends person{
    rollnumber:number;
    courses: Course[]= [];
    constructor(name:string,age:number,rollnumber:number){
        super(name,age)
        this.rollnumber = rollnumber;
    }
    registerforCourses(cour:Course){
        this.courses.push(cour);
    
    }

}

class Instructor extends person{
   private Salary : number;
    course: Course[]=[];
    constructor(name:string,age:number,Salary:number){
        super(name,age);
         this.Salary = Salary;
    }
    assignCourses(Course:Course){
         this.course.push(Course);
        // more.forEach(element => {
        //     this.course.push(element);
        // });
    }
}

class Course{
    static count : number = 0;
    id:number;
    name:string;
    Student : student[] = [];
    instructor! : Instructor;
    constructor(name:string,...arg:string[]){
        this.name = name;
        this.id = ++Course.count;
        // arg.forEach(element => {
        //     this.name.push(element);
        // });
    }
    addstudent(Student:student){
        this.Student.push(Student);
        Student.registerforCourses(this);
    }
    addinstructor(instruct:Instructor){
        this.instructor = instruct;
        instruct.assignCourses(this);
    }
}

class Department{
    name:string;
    courses: Course[]=[];
    constructor(name:string){
        this.name = name;
    }
    addcourse(course: Course){
        this.courses.push(course);
    }
}
const student1 = new student("ali",22,1547);
const instructor1 = new Instructor("zia",55,100000);
const course1 = new Course("Metaverse");

course1.addstudent(student1);
course1.addinstructor(instructor1);
// console.log(course1.Student);
const department1 = new Department("Computer Science");
console.log(department1.addcourse(course1));
console.log(department1);

















