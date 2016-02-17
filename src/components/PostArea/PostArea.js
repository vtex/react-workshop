import React from 'react';
import './PostArea.less';

class PostArea extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    const saneToday = `${yyyy}/${mm}/${dd}`;

    const post = {
      name: 'VTEX',
      post: this.input.value,
      postedAt: saneToday,
      likes: 0
    };

    this.props.addPost(post);
    this.input.value = null;
  }

  render() {
    return (
      <div className="PostArea row-fluid">
        <div className="col-lg-8 col-lg-offset-2">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input
              ref={(ref) => this.input = ref}
              className="form-control"
              type="text"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default PostArea;
