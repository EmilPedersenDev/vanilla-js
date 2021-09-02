const db = require("./models");

const connectDb = () => {
  db.mongoose
    .connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.error(err);
      process.emit();
    });
};

module.exports = connectDb;
