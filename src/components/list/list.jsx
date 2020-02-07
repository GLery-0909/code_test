import React, { Component } from 'react';
import Item from '../item/item';

export default class List extends Component {
  render() {
    const { users, error, isLoading, isFirst } = this.props;
    if (isFirst) {
      return <h2>请输入关键词</h2>;
    } else if (isLoading) {
      return <h2>loading...</h2>;
    } else if (error) {
      return <h2>{error}</h2>;
    } else {
      return (
        <div className="row">
          {users.map(personObj => {
            return <Item key={personObj.login} {...personObj} />;
          })}
        </div>
      );
    }
  }
}
