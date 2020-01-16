const Response = require("../models/Response");
const User = require("../models/User");

const addResponse = (req, res) => {
  // post blogId
  console.log(req.params);

  User.findById(req.payload.id).then(user => {
    const response = new Response({
      responder: user.name,
      response: req.body.response,
      parent: req.params.blogId
    });

    response.save().then(response => {
      console.log(response);
      res.json({ msg: "comment successfully added" });
    });
    console.log(response);
  });

  // todo add response
};

const getResponse = (req, res) => {
  Response.find({ parent: req.params.blogId }).then(responses => {
    res.json(responses);
  });
};

module.exports = { addResponse, getResponse };
