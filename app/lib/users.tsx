import exp from "constants";

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
