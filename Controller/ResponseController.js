const Response = require("../models/Response");
const User = require("../models/User");

const addResponse = (req, res) => {
  // post blogId
  User.findById(req.payload).then(user => {
    const response = new Response({
      responder: user.name,
      response: req.body.response,
      parent: req.body.blogId
    });
    console.log(response);
  });

  // todo add response
};

const getRespopnse = (req, res) => {
  Response.find({ parent: req.params.blogId }).then(responses => {
    res.json(responses);
  });
};
module.exports = { addResponse, getRespopnse };
