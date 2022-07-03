import mongoose, { Schema } from 'mongoose'
import { ICategoryModel } from '../interface';

const CategorySchema: Schema = new Schema(
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
          type: String,
          required: true
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

export default mongoose.model<ICategoryModel>('Category', CategorySchema);
