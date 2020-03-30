/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  	return (
    <>
      	<Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer className="footer">
			<p className="has-text-centered">
				Designed and Developed by <Link 
					className="is-red" 
					target="_blank" 
					to="https://github.com/juliansal">Julian Salguero</Link> © {new Date().getFullYear()}
			</p>
        </footer>
    </>
  	)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
