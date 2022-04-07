const {Schema , model} = require('mongoose')

const courseSchema = new Schema({
   id:Number,
   name:String,
   title:String,
   price:String

})

const studentSchema = new Schema({
   id:Number,
   first_name:String,
   last_name:String,
   phone_number:String
})

const teacherSchema = new Schema({
   id:Number,
   first_name:String,
   last_name:String,
   phone_number:String,
   stack:String
})

const groupSchema = new Schema({
   id:Number,
   group_name:String,
   group_teacher:String,
   course_type:String
})

const Student = model("Student",studentSchema);
const Course = model("Course",courseSchema);
const Teacher = model("Teacher",teacherSchema);
const Group = model("Group",groupSchema);


module.exports={Student,Course,Teacher,Group}