import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/Nikhil.jpg';
import Social from '../components/Social'

class Home extends Component {
    render() {
    return (
    <div className="condiv home">
        <img src={profilepic} className="profilepic"></img>

        <ReactTypingEffect className="typingeffect" text={['I am Nikhil Kommuri' , 'I am a Graduate Student in Computer Science' ]} 
         speed={100} eraseDelay={500}/>

    <Social />
    </div>
    )
}
}
export default Home