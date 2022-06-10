// function  Student(name,grade){
//     this.name = name;
//     this.grade = grade;
// }

// let Saby = Student("sabina", "5")

//  selecting elements needed
let enroll = document.getElementById("enroll");
let name = document.getElementById("name")
let grade = document.getElementById("grade")
let gp = document.getElementById("gpa")
let age1 = document.getElementById("age")
let courses = document.getElementById("courses.")



class Student{
    __name
    __grade
    __gpa
    __age
    __courses=[]

    // static whomi(){
    //     console.log('Welcome, Student of Andy International School')
    // }

    constructor(name,grade,gpa,age,courses){
        this.__name = name
        this.__grade = grade
        this.__gpa = gpa
        this.__age = age
        this.__courses = courses
        
    }
    setName(value){
        if (newName.length<20){
            this._name = value;
        }else{
            console.log("Your Name cannot be more than 20 characters")
        }
    }
    setAge(value){
      if (value>0){
          this.__age = value;
      }else{
          alert("Invalid Age")
      }
    }
    setGrade(value){
        if (value > 0){
            this.__grade = value;
        }else{
            alert("Invalid grade")
        }
    }
    setGpa(value){
        if (value > 1){
            this.__gpa = value;
        }else{
            alert(" We cannot admit you, sorry")
        }
    }
    setCourses(value){
        if( value.length>5){
            this.__courses = value;
        }else{
            alert("subjects cannot be more than 5.")
        }
    }

    getName(){
        return this.__name;
    }

   getAge(){
       return this.__age;
   }

   getGrade(){
    return this.__grade;
   }
 
    getGpa(){
        return this._gpa;
    }
    getCourses(){
        return this.__courses;
    }

    sayHello(){
        console.log(` Welcome, ${this.__name}. It is a pleasure to admit a ${this.__age} years old with ${this.__gpa} gpa into ${this.__grade}th grade.`)
    }
    printCourses(){
        
        // for ( let i=0; i<this.courses.length;i++){
        //     console.log(this.__courses[i]);
        // }
        //    the for loop above is equal to the one below.
        this.__courses.forEach(element =>console.log(element));
        // / or

       console.log(...this._courses)
    }
    calculateGpa(newGpa){
        this.__gpa = newGpa;
    }
}



// second assignment 


class HighSchooler extends Student {

  constructor(name,grade,gpa,age,courses){
   super(name,grade,gpa,age,courses);
  }
}

let studentRoll = [];

function createStudent(name,grade,gpa,age,courses){
  let newStudent = new Student(name,grade,gpa,age,courses);
  console.log(newStudent)
  return newStudent;
}

function enrollStudent(student){
     studentRoll.push(student)
}

function searchStudent(student){
    return studentRoll.filter( (a) => student.getName.toLowerCase.includes === 'Sabina') 
}

function filterStudentsByGrade (student){
  return studentRoll.filter((a) => student.getGrade>5)
}



function filterStudentsByAge(student){
    return studentRoll.filter((a) => 5<student.getAge<20)
}

 

//  object student
 

const renderStudent = (student) => {
  
// creating elements here 
let div = document.createElement("div")
let newName = document.createElement("p");
let newGrade = document.createElement("p");
let newGpa = document.createElement("p")
let newAge = document.createElement("p")
let newCourses = document.createElement("p")

// appending here 
div.appendChild(nameSet);
div.appendChild(grade);
div.appendChild(gpa);
div.appendChild(age);
div.appendChild(courses);

// assigning values 
newName.innertext = student.name;
newGrade.innertext = student.grade;
newGpa.innertext = student.gpa;
newAge.innertext = student.age;
newCourses.innertext = student.courses.join(" ,");
 
return div;
}

const renderStudents = (student) => {
    for (let i=o; i<studentRoll - 1; i++){
    const studentDiv = renderStudent(studentRoll[i]);
    let list = document.getElementById('list');
    list.appendChild(div);
    }
    

}





enroll.addEventListener("click", (e) =>{
    e.preventDefault();
    createStudent();
    enrollStudent();
    
})