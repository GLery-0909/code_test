import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import HomeMessageItems from '../home_message_items/home_message_items';

export default class HomeMessage extends Component {
  state = {
    messages: []
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        messages: [
          { id: '001', title: 'message1' },
          { id: '002', title: 'message2' },
          { id: '003', title: 'message3' },
          { id: '004', title: 'message4' }
        ]
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.messages.map(msgObj => {
            return (
              <li key={msgObj.id}>
                <Link to={`/home/message/items/${msgObj.id}`}>
                  {msgObj.title}
                </Link>
                &nbsp;&nbsp;
              </li>
            );
          })}
        </ul>
        <hr />
        <Route path="/home/message/items/:id" component={HomeMessageItems} />
      </div>
    );
  }
}
