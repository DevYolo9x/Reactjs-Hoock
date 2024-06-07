import Course from "./components/Course";
import Hello from "./components/Hello";
import LifeCircle from "./components/LifeCircle";
import Example from "./hooks/Example";

import React, { Component, useState } from 'react';

function App() {

  const [items] = useState([
    {
      name: 'Free',
      type: true,
      price: 0,
      lists: [
        'Home Page',
        'Contact Page',
      ]
    }, 
    {
      name: 'Advanced',
      type: true,
      price: 150,
      lists: [
        'Product Page',
        'Article Page',
      ]
    },
    {
      name: 'Business',
      type: false,
      price: 250,
      lists: [
        'Admin Page',
        'Dashboard Page',
        'Chart Page',
      ]
    }
  ]
  )



  const elCourse = items.map((item, index) =>
    <Course key={index} name={item.name} type={item.type} price={item.price} list={item.lists}></Course>
  )

  return (
    <div className="container">
      <Hello />
      <div className="row card-deck mb-3 text-center">
        {elCourse}
        {/* <LifeCircle /> */}
      </div>
      {/* <Example name="Xuan Binh" age="27" gender="Male" /> */}
    </div>
  );


}

export default App;