const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const cookieParser = require("cookie-parser");

const UserRouter = require("./routes/User");
const BlogRouter = require("./routes/Blog");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000; // variable for port

app.use("/api/user", UserRouter); // routing for user  api/user
app.use("/api/blog", BlogRouter); // routing for blog  api/blog

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("mongo database connected"));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
