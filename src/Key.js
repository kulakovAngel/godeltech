import React from 'react';

class Key extends React.Component {
    constructor(props) {
        super(props);
        this.onDown = this.onDown.bind(this);
        this.onUp = this.onUp.bind(this);
    }
    
    onDown() {
        this.props.onDown(this.props.note);
    }
    
    onUp() {
        this.props.onUp(this.props.note);
    }
    
    render() {
        const color = this.props.color;
        const active = this.props.isActive;
        const note = 'notes/' + this.props.note + '.mp3';
        const isActive = this.props.isActive;
        return <div className=
                   {(color === 'white') ? 'key-white' : 'key-black'}
                   onMouseDown={this.onDown}
                   onMouseUp={this.onUp}
                   data-active={active}
                >
                    {this.props.letter}
                    {(isActive ? <audio src={note} autoPlay></audio> : '')}
                    
                </div>
    }
}

export default Key;