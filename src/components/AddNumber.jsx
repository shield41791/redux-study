import React from 'react';
import store from '../store';

class AddNumber extends React.Component {
  state = { size: 1 }

  render() {
    return (
      <div>
        <h1>Add Number</h1>
        
        <input type="button" value="+" onClick={function () {
          // onclick시 해당 action을 dispatch로 전달한다. this.state는 redux의 state가 아니라 이 컴포넌트의 state이다.
          store.dispatch({ type: 'INCREMENT', size: this.state.size });
        }.bind(this)}></input>
        
        <input type="text" value={this.state.size} onChange={function (e) {
          this.setState({ size: Number(e.target.value) });
        }.bind(this)}></input>
      </div>
    )
  }
}

export default AddNumber;