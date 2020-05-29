import React from "react";

let day = new Date();
let year = day.getFullYear();

function Footer() {
    return ( <
        footer >
        <
        p > Copyright© {
            year
        } < /p> < /
        footer >
    );
};

export default Footer;