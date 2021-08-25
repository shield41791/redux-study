import React from 'react';

class DisplayNumber extends React.Component {
  render() {
    return (
      <div>
        <h1>Display Number</h1>
        <input type="text" value={this.props.number} readOnly></input>
      </div>
    )
  }
}

export default DisplayNumber;