const request = require("supertest");
const assert = require("assert");

const app = require("../index.js");

describe("user route test", () => {
  it("should respond incomplete data", done => {
    request(app)
      .post("/api/user/signup")
      .send({
        name: "test"
      })
      .expect({
        msg: "none of the fields can be empty"
      })
      .end((error, res) => {
        if (error) done(error);

        done();
      });
  });

  it("should respond to user creation", done => {
    request(app)
      .post("/api/user/signup")
      .send({
        name: "test name",
        email: "test@test.com",
        password: "password",
        confirm: "password"
      })
      .expect({
        msg: "the user already exists"
      })
      .end((error, res) => {
        if (error) done(error);

        done();
      });
  });

  it("should receive a logged in response", done => {
    request(app)
      .post("/api/user/login")
      .send({
        email: "test@test.com",
        password: "password"
      })
      .expect(res => {
        
        if (res.body.msg !== "you are now successfully logged in")
          throw new Error("unable to log the user in");
      })
      .end((error, res) => {
        if (error) return done(error);

        done();
      });
  });
});
