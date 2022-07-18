import React, {useState, useEffect} from "react";
import './Navigation.css';
import {getNav} from "../../services/api";
import {NavItem} from "./NavItem/NavItem";
import { Menu } from 'antd';
import {Link} from "react-router-dom";


export const Navigation = () => {
    const generateMenuAdditionalItems = (links, isSublink) => {

        return (
            links.map((link) => ({
                key: link.id,
                label: <Link to={link.caption.toLowerCase()}>{link.caption}</Link>,
                children: (link.children ?? []).length > 0 ? generateMenuAdditionalItems(link.children ?? [], true):undefined
            }))
        )

    }

    const generateMenuMainItems = (links) => {

        return (links.map((link) => {
            if (typeof link.parent == 'undefined') {
                return  ({
                    key: link.id,
                    label: <Link to={link.caption.toLowerCase()}>{link.caption}</Link> ,
                    children: (link.children ?? []).length > 0 ? generateMenuAdditionalItems(link.children ?? [], true):undefined
                })

            }

        }))



    }

    const [nav, setNav] = useState([]);

    useEffect(() => {
        const fetchNav = async () => {
            const data = await getNav();
            setNav(data)
        };
        fetchNav()
    }, []);

    return (
        <div>
            <Menu className="navigation" mode="horizontal" items={generateMenuMainItems(nav)}/>
        </div>
    )
}