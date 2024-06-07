import React, { Component, useRef, useState } from 'react';
import Lesson from "./Lesson";

function Course(props) {

  const inputRef = useRef(null);
  const {name, type, list, price} = props;
  const [isShow, setIsShow] = useState(true);

  function handleClick() {
    alert('View Register');
  }

  function handleClickText(text) {
    alert(text);
  }
  
  function handleClickThis() {
    alert(name);
  }

  function handleRegis(){
    alert(inputRef.current.value);
  }

  function handleToggle(){
    setIsShow(!isShow);
  }

  function showButton() {
    if (type==true) {
      return (
        <div>
          <div>
            <button type="button" onClick={handleClick} className="btn btn-lg btn-block btn-outline-primary mt-3">Register</button>
            <button type="button" onClick={()=>handleClickText('Login')} className="btn btn-lg btn-block btn-outline-primary mt-3">Login</button>
            <button type="button" onClick={handleClickThis} className="btn btn-lg btn-block btn-outline-primary mt-3">Purchase</button>
          </div>
          <div className="input-group mb-3 mt-3">
            <div className="input-group-prepend">
              <button className="btn btn-primary" onClick={handleRegis}>Search</button>
            </div>
            <input type="text" className="form-control" placeholder="Keyword..." ref={inputRef} />
          </div>
          <div>
            <button type="button" onClick={handleToggle} className="btn btn-success mt-3">Toggle!</button>
          </div>
        </div>
      )
    }
  }

  let elShow = null;
  if( isShow ){
    elShow = (
      <Lesson list={list} />
    )
  }

  return (
    <div className="col-lg-4 card mb-4 shadow-sm">
      <div className="card-header mt-3">
        <h4 className="my-0 font-weight-normal">{name}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">${price} <small className="text-muted">/ month</small></h1>
        {elShow}
        {showButton()}
      </div>
    </div>
  );
}

export default Course;