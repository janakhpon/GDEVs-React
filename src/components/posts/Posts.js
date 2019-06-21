import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import PostFeed from "./PostFeed";
import Spinner from "../common/Spinner";
import { getPosts } from "../../actions/postActions";
import "./posts.css";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props.post;
    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }

    return (
      <div className="feed">
        <div className="container">
          <hr/>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <PostForm />
              {postContent}
            </div>
          </div>
          <div className="row fixed-bottom card-nav">
            <button
              type="button"
              className="btn btn-danger btn-circle"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              <i class="fa fa-plus" aria-hidden="true" />
            </button>
            <a href="#top">
              <button type="button" className="btn btn-primary btn-circle">
                <i class="fa fa-arrow-up" aria-hidden="true" />
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
