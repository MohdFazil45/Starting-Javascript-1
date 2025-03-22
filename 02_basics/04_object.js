//singleton

const tinderUser  = new Object();
const tinderUser2 = {}
tinderUser.id = "123abc"
tinderUser.name = "John"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email:"John@example.com",
    fullname: {
        userfullname:{
            firstname:"John",
            lastname:"Doe"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj2 = {
    3:"c",
    4:"d",  
}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2) // mdn documentation
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// const users = [
//     {
//     id: 1,
//     name: "John Doe",
//     email: "john@example.com"
//     },
//     {
//         id: 1,
//         name: "John Doe",
//         email: "john@example.com"
//     },
//     {
//         id: 2,
//         name: "Jane Doe",
//         email: "jane@example.com"
//     }
// ]

// users[1].email = "jane@example.com";

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



//*************************  Destructuring  ******************************/

const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstrustor:"Hitesh"
}
// course.coursename in this way we repeeatedly select data again again

const {courseInstrustor: instructor} = course
// console.log(courseInstrustor);
console.log(instructor);

