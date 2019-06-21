import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { deletePost, addLike, removeLike } from '../../actions/postActions';

class PostItem extends Component {
  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    this.props.addLike(id);
  }

  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post, auth, showActions } = this.props;

    return (
      <div className="card card-post card-body mb-2">
        <div className="row">
          <div className="col-md-1 col-sm-2 col-2">
            <img
              className="rounded-circle img-post"
              src={post.avatar}
              alt=""
            />
          </div>
          <div className="col-md-11 col-sm-9 col-9">
            <div className="row post-name">
              <h1 className="lead">{post.name}</h1>
            </div>
            <div className="post-content">
              <p className="lead" style={{ marginLeft: "1rem" }}>
                {post.text}
              </p>
            </div>
            <div className="post-actions">
              {showActions ? (
                <span>
                  <button
                    onClick={this.onLikeClick.bind(this, post._id)}
                    type="button"
                    className="btn bg-transparent mr-1 like-button"
                  >
                    <i
                      className={classnames(
                        "fas fa-thumbs-up bg-transparent",
                        {
                          "text-info": this.findUserLike(post.likes)
                        }
                      )}
                    />
                    <span className="badge bg-transparent text-danger bold">
                      {post.likes.length}
                    </span>
                  </button>
                  <button
                    onClick={this.onUnlikeClick.bind(this, post._id)}
                    type="button"
                    className="btn btn-transparent mr-1"
                  >
                    <i className="text-secondary fas fa-thumbs-down bg-transparent" />
                  </button>
                  <Link
                    to={`/post/${post._id}`}
                    className="btn btn-info mr-1"
                  >
                    Comments
                  </Link>
                  {post.user === auth.user.id ? (
                    <button
                      onClick={this.onDeleteClick.bind(this, post._id)}
                      type="button"
                      className="btn btn-transparent text-danger mr-1"
                    >
                      <i className="fas fa-times" />
                    </button>
                  ) : null}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deletePost, addLike, removeLike })(
  PostItem
);
