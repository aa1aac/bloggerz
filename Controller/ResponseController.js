const addResponse = (req, res) => {
  res.json("add response");
};

const editResponse = (req, res) => {
  res.json("edit response");
};

module.exports = { addResponse, editResponse };
