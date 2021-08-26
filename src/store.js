import { createStore } from "redux";

export default createStore(function(state, action) {
    if (state === undefined) {
        // 초기 state 설정
        return {number: 0}

    } else if (action.type === 'INCREMENT') {
        return {...state, number: state.number + action.size}

    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())