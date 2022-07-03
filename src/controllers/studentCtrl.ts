import Students from "../models/studentModel"
import { APIfeatures } from "../lib/features";

const studentCtr = {
  getStudents: async (req, res) => {
    try {
      const features = new APIfeatures(Students.find(), req.query)
      .paginating().sorting().searching().filtering()

      const result = await Promise.allSettled([
        features.query,
        Students.countDocuments() //count number of Students.
      ])
      
      const students = result[0].status === 'fulfilled' ? result[0].value : [];
      const count = result[1].status === 'fulfilled' ? result[1].value : 0;

      return res.status(200).json({students, count})
    } catch (err) {
      return res.status(500).json({msg: err.message})
    }
  },
  getStudent: async(req, res) => {
    try {
      const student = await Students.findById(req.params.id)

      if(!student) 
        return res.status(404).json({msg: 'This student does not exist.'})

      return res.status(200).json(student)
    } catch (err) {
      return res.status(500).json({msg: err.message})
    }
  },
  addStudent: async (req, res) => {
    try {
      const { name, age, mark, category, city } = req.body;

      const newStudent = new Students({
        name, age, mark, category, city
      })
      await newStudent.save()

      return res.status(200).json(newStudent)
    } catch (err) {
      return res.status(500).json({msg: err.message})
    }
  },
  updateStudent: async (req, res) => {
    try {
      const { title, price, description, category, image } = req.body;
      
      const student = await Students.findByIdAndUpdate(req.params.id, {
        title, price, description, category, image
      }, { new: true })

      if(!student) 
        return res.status(404).json({msg: 'This student does not exist.'})

      return res.status(200).json(student)
    } catch (err: any) {
      return res.status(500).json({msg: err.message})
    }
  },
  deleteStudent: async (req, res) => {
    try {
      
      const student = await Students.findByIdAndDelete(req.params.id)

      if(!student) 
        return res.status(404).json({msg: 'This student does not exist.'})

      return res.status(200).json({msg: 'Delete Success!'})
    } catch (err) {
      return res.status(500).json({msg: err.message})
    }
  }
}

export default studentCtr;