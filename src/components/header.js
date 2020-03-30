import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
	<section className="hero is-dark is-medium">
		<div className="hero-head">
			<nav className="navbar" role="navigation" aria-label="main navigation">
			<button onClick={handleMenu} target="_blank" className="navbar-btn button is-primary">Menu</button>
			</nav>
			<nav className="navbar" role="navigation" aria-label="main navigation">
				<div style={{display:"none"}} className="navbar-brand">
					<Link to="/" className="navbar-item">Home</Link>
					<Link to="/posts" className="navbar-item">Posts</Link>
					<Link to="/contact" className="navbar-item">Contact</Link>
				</div>
			</nav>
		</div>
	</section>
)

const handleMenu = (e) => {
	const links = document.getElementsByClassName('navbar-brand')[0]
	const linkList = links['children']
	const urlPath = window.location.pathname
	
	if (links.style['display'] === "none") {
		links.style['display'] = "inherit"
	} else {
		links.style['display'] = "none"
	}

	for (let i = 0; i < linkList.length; i++) {
		if (linkList[i].attributes['href']['value'] === urlPath) {
			linkList[i].style['background-color'] = '#292929'
			linkList[i].style['color'] = '#fff'
		}
	}

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
