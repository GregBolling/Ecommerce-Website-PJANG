import React, { useState, useEffect } from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import pages from './productinfo.json'

const Product = (props) => {

    useEffect(() => {
        switch(props.match.params.pageNumber) {
            case "watermelon-cucumber":
                props.setPage(pages[0]);
                break;
            case "white-gardenia":
                props.setPage(pages[1]);
                break;
            case "mahogany-teakwood":
                props.setPage(pages[2]);
                break;
            case "fresh-air":
                props.setPage(pages[3]);
                break;
            case "coffee-vanilla":
                props.setPage(pages[4]);
                break;
            case "eucalyptus-tea-tree":
                props.setPage(pages[5]);
                break;
        }
    })

    console.log(props.page)
    console.log(props.match.params.pageNumber)

    return (
    <div>
        <div>
            <h1>{props.page.name}</h1>
            <h3>{props.page.desc1}</h3>
            <h3>{props.page.desc2}</h3>
            <h3>This fragrance has hints of:</h3>
            <ul>
                <li>{props.page.scent1}</li>
                <li>{props.page.scent2}</li>
                <li>{props.page.scent3}</li>
            </ul>
        </div>
        <div>
            <h4>Products</h4>
            <ul>
            <li>
                <Link to="/Product/watermelon-cucumber" >Watermelon Cucumber</Link>
            </li>
            <li>
                <Link to="/Product/white-gardenia">White Gardenia</Link>
            </li>
            <li>
                <Link to="/Product/mahogany-teakwood" >Mahogany Teakwood</Link>
            </li>
            <li>
                <Link to="/Product/fresh-air">Fresh Air</Link>
            </li>
            <li>
                <Link to="/Product/coffee-vanilla" >Coffee Vanilla</Link>
            </li>
            <li>
                <Link to="/Product/eucalyptus-tea-tree">Eucalyptus Tea Tree</Link>
            </li>
            </ul>
            <h4>Return Home</h4>
            <ul>
            <li>
                <Link to="/Home">Return home</Link>
            </li>
            </ul>
        </div>
      </div>
    );
}

export default Product;