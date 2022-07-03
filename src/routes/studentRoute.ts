import express from 'express'
import studentCtr from '../controllers/studentCtrl'
import { checkStudentData } from '../middleware/validate'

const router = express.Router()
// C.R.U.D (Create, Read, Update, Delete)

router.get('/students', studentCtr.getStudents)

router.get('/student/:id', studentCtr.getStudent)

router.post('/student/add', checkStudentData, studentCtr.addStudent)

router.put('/student/update/:id', checkStudentData, studentCtr.updateStudent)

router.delete('/student/delete/:id', studentCtr.deleteStudent)

export default router;