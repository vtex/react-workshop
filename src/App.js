import React from 'react';
import Header from './components/Header/Header';
import PostList from './components/PostList/PostList';

class App extends React.Component {
  componentWillMount() {
    const posts = [
      {
        id: 0,
        name: 'Isso é outro nome',
        post: 'Isto é outro post',
        postedAt: '01/03/2015',
        likes: 100
      },
      {
        id: 1,
        name: 'Isso é um nome',
        post: 'Isto é um post',
        postedAt: '01/03/2015',
        likes: 7
      }
    ];

    this.setState({
      posts
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <PostList {...this.state} />
      </div>
    );
  };
}

export default App;
