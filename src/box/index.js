import React from "react";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Box = (props) =>{
    const {item} = props;
    const {image, title, description, icon} = item;
    return(
        <React.Fragment>
            <div className="wapper">
                <img className="image" src={image} alt="ảnh lỗi"/>
                <h1 className="title">{title}</h1>
                <p className="description">{description}</p>
                <spam><FontAwesomeIcon icon={icon} size='lg'/></spam>
            </div>
        </React.Fragment>
    )
}
export default Box;