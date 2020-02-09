import React, { Component } from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js';
export default class Search extends Component {
  search = () => {
    const { value } = this.refs.keyWord;

    PubSub.publish('glery', { isFirst: false, isLoading: true });

    axios
      .get('https://api.github.com/search/users', { params: { q: value } })
      .then(
        response => {
          //更新状态
          PubSub.publish('glery', {
            isLoading: false,
            users: response.data.items
          });
        },
        err => {
          PubSub.publish('glery', {
            isLoading: false,
            error: err.message
          });
        }
      );
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          ref="keyWord"
        />
        <button onClick={this.search}>Search</button>
      </div>
    );
  }
}
