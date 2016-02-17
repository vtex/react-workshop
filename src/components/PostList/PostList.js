import React from 'react';
import './PostList.less';

class PostList extends React.Component {
  render() {
    return (
      <div className="PostList row">
        <div className="col-lg-8 col-lg-offset-2">

        <div className="Post">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="Post__name">
                Cleyton
              </h2>
            </div>
            <div className="col-lg-4">
              <span className="Post__date pull-right">
                17/02/2016
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <span className="Post__text">
                isso é um post
              </span>
            </div>
          </div>
          <div className="Like row">
            <div className="col-lg-12">
              <span className="Like__qty pull-right">
                100
              </span>
              <a
                className="Like__button pull-right"
                href="#">
                Like
              </a>
            </div>
          </div>
        </div>

        </div>
      </div>
    );
  };
}

export default PostList;
