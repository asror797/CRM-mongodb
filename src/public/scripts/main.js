const template = document.getElementById('templateMain')

const localStorage = window.localStorage;
console.log(localStorage.getItem('item-id'))

const addingBtn = document.getElementById('addItemBtn')


let workboard1 = document.getElementsByClassName('Content_list')
let maindesk = document.getElementById('cards_box')


student.addEventListener('click',()=>{
   workboard.textContent = 'Students'
   addingBtn.dataset.name = 'student'
   addingBtn.textContent = 'Add Student'
   link1.classList.add('active')
   link2.classList.remove('active')
   link3.classList.remove('active')
   link4.classList.remove('active')

   maindesk.innerHTML = ''
   
   fetch('/students',{mode:"no-cors"})
      .then(data => data.json())
      .then(response => {
         response.forEach(item => {
            const temp = template.content.cloneNode(true)
            let imgCard = temp.querySelector('.courseimg')
            imgCard.src = './img/person.png'
            let hdingName = temp.querySelector('.coursename')
            hdingName.textContent = item.first_name
            let titleName = temp.querySelector('.coursetitle')
            titleName.textContent = item.last_name
            let priceP = temp.querySelector('.courseprice')
            priceP.textContent = item.phone_number

            maindesk.appendChild(temp)
         });
      })
      // .catch(err => console.log(err))

})

group.addEventListener('click',()=>{
   workboard.textContent = 'Groups'
   addingBtn.dataset.name = 'group'
   addingBtn.textContent = 'Create Group'
   link2.classList.add('active')
   link1.classList.remove('active')
   link3.classList.remove('active')
   link4.classList.remove('active')
   maindesk.innerHTML = ''
   fetch('http://localhost:5000/groups')
      .then(data => data.json())
      .then(response => {
         response.forEach(item => {
            const temp = template.content.cloneNode(true)
            let delBtnLi = temp.querySelector('.delete-btn')
            delBtnLi.dataset.id = item._id
            let editBtnLi = temp.querySelector('.edit-btn')
            editBtnLi.dataset.id = item._id
            let imgCard = temp.querySelector('.courseimg')
            imgCard.src = './img/group2.webp'
            let hdingName = temp.querySelector('.coursename')
            hdingName.textContent = item.group_name
            let titleName = temp.querySelector('.coursetitle')
            titleName.textContent = item.group_teacher
            let priceP = temp.querySelector('.courseprice')
            priceP.textContent = item.course_type

            maindesk.appendChild(temp)
         });
      })
      .catch(err => console.log(err))
})

teacher.addEventListener('click',()=>{
   workboard.textContent = 'Teachers'
   addingBtn.dataset.name = 'teacher'
   addingBtn.textContent = 'Add Teacher'
   link3.classList.add('active')
   link2.classList.remove('active')
   link1.classList.remove('active')
   link4.classList.remove('active')
   maindesk.innerHTML = ''
   fetch('http://localhost:5000/teachers')
      .then(data => data.json())
      .then(response => {
         response.forEach(item => {
            const temp = template.content.cloneNode(true)
            let imgCard = temp.querySelector('.courseimg')
            imgCard.src = './img/person.png'
            let hdingName = temp.querySelector('.coursename')
            hdingName.textContent = item.first_name
            let titleName = temp.querySelector('.coursetitle')
            titleName.textContent = item.last_name
            let priceP = temp.querySelector('.courseprice')
            priceP.textContent = item.phone_number

            maindesk.appendChild(temp)
         })
      })
})

course.addEventListener('click',()=>{
   workboard.textContent = 'Courses'
   addingBtn.dataset.name = 'course'
   addingBtn.textContent = 'Create Course'
   link4.classList.add('active')
   link2.classList.remove('active')
   link3.classList.remove('active')
   link1.classList.remove('active')
   maindesk.innerHTML = ''
   fetch('http://localhost:5000/courses')
      .then(data => data.json())
      .then(response => {
         response.forEach(item => {
            const temp = template.content.cloneNode(true)
            let imgCard = temp.querySelector('.courseimg')
            imgCard.src = './img/course1.png'
            let hdingName = temp.querySelector('.coursename')
            hdingName.textContent = item.name
            let titleName = temp.querySelector('.coursetitle')
            titleName.textContent = item.title
            let priceP = temp.querySelector('.courseprice')
            priceP.textContent = item.price

            maindesk.appendChild(temp)
         }) 
        
      })
      .catch(err => console.log(err))
})


const delBtn = document.getElementsByClassName('delete-btn')
const modal = document.querySelector('.modal')
const MaindelBtn = document.getElementById('delBtnMain')
const mainModal = document.querySelector('.addModal')
const editModal = document.querySelector('.editModal')

// function openMainModal() {
//    mainModal.style.display = 'block'
// }

const StudentModal = document.querySelector('.addStudent')
const GroupModal = document.querySelector('.createGroup')
const TeacherModal = document.querySelector('.addTeacher')
const courseModal = document.querySelector('.createCourse')

addingBtn.addEventListener('click',e=> {
   const type = e.target.dataset.name
   if(type == 'student') {
      StudentModal.style.display = 'block'
   }else if(type == 'teacher') {
      TeacherModal.style.display = 'block'
   }else if(type == 'group') {
      GroupModal.style.display = 'block'
   }else{
      courseModal.style.display = 'block'
   }
})

// function closeModal() {
//    mainModal.style.display = 'none'
// }

function openModal(event) {
   modal.style.display = 'block'
   localStorage.setItem('item-id',event.dataset.id)
   console.log(event.dataset.id)
}




canselBtn.addEventListener('click',()=>{
   modal.style.display = 'none'
})

MaindelBtn.addEventListener('click',(e)=> {
   fetch('http://localhost:5000/group',{
      method:"POST",
      headers:{
         "Content-Type":"application/json"
      },
      body:JSON.stringify({id:0})
   })
   .then(res => res.json())
   .then(data => console.log(data))
   console.log(localStorage.getItem('item-id'))
})

function closeEditModal() {
   editModal.style.display = 'none'
}

function openEditModal() {
   editModal.style.display = 'block'
}


const closeStudentModal = () => {
   StudentModal.style.display = 'none'
}

const closeGroupModal = () => {
   GroupModal.style.display = 'none'
}

const closeTeacherModal = () => {
   TeacherModal.style.display = 'none'
}

const closeCourseModal = () => {
   courseModal.style.display = ' none'
}
//maindesk

const createCourseBtn = () => {
   const data = {
      name:courseName,
      title:coursetitle,
      price:coursePrice
   }

   fetch('http://localhost:5000/teacher',{
      method:"POST",
      headers:{
         "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
   })
}

const addTeacherBtn = () => {
   const data = {
      first_name:teacherName,
      last_name:teacherSurname,
      phone_number:teacherNumber
   }

   fetch('http://localhost:5000/teacher',{
      method:"POST",
      headers:{
         "Content-Type":"application.json"
      },
      body:JSON.stringify(data)
   })
}


const  createGroupBtn = () => {
   const data = {
      group_name:"Smm pro kurs",
      group_teacher:"Eshmatov Toshmat",
      course_type:"SMM"
   }

 
   fetch('/new-group',{
      method:"POST",
      headers:{
         "Content-Type":"application.json"
      },
      body:JSON.stringify(data)
   })
   .then(data => data.json())
   .then(response => {
      console.log(response);
      if(response.message = "ok") {
         GroupModal.style.display = 'none'
      }else{
         alert('Failed action sorry :(')
      }
   })
   .catch(error => {
      console.error(error);
   })
}

const StudentName = document.getElementById('StudentNameModal'),
      StudentSurName = document.getElementById('StudentSurname'),
      StudentPhoneNumber = document.getElementById('StudentPhoneNumber'),
      GroupName = document.getElementById('GroupName') ,
      GroupTeacher = document.getElementById('GroupTeacher'),
      GroupType = document.getElementById('CourseType')

const addStudent = () => {

   const newStudent = {
      first_name:StudentName.value,
      last_name:StudentSurName.value,
      phone_number:StudentPhoneNumber.value
   }

   fetch('http://localhost:5000/new-student',{
      method:"POST",
      headers:{
         "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
   })
   .then(data => data.json())
   .then(res => console.log(res))
}





