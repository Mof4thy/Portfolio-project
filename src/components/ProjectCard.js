import React from "react";
import "./ProjectCard.css"

const ProjectCard = ({title, description, imgUrl}) => {
    return (
        <div className="Project_card">
            <img src={imgUrl} alt={title} />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard;