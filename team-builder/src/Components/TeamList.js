import React from 'react';

function TeamList(props) {
    const {details} = props;

    if (!details) {
        return <h3>Working fetching your friend&apos;s details...</h3>
      }

    return (
        <div className="TeamList">
            <h2>Name: {details.username}</h2>
            <h3>Role: {details.role}</h3>
            <p>Email: {details.email}</p>
        </div>
    );
}

export default TeamList;