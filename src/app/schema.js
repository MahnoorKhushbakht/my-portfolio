import mongoose from 'mongoose';
const { Schema } = mongoose;

const courseSchema = new Schema({
  title: String, 
  price: Number,
});
export const Course = mongoose.model('Course', courseSchema);