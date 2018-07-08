import React from 'react';
import { Link } from 'react-router-dom';
import Counter from '../containers/counter';
import Text from '../containers/text';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Text />
                <Counter />
                <Link to = "/about">
                    <button>Go to About</button>
                </Link>
            </div>
        );
    }
}