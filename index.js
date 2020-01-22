const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const UserRouter = require("./routes/User");
const BlogRouter = require("./routes/Blog");
const ResponseRouter = require("./routes/Response");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000; // variable for port

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use("/api/user", UserRouter); // routing for user  api/user
app.use("/api/blog", BlogRouter); // routing for blog  api/blog
app.use("/api/response", ResponseRouter); // routing for response api/response

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("mongo database connected"));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
