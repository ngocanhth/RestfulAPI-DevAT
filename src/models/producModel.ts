import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
})

// Phải đánh dấu index để có thể tìm kiếm được

// productSchema.index({title: 'text', price: 'text', description: 'text', category: 'text'})

// productSchema.index({title: 'text'})

const Products = mongoose.model('Products', productSchema)

//  Products.createIndexes({title: 'text'})

export default Products;