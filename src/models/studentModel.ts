import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  mark: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  // gender: {
  //   type: IGender,
  //   required: true
  // },
  city: {
    type: String
  }
}, {
  timestamps: true
})

const Students = mongoose.model('Students', studentSchema)

export default Students;
