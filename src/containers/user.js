import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UserAction from '../actions/userAction';
import User from '../components/user';

function mapStateToProps(state, props) {
    return {
        userList: state.userReducer.userList,
        currentUser: state.userReducer.currentUser,
        loading: state.userReducer.loading,
        error: state.userReducer.error
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(UserAction, dispatch);
}

const UserContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(User);

export default UserContainer;