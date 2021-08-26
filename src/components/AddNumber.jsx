import React from 'react';

class AddNumber extends React.Component {
  state = { size: 1 }

  render() {
    return (
      <div>
        <h1>Add Number</h1>

        <input type="button" value="+" onClick={function () {
          // Contatiner 컴포넌트에 정의된 onClick을 호출
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