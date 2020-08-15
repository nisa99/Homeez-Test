
import React, { Component, Fragment, useState } from "react";
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import DisplayData from './DisplayData';
import history from './History';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Quotation_Info: '' };
  }

  handleChange = (event) => {
    this.setState({ Quotation_Info: event.target.value });
  }

  handleSubmit = (event) => {
    var body = new URLSearchParams();
    //var data = new FormData(event.target)
    //data.set(Quotation_Info', this.state.Quotation_Info)
    var body = ('Quotation_Info=' + this.state.Quotation_Info)
    alert('A form was submitted: ' +body);



if(this.state.Quotation_Info != '')
    {
      fetch('http://15.207.180.133:3000/quote/', {
        
        
        body: body,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
      }).then(function(response) {
        console.log(response)
        return response.json();
      });

    event.preventDefault();

    }
    else{
      alert('Textbox is empty. Please insert a value');
    }

}



  render() {
    return (
      <Fragment>
        <h1 className="text-center mt-5">Quotation Info</h1>
        <div className="container center-div"></div>
      <form onSubmit={this.handleSubmit}>

        
          <input type="text" className="form-control" value={this.state.value} name="Quotation_Info" onChange={this.handleChange} />
        

        <br></br>

        <input type="submit" value="Add" className="btn btn-success float-right"/>
        
        <button className="btn btn-warning float-right"
          onClick={() => history.push('/DisplayData')}>Display Data</button>

      </form>
      
      </Fragment>
    );
  }
}

export default App;





