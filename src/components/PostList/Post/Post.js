import React from 'react';
import './Post.less';

class Post extends React.Component {
  render() {
    return (
      <div className="Post">
        <span>{ this.props.name }</span>
        <br />
        <span>{ this.props.post }</span>
        <br />
        <span>{ this.props.postedAt }</span>
        <br />
        <span>{ this.props.likes }</span>
      </div>
    );
  }
}

export default Post;
