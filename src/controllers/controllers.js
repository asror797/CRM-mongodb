const { send, json } = require('express/lib/response')
const {Student,Course,Teacher,Group} = require('../models/models')


//Course

   /*Create Course*/

const createCourse = async (req,res) => {
   const {name , title ,price} = req.body
   let lengthCourse = await Course.find()
   const newCourse = Course({
      id:lengthCourse.length,
      name:name,
      title:title,
      teacher:"null",
      price:price
   })
   console.log(lengthCourse)
   newCourse.save()
   res.send('created new course')
}

   /*Get Course*/

const getCourse = async (_,res) => {
   const courses = await Course.find({},{__v:0})
   res.send(JSON.stringify(courses))
}



//Teacher

   /* Create Teacher */

const createTeacher = async (req,res) => {
   const {first_name , last_name ,stack , phone_number} = req.body
   const teacherLength = await Teacher.find()
   const newTeacher = Teacher({
      id:teacherLength.length,
      first_name:first_name,
      last_name:last_name,
      phone_number:phone_number,
      stack:stack
   })
   newTeacher.save()
   res.send('Created new teacher')
}

const getTeacher = async (_,res) => {
   const teachers = await Teacher.find({},{__v:0})
   res.send(JSON.stringify(teachers))
}



//Group

   /*Create Group*/

const createGroup = async (req,res) => {
   const {group_name , group_teacher ,course_type} = req.body
   const groupLength = await Group.find()
   const newGroup = Group({
      id:groupLength.length,
      group_name:group_name,
      group_teacher:group_teacher,
      course_type:course_type,
   })
   newGroup.save()
   res.send(JSON.stringify({message:ok}))
}

const getGroup = async (_,res) => {
   const groups = await Group.find({},{__v:0})
   res.send(JSON.stringify(groups))
}


//Student

//Create Student

const createStudent = async (req,res) => {
   const groupLength = await Student.find()
   
   const {first_name , last_name , phone_number} = req.body

   const newStudent = await Student({
      id:groupLength.length,
      first_name:first_name,
      last_name:last_name,
      phone_number:phone_number
   })

   newStudent.save()
   res.send('created new student')

}

const getStudents = async (_,res) => {
   const Students = await Student.find({},{__v:0})

   res.send(JSON.stringify(Students))
}


const delCourse = async (req,res) => {
   const {id} = req.body
   Course.remove({id},() => {
      console.log('deleted')
   })

   res.send('deleted')
}


const delGroup = async (req,res) => {
   const {id} = req.body
   Group.remove({id},() => {
      console.log('deleted')
   })
   res.send('deleted')
}


const delStudent = async (req,res) => {
   const {id} = req.body
   Student.remove({id},() => {
      console.log('deleted')
   })
   res.send('deleted')
}


const delTeacher = async (req,res) => {
   const {id} = req.body
   Teacher.remove({id},() => {
      console.log('deleted')
   })
   res.send('deleted')
}






module.exports = {createCourse , createTeacher , getCourse , getTeacher,createGroup,getGroup , createStudent,getStudents , delCourse,delTeacher,delGroup,delStudent}

