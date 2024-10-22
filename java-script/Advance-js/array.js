var student=["kawaljeet","niharika","Rajni","Komal"]
console.log(student);
console.log(student[1]);
student.push("Aparna","Daman")
console.log(student);
student.unshift("Tanvi","Vanshika")
console.log(student);
student.pop()
console.log(student);
student.shift()
console.log(student);
// traverse
for(let i=0;i<student.length;i++){
    console.log(student[i]);
}