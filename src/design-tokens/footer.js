import React from 'react';

const mystyle = {
    width: "100%",
    height: "150px",
    backgroundColor: "#f7f7f7",
    display: "inline-block",
    fontSize: "12px",
}
const left_style = {
    width: "50%",
    height: "100%",
    paddingTop: "30px",
    // backgroundColor: "red",
    float: "left",
    display: "block",
}
const right_style = {
    width: "50%",
    height: "100%",
    // backgroundColor: "blue",
    paddingTop: "20px",
    float: "left",
    display: "block"
}

export const MyFooter = () => {
    return (
        <div style={mystyle}>
            <div style={left_style}>
                <center><a href="#">English(UK)</a></center>
                <center><a href="#">Australia</a></center>
                <center><a href="#">Vietnam</a></center>
                <center><a href="#">Spain</a></center>
            </div>
            <div style={right_style}>
                <center><a href="#">Chinese</a></center>
                <center><a href="#">Japanese</a></center>
                <center><a href="#">Korean</a></center>
                <center><a href="#">Thai</a></center>
            </div>
        </div>
    )
}