import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <section className="container gap body">
		<h1 className="has-text-centered title is-1">Contact Me</h1>
		<div className="hero-body">
			<div className="content has-text-centered h5">
				<p>Interested in having me build your next website, or in having me on your next <br />web development team?</p>
				<p>Email me to get in touch!</p>
				<div className="gap">
					<Link to="/" href="mailto:juliosal.dev@gmail.com" className="email is-red h3">juliosal.dev@gmail.com</Link>
				</div>
			</div>
		</div>
	</section>
  </Layout>
)

export default ContactPage