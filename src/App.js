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
                    <Key color='white' note='do'/>
                    <Key color='white' note='re'/>
                    <Key color='white' note='mi'/>
                    <Key color='white' note='fa'/>
                    <Key color='white' note='sol'/>
                    <Key color='white' note='la'/>
                    <Key color='white' note='si'/>
                </div>
                <div className='blacks'>
                    <Key color='black' note='As5'/>
                    <Key color='black' note='Cs4'/>
                    <Key color='black' note='Gs4'/>
                    <Key color='black' note='Gs4'/>
                    <Key color='black' note='Gs4'/>
                </div>
            </>
        )
    }
}
export default App;
