import React from "react";

export const NavItem = (props) => {
    const {
        caption
    } = props.item

    return (
        <a href='#'>{caption}</a>
    )
}