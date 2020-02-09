import React, { Component } from 'react';

export default class HomeMessageItems extends Component {
  state = {
    data: [
      { id: '001', title: '独行侠', content: '东契奇' },
      { id: '002', title: '湖人', content: '詹姆斯' },
      { id: '003', title: '雄鹿', content: '字母哥' },
      { id: '004', title: '开拓者', content: '利拉德' }
    ]
  };

  render() {
    const { id } = this.props.match.params;
    const result = this.state.data.find(item => {
      return item.id === id;
    });
    return (
      <ul>
        <li>ID:{result.id}</li>
        <li>TITLE:{result.title}</li>
        <li>CONTENT:{result.content}</li>
      </ul>
    );
  }
}
