import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-rocket"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Twilight Imperium NYC</h1>
                <p>A group for Twilight Imperium players in New York City to meet and organize games, share resources, and talk about our favorite epic space opera board game! </p>
            </div>
        </div>
        <nav>
            <ul>
                {props.cfData.map(trick => (
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle(trick.node.slug)}}>{trick.node.title}</a></li>
                ))}
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
