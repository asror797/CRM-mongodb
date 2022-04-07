const express = require('express')
const router = express.Router()
const {
      createCourse,
      createTeacher,
      createGroup,
      createStudent,
      getCourse,
      getGroup,
      getTeacher,
      getStudents,
      delCourse
      } = require('../controllers/controllers')



// Middlewares

const checkCourseBody = (req,res,next) => {
   const {name,title,price} = req.body

   if((name && title)&& price) {
      next()
   }else{
      res.send('error')
   }

}

const checkGroupBody = (req,res,next) => {
   const {group_name,group_teacher,course_type} = req.body

   if((group_name && group_teacher)&& course_type) {
      next()
   }else{
      res.send('error')
   }

}

const checkTeacherRequirments = (req,res,next) => {
   const {first_name,last_name,phone_number,stack} = req.body

   if((first_name && last_name)&& stack) {
      next()
   }else{
      res.send('error')
   }
}

const checkStudentRequirments = (req,res,next) => {
   const {first_name , last_name , phone_number} = req.body

   if((first_name && last_name)&&phone_number) {
      next()
   }else{
      res.send('error')
   }
}

const checkId = (req,res,next) => {
   const {id} = req.body
   if(id){
      next()
   }else{
      res.send('error')
   }
}

router.post('/new-course', checkCourseBody , createCourse)
router.get('/courses',getCourse)
router.delete('/course',checkId,delCourse)


router.post('/new-teacher',checkTeacherRequirments ,createTeacher)
router.get('/teachers',getTeacher)
// router.delete('/teacher')

router.post('/new-group',checkGroupBody,createGroup)
router.get('/groups',getGroup)
// router.delete('/group')

router.post('/new-student',checkStudentRequirments,createStudent)
router.get('/students',getStudents)
// router.delete('/student')


module.exports = router