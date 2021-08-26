import React from 'react';

class AddNumber extends React.Component {
  state = { size: 1 }

  render() {
    return (
      <div>
        <h1>Add Number</h1>
        
        <input type="button" value="+" onClick={function() {
          // 이 컴포넌트를 부른 곳(redux 기능을 분리시킨 AddNumberWrap 내부)의 onClick을 호출
          this.props.onClick(this.state.size);
        }.bind(this)}></input>
        
        <input type="text" value={this.state.size} onChange={function (e) {
          this.setState({ size: Number(e.target.value) });
        }.bind(this)}></input>
      </div>
    )
  }
}

export default AddNumber;