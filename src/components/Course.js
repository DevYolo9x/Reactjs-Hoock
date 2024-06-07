import React, { Component } from 'react';
import Lesson from "./Lesson";

class Course extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isShow : true
    }

    this.handleClickThis = this.handleClickThis.bind(this);
    this.handleRegis = this.handleRegis.bind(this);
    this.handleToggle = this.handleToggle.bind(this);

    this.usernameRef = React.createRef();
  }

  handleClick() {
    alert('View Register');
  }

  handleClickText(text) {
    alert(text);
  }
  
  handleClickThis() {
    alert(this.props.name);
  }

  handleRegis(){
    alert(this.usernameRef.current.value);
  }

  handleToggle(){
    this.setState({
      isShow: !this.state.isShow
    });
  }

  showButton() {
    const checkType = this.props.type;
    if (checkType==true) {
      return (
        <div>
          <div>
            <button type="button" onClick={this.handleClick} className="btn btn-lg btn-block btn-outline-primary mt-3">Register</button>
            <button type="button" onClick={() => this.handleClickText('Login')} className="btn btn-lg btn-block btn-outline-primary mt-3">Login</button>
            <button type="button" onClick={this.handleClickThis} className="btn btn-lg btn-block btn-outline-primary mt-3">Purchase</button>
          </div>

          <div className="input-group mb-3 mt-3">
            <div className="input-group-prepend">
              <button className="btn btn-primary" onClick={this.handleRegis}>Search</button>
            </div>
            <input type="text" className="form-control" placeholder="Keyword..." ref={this.usernameRef} />
          </div>

          <div>
            <button type="button" onClick={this.handleToggle} className="btn btn-success mt-3">Toggle!</button>
          </div>

        </div>
      )
    }
  }

  render() {
    let elShow = null;
    if( this.state.isShow ){
      elShow = (
        <Lesson list={this.props.list} />
      )
    }
    return (
      <div className="col-lg-4 card mb-4 shadow-sm">
        <div className="card-header mt-3">
          <h4 className="my-0 font-weight-normal">{this.props.name}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">${this.props.price} <small className="text-muted">/ month</small></h1>
          {elShow}
          {this.showButton()}
        </div>
      </div>
    );
  }
}

export default Course;