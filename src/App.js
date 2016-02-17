import React from 'react';
import Header from './components/Header/Header';
import PostArea from './components/PostArea/PostArea';
import PostList from './components/PostList/PostList';

class App extends React.Component {
  componentWillMount() {
    const posts = [
      {
        'name': 'Guigs',
        'post': 'Olar amigors :)',
        'postedAt': '2016-02-16',
        'likes': 2
      },
      {
        'name': 'Thor',
        'post': 'Qiss comofas reasct',
        'postedAt': '2016-02-16',
        'likes': 0
      },
      {
        'name': 'Geovana',
        'post': 'eita, forninho caiu...',
        'postedAt': '2015-03-01',
        'likes': 100
      },{
        'name': 'Tomattos',
        'post': 'Sua mãe tá doente ):',
        'postedAt': '2016-02-16',
        'likes': 1
      }
    ];

    this.setState({ posts });
  }

  addPost(post) {
    const posts = [
      post,
      ...this.state.posts
    ];

    this.setState({ posts });
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <PostArea addPost={this.addPost.bind(this)} />
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
