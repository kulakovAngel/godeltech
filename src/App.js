import React from 'react';
import './App.css';
import Key from './Key';

class App extends React.Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className='whites'>
                    <Key color='white' note='C4'/>
                    <Key color='white' note='D4'/>
                    <Key color='white' note='E4'/>
                    <Key color='white' note='F4'/>
                    <Key color='white' note='G4'/>
                    <Key color='white' note='A4'/>
                    <Key color='white' note='B4'/>
                    
                    <Key color='white' note='C5'/>
                    <Key color='white' note='D5'/>
                    <Key color='white' note='E5'/>
                    <Key color='white' note='F5'/>
                    <Key color='white' note='G5'/>
                    <Key color='white' note='A5'/>
                    <Key color='white' note='B5'/>
                </div>
                <div className='blacks'>
                    <Key color='black' note='Cs4'/>
                    <Key color='black' note='Ds4'/>
                    <Key color='black' note='Fs4'/>
                    <Key color='black' note='Gs4'/>
                    <Key color='black' note='As4'/>
                    
                    <Key color='black' note='Cs5'/>
                    <Key color='black' note='Ds5'/>
                    <Key color='black' note='Fs5'/>
                    <Key color='black' note='Gs5'/>
                    <Key color='black' note='As5'/>
                </div>
            </>
        )
    }
}
export default App;
