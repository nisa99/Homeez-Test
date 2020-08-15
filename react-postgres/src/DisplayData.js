import React, { Component, Fragment, useState } from "react";
import App from './App';
import { Button } from 'react-bootstrap';
import history from './History';

class DisplayData extends Component {

  constructor() {
    super();
    this.state = {
      items: [],

    }
  }


  componentDidMount() {

    this.getTableData();
  }

  getTableData() {// RETRIEVE DATA FOR TABLE FROM API
    fetch('http://localhost:3000/quote/')
      .then(res => res.json())
      .then(json => {
        this.setState({
          // isLoaded: true,
          items: json,
        })
      })

  }

  render() {
    var { items } = this.state;
    return (
      <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col" >ID</th>
                <th scope="col">INFO</th>
                <th scope="col">VALIDITY</th>


              </tr>
            </thead>

            {items.map(item => (
              <tbody>
                <tr key={item.id}>
                  <td data-label="ID">{item.Q_ID}</td>
                  <td data-label="INFO">{item.Quotation_Info} </td>
                  <td data-label="VALIDITY">{item.Quotation_Valid ? "true" : "false"} </td>


                </tr>
              </tbody>
            ))}
          </table>
       
        <Button variant="btn btn-success float-right" style={{marginRight: "20px"}}
        onClick={() => history.push('/')}>Back</Button>

      </div>
    );

  }


}


export default DisplayData;