import axios from 'axios';
import { Component } from 'react';

import Loader from './Loader/Loader';
import css from './AppWithRequest.module.css';

export default class AppWithRequest extends Component {
  state = {
    posts: null,
    comments: null,
    selectedPostId: null,
    isLoading: false,
    error: null,
  };

  fetchPosts = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      this.setState({
        posts: data,
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  fetchPostsComments = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${this.state.selectedPostId}`
      );
      this.setState({
        comments: data,
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  onSelectPostId = postId => {
    this.setState({
      selectedPostId: postId,
    });
  };

  componentDidMount() {
    this.fetchPosts();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.selectedPostId !== this.setState.selectedPostId) {
      this.fetchPostsComments();
    }
  }

  render() {
    return (
      <div className={css.container}>
        <h1>HTTP-request</h1>
        {this.state.error !== null && (
          <p className={css.errorBage}>
            Oops, some error occured... Error message: {this.state.error}
          </p>
        )}
        {this.state.isLoading && <Loader />}

        <div className={css.listWrapper}>
          <ul className={css.postList}>
            {this.state.posts !== null &&
              this.state.posts.map(post => {
                return (
                  <li
                    key={post.id}
                    onClick={() => this.onSelectPostId(post.id)}
                    className={css.postListItem}
                  >
                    <h2 className={css.itemTitle}>{post.title}</h2>
                    <p className={css.itemBody}>
                      <b>Body: </b>
                      {post.body}
                    </p>
                  </li>
                );
              })}
          </ul>

          <ul className={css.commentsList}>
            <li className={css.commentsListItem}>
              Selected post id: {this.state.selectedPostId}
            </li>
            <li className={css.commentsListItem}>
              <h2 className={css.commentTitle}>Id labore ex et quam laborum</h2>
              <h3 className={css.commentEmail}>Email: Eliseo@gardner.biz</h3>
              <p className={css.commentBody}>
                <b>Body: </b>
                Laudantium enim quasi est quidem magnam voluptate ipsam
                eos\ntempora quo necessitatibus\ndolor quam autem
                quasi\nreiciendis et nam sapiente accusantium
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

// [
//     {
//       "userId": 1,
//       "id": 1,
//       "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//       "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//     },]

// [
//   {
//     "postId": 1,
//     "id": 1,
//     "name": "id labore ex et quam laborum",
//     "email": "Eliseo@gardner.biz",
//     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//   },]
