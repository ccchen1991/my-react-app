import { connect } from 'react-redux';
import { setMessage } from '../actions/messageAction';
import Text from '../components/text';


function mapStateToProps(state) {
    return {
        message: state.messageReducer.message
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onMessageChange: value => dispatch(setMessage(value))
    };
}

const TextContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Text);

export default TextContainer;
