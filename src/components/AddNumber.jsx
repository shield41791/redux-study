import React from 'react';

class AddNumber extends React.Component {
  state = {size: 1}
    render() {
      return (
        <div>
            <h1>Add Number</h1>
            <input type="button" value="+" onClick={function() {
              // state값을 인자로 이 props를 보낸 곳의 onClick을 호출
              this.props.onClick(this.state.size);
            }.bind(this)}></input>
            <input type="text" value={this.state.size} onChange={function(e) {
              this.setState({size: Number(e.target.value)});
            }.bind(this)}></input>
            {console.log(`state.size : ${this.state.size}`)}
        </div>
      )
    }
  }

  export default AddNumber;