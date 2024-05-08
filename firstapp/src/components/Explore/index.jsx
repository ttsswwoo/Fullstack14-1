/* eslint-disable no-unused-vars */
import "./style.scss"
import Searchbar from "../common/Searchbar";
import {context} from "../../state"
import {userContext} from 'react'

function Explore(props) {
    return (
        <div className="explore-wrapper">
            <h1>Discover Amazing NFT’s</h1>
            <div className="search-wrapper">
                <Searchbar />
            </div>
            <div className="container">
                <input type="text" />
                <textarea></textarea>
            </div>
        </div>
    );
}

export default Explore;