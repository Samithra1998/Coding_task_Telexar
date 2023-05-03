import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  dateOfBirth: { type: Date, required: true },
  email: { type: String, required: true },
//   address1: { type: String, required: true },
//   address2: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  password: { type: String, required: true },
  salary: {type: Number},
  id: { type: String },
});

export default mongoose.model("userModel", userSchema);
