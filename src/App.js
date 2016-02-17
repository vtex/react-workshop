import React from 'react';
import Header from './components/Header/Header';
import PostArea from './components/PostArea/PostArea';
import PostList from './components/PostList/PostList';

class App extends React.Component {
  componentWillMount() {
    const posts = [
      {
        id: 0,
        name: 'Geovana',
        post: 'eita, forninho caiu...',
        postedAt: '01/03/2015',
        likes: 100
      },
      {
        id: 1,
        name: 'Tomattos',
        post: 'Sua mãe tá doente ):',
        postedAt: '16/02/2016',
        likes: 1
      },
      {
        id: 2,
        name: 'Thor',
        post: 'Qiss comofas reasct',
        postedAt: '16/0/2016',
        likes: 0
      },
      {
        id: 3,
        name: 'Guigs',
        post: 'Olar amigors :)',
        postedAt: '16/02/2016',
        likes: 2
      }
    ];

    this.setState({
      posts
    });
  }

  addPost = (post) => {
    //DO YOUR STUFF HERE

    this.setState({ posts });
  };

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <PostArea
          addPost={this.addPost}
        />
        <PostList
          {...this.state}
        />
      </div>
    );
  };
}

export default App;
