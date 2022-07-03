import mongoose, { Schema } from 'mongoose'
import { IProductModel } from '../interface';

const ProductSchema: Schema = new Schema(
  {
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
            type: Schema.Types.ObjectId, 
            required: true, 
            ref: 'Category'
      },
      price: {
          type: Number,
          required: true
      }
  },
  {
      timestamps: true,
      versionKey: false
  }
);

export default mongoose.model<IProductModel>('Products', ProductSchema);
