import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter } from '../actions/counterAction';
import Counter from '../components/counter';

function mapStateToProps(state) {
    return {
        count: state.counterReducer.count
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseCounter()),
        onDecreaseClick: () => dispatch(decreaseCounter()),
    };
}

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;