import React from 'react';
import './Post.less';
import Like from './Like/Like';

class Post extends React.Component {
  render() {
    return (
      <div className="Post">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="Post__name">
              { this.props.name }
            </h2>
          </div>
          <div className="col-lg-4">
            <span className="Post__date pull-right">
              { this.props.postedAt }
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <span className="Post__text">
              { this.props.post }
            </span>
          </div>
        </div>
        <Like
          likes={this.props.likes}
        />
      </div>
    );
  };
}

export default Post;
