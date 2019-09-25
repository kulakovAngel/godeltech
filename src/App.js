import React from 'react';
import './App.css';
import Key from './Key';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
                        whites: [{C4: false,key:81},{D4: false,key:87},{E4: false,key:69},{F4: false,key:82},{G4: false,key:84},{A4: false,key:89},{B4: false,key:85},{C5: false,key:90},{D5: false,key:88},{E5: false,key:67},{F5: false,key:86},{G5: false,key:66},{A5: false,key:78},{B5: false,key:77}],
                        blacks: [{Cs4: false,key:50},{Ds4: false,key:51},{Fs4: false,key:53},{Gs4: false,key:54},{As4: false,key:55},{Cs5: false,key:83},{Ds5: false,key:68},{Fs5: false,key:71},{Gs5: false,key:72},{As5: false,key:74}]
                    };
        this.onDown = this.onDown.bind(this);
        this.onUp = this.onUp.bind(this);
        this.onPhysicalDown = this.onPhysicalDown.bind(this);
        this.onPhysicalUp = this.onPhysicalUp.bind(this);
    }
    
    onPhysicalDown(e) {
        this.state.whites.forEach((item, i) => {
            if (item[Object.keys(item)[1]] === e.which) {
                this.onDown(Object.keys(item)[0]);
            };
        });
        this.state.blacks.forEach((item, i) => {
            if (item[Object.keys(item)[1]] === e.which) {
                this.onDown(Object.keys(item)[0]);
            };
        });qweqwasdasasdsd
    }
    
    onPhysicalUp(e) {
        this.state.whites.forEach((item, i) => {
            if (item[Object.keys(item)[1]] === e.which) {
                this.onUp(Object.keys(item)[0]);
            };
        });
        this.state.blacks.forEach((item, i) => {
            if (item[Object.keys(item)[1]] === e.which) {
                this.onUp(Object.keys(item)[0]);
            };
        });
    }
    
    onDown(noteName) {
        this.setState((prevState) => {
            prevState.whites.forEach((item, i)=>{
                if (Object.keys(item)[0] === noteName) {
                    return {whites: prevState.whites[i][Object.keys(item)[0]] = true};
                };
            });
            prevState.blacks.forEach((item, i)=>{
                if (Object.keys(item)[0] === noteName) {
                    return {blacks: prevState.blacks[i][Object.keys(item)[0]] = true};
                };
            });
        });
        this.forceUpdate();
    }
    
    onUp(noteName) {
        this.setState((prevState) => {
            prevState.whites.forEach((item, i)=>{
                if (Object.keys(item)[0] === noteName) {
                    return {whites: prevState.whites[i][Object.keys(item)[0]] = false};
                };
            });
            prevState.blacks.forEach((item, i)=>{
                if (Object.keys(item)[0] === noteName) {
                    return {blacks: prevState.blacks[i][Object.keys(item)[0]] = false};
                };
            });
        });
        this.forceUpdate();
    }
    
    render() {
        const whites = this.state.whites;
        const blacks = this.state.blacks;
        return (
            <>
                <input  type="text"
                        autoFocus
                        onKeyDown={this.onPhysicalDown}
                        onKeyUp={this.onPhysicalUp} />
                <div className='whites'>
                    {whites.map((val, i)=>(
                        <Key key={i}
                             color='white'
                             note={Object.keys(val)[0]}
                             isActive={val[Object.keys(val)[0]]}
                             onDown={this.onDown}
                             onUp={this.onUp} />
                    ))}
                </div>
                <div className='blacks'>
                    {blacks.map((val, i)=>(
                        <Key key={i}
                             color='black'
                             note={Object.keys(val)[0]}
                             isActive={val[Object.keys(val)[0]]}
                             onDown={this.onDown}
                             onUp={this.onUp} />
                    ))}
                </div>
            </>
        )
    }
}
export default App;
