import React, { Component } from "react";
import axios from "axios";

class DisplayBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: null,
      loading: true
    };
  }

  fetchData = async () => {
    try {
      const res = await axios.get(`/blog/${this.props.match.params.id}`);
      this.setState({ ...this.state, blog: res.data });
      this.setState({ ...this.state, loading: false });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (this.state.blog) {
      console.log(this.state.blog.content);
      return (
        <div className="container">
          <h2>{this.state.blog.title}</h2>
          <hr />
          <span className="h5">
            {" "}
            Published on : {this.state.blog.dateCreated}
          </span>
          <hr />
          <p className="grey-text h4">{this.state.blog.lead}</p>

          <hr />
          <p>
          {this.state.blog.content}
          </p>
          
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
