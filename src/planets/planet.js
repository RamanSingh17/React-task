import React from 'react';


function Planet(props) {
    const {planetData}=props;
    return <h3>{planetData.name}</h3>;
}

export default Planet;