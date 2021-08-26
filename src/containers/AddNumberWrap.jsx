import AddNumber from "../components/AddNumber";
import React from 'react';
import store from '../store';

class AddNumberWrap extends React.Component {
    render() {
        return <AddNumber onClick={function(size) {
          // onclick시 해당 action을 dispatch로 전달한다. this.state는 redux의 state가 아니라 이 컴포넌트의 state이다.
          store.dispatch({ type: 'INCREMENT', size: size });
        }}></AddNumber>
    }
}

export default AddNumberWrap;