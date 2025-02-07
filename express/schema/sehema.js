import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Define User Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "Email is required"],
      unique: [true, "Email already exists"],
    },
    password: {
      type: String,
      trim: true,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt timestamps
  }
);

// Pre-save Middleware to Hash Password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Method to Compare Passwords
userSchema.methods.comparePassword = async function (inputPassword) {
  return await bcrypt.compare(inputPassword, this.password);
};

// Export User Model
const User = mongoose.model("User", userSchema);
export default User;
