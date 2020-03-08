const assert = require("assert");
const request = require("supertest");

const app = require("../index");

describe("blog test", () => {
  let Cookies;

  before(done => {
    request(app)
      .post("/api/user/login")
      .send({
        email: "test@test.com",
        password: "password"
      })
      .expect(200)
      .end((error, res) => {
        Cookies = res.header["set-cookie"].pop().split(";")[0];

        if (error) done(error);

        done();
      });
  });

  it("should not create a new blog when post is incomplete", done => {
    request(app)
      .post("/api/blog")
      .set("Cookie", Cookies)
      .send({
        title: "this is a title",
      
      })
      .expect({ msg: "none of the fields can be empty" })
      .end((error, res) => {
        if (error) return done(error);

        done();
      });
  });

  it("should create new blog when post is complete", done => {
    request(app)
      .post("/api/blog")
      .set("Cookie", Cookies)
      .send({
        title: "this is a title",
        lead: "this is my lead",
        content: "this is the content of a title"
      })
      .expect({ msg: "successfully saved the post " })
      .end((error, res) => {
        if (error) return done(error);

        done();
      });
  });
});
