class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    
    // registerStudent(studentToRegister) {
    //     let alreadyRegistered = false;
    //     this.students.forEach(student => {
    //         if (student.email === studentToRegister.email) {
    //             console.log('Already registered to this course.');
    //             alreadyRegistered = true;
    //         }
    //     });
    //     if (!alreadyRegistered) {
    //         console.log('adf', !alreadyRegistered)
    //         this.students.push(studentToRegister);
    //     }
    // }

    // registerStudent(studentToRegister) {
    //     const alreadyRegistered = this.students.filter(student => student.email === studentToRegister.email)
    //     console.log('already registed', alreadyRegistered)

    //     if(alreadyRegistered.length > 0) {
    //         console.log('Already registered to this course.');
    //     }

    //     if( !alreadyRegistered.includes(studentToRegister) ) {
    //         this.students.push(studentToRegister);
    //     } 
    //     console.log('class list', this.students)
    // }

    registerStudent(studentToRegister) {
        if (this.students.filter(student => student.email === studentToRegister.email).length) { // if this condition is truthy, that means it's not 0, meaning a student with the same email was found)
            console.log('Already registered to this course');
        } else {
            this.students.push(studentToRegister);
        }
    }
}

const student1 = new Student('Jeremy', 'jeremy@gmail.com', `finance`);
const student2 = new Student('Christina', 'christina@gmail.com', 'biology');
const newCamp = new Bootcamp("newCamp","React");
newCamp.registerStudent(student1);
newCamp.registerStudent(student2);
newCamp.registerStudent(student1);
// console.log(newCamp);