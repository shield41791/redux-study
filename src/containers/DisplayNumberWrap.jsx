import DisplayNumber from "../components/DisplayNumber";
import { connect } from "react-redux";

// connect의 첫번째 인자로 오는 함수
// redux의 state와 react의 props를 연결해주고, 변경사항이 있으면 컴포넌트를 다시 그려준다.
// 원래 이름은 mapStateToProps 이지만, react랑 용어가 겹치기 때문에 이름을 바꿔주었다. (이름은 아무거나 괜찮다)
function mapReduxStateToReactProps(state) {
    return {
        number: state.number
    }
}

// connect()가 반환해준 함수(그래서 괄호가 두개)는 인자로 받은 컴포넌트를 wrapping해준 컴포넌트를 리턴해준다.
export default connect(mapReduxStateToReactProps)(DisplayNumber);

// ----------------------------------------------------------------------
// Before react-redux code

// import React from 'react';
// import store from "../store";

// class DisplayNumberWrap extends React.Component {
//     state = { number: store.getState().number };

//     componentDidMount() {
//         // redux state에 변화를 감지하면, 안의 함수를 실행
//         store.subscribe(function () {
//             // redux state에서 값을 가져와, 이 컴포넌트 state에 값을 세팅
//             this.setState({ number: store.getState().number });
//         }.bind(this));
//     }

//     render() {
//         return <DisplayNumber number={this.state.number} unit={this.props.unit}></DisplayNumber>
//     }
// }

// export default DisplayNumberWrap;
