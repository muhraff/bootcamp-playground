import React from 'react';

const header_style = {
    width: "100%",
    height: "50px",
    backgroundColor: "#3b5998",
}

const text_style = {
    paddingTop: "12px",
    color: "#fff"
}

export const MyHeader = () => {
    return (
        <div style={header_style}>
            <center><h3 style={text_style}>Facebook</h3></center>
        </div>)
}