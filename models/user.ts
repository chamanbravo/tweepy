import mongoose, { model, Model, Schema } from "mongoose"

const UserSchema: Schema = new Schema({
  username: {
    type: String,
    unique: [true, "username already exists"],
    required: [true, "username required"]
  },
  name: {
    type: String,
    required: [true, "Full name is required"],
    minLength: [3, "Full name should be atleast 3 characters long"],
    maxLength: [30, "Full name should be less than 30 characters"]
  },
  bio: String,
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Invalid email address"
    ]
  },
  password: String,
  verified: {
    type: Boolean,
    default: false
  },
  image: String,
  coverImage: String,
  doj: {
    type: Date,
    default: Date.now()
  }
})

export const User = (mongoose.models.User ||
  model("User", UserSchema)) as Model<IUser>
