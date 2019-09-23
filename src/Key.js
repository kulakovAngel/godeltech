import React from 'react';

class Key extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
        this.onDown = this.onDown.bind(this);
        this.onUp = this.onUp.bind(this);
    }
    
    onDown(e) {
        this.setState({isActive: true});
    }
    
    onUp(e) {
        setTimeout(() => {
            this.setState({isActive: false});
        }, 1000 );
    }
    
    render() {
        const color = this.props.color;
        const active = this.state.isActive;
        const note = 'notes/' + this.props.note + '.mp3';
        const isActive = this.state.isActive;
        return <div className=
                   {(color === 'white') ? 'key-white' : 'key-black'}
                   onMouseDown={this.onDown}
                   onMouseUp={this.onUp}
                   data-active={active}
                >
                    {(isActive ? <audio src={note} autoPlay></audio> : '')}
                    
                </div>
    }
}

export default Key;