import React from 'react';

export default class Text extends React.Component {
    render() {
        return(
            <div>
                <input 
                    type = "text" 
                    value = { this.props.message } 
                    onChange = { e => this.props.onMessageChange(e.target.value)} />
            </div>
        );
    }
}