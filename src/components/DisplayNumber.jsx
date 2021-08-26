import React from 'react';
import store from "../store";
class DisplayNumber extends React.Component {
  state = { number: store.getState().number }

  // subscribe는 constructor에서 호출한다.
  constructor(props) {
    super(props);

    // redux state에 변화를 감지하면, 안의 함수를 실행
    store.subscribe(function () {
      // redux state에서 값을 가져와, 이 컴포넌트 state에 값을 세팅
      this.setState({ number: store.getState().number });
    }.bind(this));
  }

  render() {
    return (
      <div>
        <h1>Display Number</h1>
        <input type="text" value={this.state.number} readOnly></input>
      </div>
    )
  }
}

export default DisplayNumber;