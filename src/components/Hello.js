import React, { Component } from 'react';

function Hello() {

    function formatName (user) {
        return user.firstName + ' ' + user.lastName;
    }
    
    const user = {
        firstName: 'App',
        lastName: 'ReactJs',
    }
    return (
        <div>
            <h3 className='m-5 text-center'>{formatName(user)}</h3>
        </div>
    )
}

export default Hello