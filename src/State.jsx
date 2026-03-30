import React, { Component } from 'react';

export default class State extends Component {
  state = { current: new Date() }; // state の初期化

  componentDidMount() { // 要素がマウントされたとき実行
    this.timerId = setInterval(() => this.setState({ current: new Date() }), 1000);
  }

  componentWillUnmount() { // 要素がアンマウントされたとき実行
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>現在時刻は {this.state.current.toLocaleString()} です。</div>
    );
  }
}
