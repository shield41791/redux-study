import React from 'react';
import AddNumber from './AddNumber.jsx';

class AddNumberRoot extends React.Component {
  render() {
    return (
      <div>
        <h1>Add Number Root</h1>
        <AddNumber onClick={function(size) {
          // alert(`size : ${size}`);
          this.props.onClick(size);
        }.bind(this)}></AddNumber>
      </div>
    )
  }
}

export default AddNumberRoot;