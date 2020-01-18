import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class DisplayBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: null,
      loading: true,
      author: null,
      dateCreated: null
    };
  }

  fetchData = async () => {
    try {
      const res = await axios.get(`/blog/${this.props.match.params.id}`);
      const dateCreated = await new Date(
        res.data.blog.dateCreated
      ).toDateString();
      this.setState({ ...this.state, blog: res.data.blog });
      this.setState({ ...this.state, loading: false });
      this.setState({ ...this.state, author: res.data.author });
      this.setState({
        ...this.state,
        dateCreated
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchComment = async () => {
    // todo fetch comment
    console.log("fetch comment");
  };
  render() {
    if (this.state.blog && this.state.author) {
      return (
        <div className="container justify " style={{ textAlign: "justify" }}>
          <h2>{this.state.blog.title}</h2>
          <p className="grey-text h4 hljs-emphasis">{this.state.blog.lead}</p>

          <hr />
          <p className="displayBlog">
            {this.state.blog.content.map((value, index) => {
              return (
                <span key={index}>
                  {value} <br />
                </span>
              );
            })}
          </p>
          <hr />
          <span className="h5"> <b >Published on</b> : {this.state.dateCreated}</span>
          <br />
          <br />

          <span className="h5">
            {" "}
            <b> Written By</b>: {this.state.author.name}
          </span>
          <hr />

          {/* response */}
          <div className="container center-align">
            <br />
            <Link
              className="waves-effect waves-light btn"
              to={`/response/${this.props.match.params.id}`}
            >
              Response
              <i className="material-icons">comment</i>
            </Link>

            <br />
          </div>
        </div>
      );
    } else if (this.state.loading) {
      return (
        <div className="container">
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <h2>Eror</h2>
          Some error occured
        </div>
      );
    }
  }
}

export default DisplayBlog;
