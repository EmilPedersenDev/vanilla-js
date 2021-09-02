module.exports = (mongoose) => {
  const userSchema = mongoose.Schema({
    name: {
      type: String,
    },
  });

  const user = mongoose.model("User", userSchema);
  return user;
};
