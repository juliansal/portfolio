import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
	<section className="hero is-dark is-medium">
		<div className="hero-head">
			<nav className="navbar" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<Link to="/" className="navbar-item">Home</Link>
					<Link to="/posts" className="navbar-item">Posts</Link>
					<Link to="/contact" className="navbar-item">Contact</Link>
				</div>
			</nav>
		</div>
	</section>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
