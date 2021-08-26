import DisplayNumber from "../components/DisplayNumber";
import React from 'react';
import store from "../store";

class DisplayNumberWrap extends React.Component {
    state = { number: store.getState().number };

    // // subscribe는 constructor에서 호출 <- X
    // constructor(props) {
    //     super(props);

    //     // redux state에 변화를 감지하면, 안의 함수를 실행
    //     store.subscribe(function () {
    //         // redux state에서 값을 가져와, 이 컴포넌트 state에 값을 세팅
    //         this.setState({ number: store.getState().number });
    //     }.bind(this));
    // }

    // 생성자에서 setState 호출하면 warning이 발생 (마운트가 아직 안 된 컴포넌트에서 부르지 말라고)
    componentDidMount() {
        // redux state에 변화를 감지하면, 안의 함수를 실행
        store.subscribe(function () {
            // redux state에서 값을 가져와, 이 컴포넌트 state에 값을 세팅
            this.setState({ number: store.getState().number });
        }.bind(this));
    }

    render() {
        return <DisplayNumber number={this.state.number}></DisplayNumber>
    }
}

export default DisplayNumberWrap;