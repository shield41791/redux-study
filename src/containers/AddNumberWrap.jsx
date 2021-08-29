import AddNumber from "../components/AddNumber";
import { connect } from "react-redux";

// connect의 두번째 인자로 오는 함수
// redux의 dispatch와 react의 props를 연결해준다.
// 원래 이름은 mapDispatchToProps 이지만, react랑 용어가 겹치기 때문에 이름을 바꿔주었다. (이름은 아무거나 괜찮다)
function mapReduxDispatchToReactProps(dispatch) {
  return {
    onClick: function (size) {
      // onclick시 해당 action을 reducer로 전달한다.
      dispatch({ type: 'INCREMENT', size: size });
    }
  }
}

export default connect(null, mapReduxDispatchToReactProps)(AddNumber);

// ----------------------------------------------------------------------
// Before react-redux code

// import React from 'react';
// import store from '../store';

// class AddNumberWrap extends React.Component {
//     render() {
//         return <AddNumber onClick={function(size) {
//           // onclick시 해당 action을 dispatch로 전달한다.
//           store.dispatch({ type: 'INCREMENT', size: size });
//         }}></AddNumber>
//     }
// }

// export default AddNumberWrap;