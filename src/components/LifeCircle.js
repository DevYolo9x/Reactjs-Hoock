import React, { Component } from 'react';
// import $ from 'jquery';

class LifeCircle extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title : 'Featured'
    }

    this.handleChangeTitle = this.handleChangeTitle.bind(this)

    console.log('constructor');
  }

  handleChangeTitle() {
    this.setState ({
      title : 'LifeCircle'
    })
  }

  componentWillUnmount() {
    // $('.card-header').removeClass('bg-warning').addClass('bg-danger')
    console.log('componentWillUnmount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }
  
  render() {
    console.log('render');
    return (
      <div className="card">
        <div className="card-header">{this.state.title}</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional content.
          </p>
          <button type="button" onClick={this.handleChangeTitle} className="btn btn-primary">
            Change
          </button>
        </div>
      </div>
    );
  }
}

export default LifeCircle;