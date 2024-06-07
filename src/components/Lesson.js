import React, { Component } from 'react';

function Lesson(props) {
    const listPages = props.list;
    const itemPage = listPages.map( (item, index) =>
      <li key={index} className="list-group-item">{item}</li>
    )

    return (
      <ul className="list-group">
        {itemPage}
      </ul>
    );
}

export default Lesson;