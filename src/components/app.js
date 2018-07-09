import React from 'react';
import { Link } from 'react-router-dom';
import Counter from '../containers/counter';
import Text from '../containers/text';
import User from '../containers/user';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Text />
                <Counter />
                <User />
                <Link to = "/about">
                    <button>Go to About</button>
                </Link>
            </div>
        );
    }
}