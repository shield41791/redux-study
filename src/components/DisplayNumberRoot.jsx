import React from 'react';
import DisplayNumberWrap from '../containers/DisplayNumberWrap';

class DisplayNumberRoot extends React.Component {
  render() {
    return (
      <div>
        <h1>Display Number Root</h1>
        <DisplayNumberWrap unit="kg" />
      </div>
    )
  }
}

export default DisplayNumberRoot;