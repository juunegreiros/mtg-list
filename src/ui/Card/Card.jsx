import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ title, subtitle, Image, imgDescription, url }) => (
    <div>
        <img src={Image} alt={imgDescription}/>
        { title }
        {subtitle}
        <Link to={url}>Go</Link>
    </div>
)

export default Card
