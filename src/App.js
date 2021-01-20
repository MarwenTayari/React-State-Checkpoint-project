import './App.css';
import React from 'react';
import myPhoto from './myPhoto.jpg'

class App extends React.Component {
  
  state = { person : {fullName :"My Full Name is Marwen Tayari",bio :"I am from Tunisia ,I live in Hammam Sousse and I like football and going to gym",
              imgSrc: myPhoto,
              profession : "I am a Mechatronics Engineer very interested in web development" ,
  } ,show : false , seconds : 0, minutes: 0,hours : 0};
   
toggleDiv = () => { 
  this.setState({show:!this.state.show})
}

componentDidMount = () => {
  setInterval( () => {    
    this.setState( prevState => ({
      seconds : prevState.seconds + 1,
       }));

       if (this.state.seconds === 60 ){ this.setState( prevState => ({
        minutes : prevState.minutes + 1,
        seconds : 0 }))}

        if (this.state.minutes === 60 ){ this.setState( prevState => ({
          hours : prevState.hours + 1,
          minutes : 0,
          seconds : 0 }))}

      }, 1000); 
};

  render () {
  return (
    <div className ="App">
      <div className ="TimeDiv">
        <h2 className ="Title"> Time since the component has mounted : </h2>
        <h2 className ="Time" > {this.state.hours}  :  {this.state.minutes}  :  {this.state.seconds} </h2>
      </div>
        
        <button onClick={this.toggleDiv} className="btn">Click Me</button>  
         
        {
          this.state.show ? 
          <div className="Profile">        
              <img src={this.state.person.imgSrc} alt="myPhoto"/>
              <h2 className ="ProfileTitle MyName"> {this.state.person.fullName}</h2>
              <h2 className ="ProfileTitle bio">{this.state.person.bio}</h2>
              <h2 className ="ProfileTitle profession">{this.state.person.profession}</h2>
          </div>
          : null
        }
    </div>
  );
  }
}

export default App;
