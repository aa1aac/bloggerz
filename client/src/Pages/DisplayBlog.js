import React, { Component } from "react";
import axios from "axios";

// const DisplayBlog = () => {
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchData = async () => {
//     try {
//       const res = await axios.get(`/blog/${this.props.match.params.id}`);
//       setBlog(res.data);
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (blog) {
//     console.log(blog.content);
//     return (
//       <div className="container justify" style={{ textAlign: "justify" }}>
//         <h2>{blog.title}</h2>
//         <hr />
//         <span className="h5"> Published on : {blog.dateCreated}</span>
//         <hr />
//         <p className="grey-text h4">{blog.lead}</p>

//         <hr />
//         <p>
//           {blog.content.map(value => {
//             return (
//               <span>
//                 {value} <br />
//               </span>
//             );
//           })}
//         </p>
//       </div>
//     );
//   } else if (loading) {
//     return (
//       <div className="container">
//         <div className="progress">
//           <div className="indeterminate"></div>
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <div className="container">
//         <h2>Eror</h2>
//         Some error occured
//       </div>
//     );
//   }
// };

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
      return (
        <div className="container justify" style={{ textAlign: "justify" }}>
          <h2>{this.state.blog.title}</h2>
          <hr />
          <span className="h5">
            {" "}
            Published on : {this.state.blog.dateCreated}
          </span>
          <hr />
          <p className="grey-text h4 hljs-emphasis">{this.state.blog.lead}</p>

          <hr />
          <p>
            {this.state.blog.content.map((value, index) => {
              return (
                <span key={index}>
                  {value} <br />
                </span>
              );
            })}
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
