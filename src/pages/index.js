import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<section className="hero is-dark is-medium">
			<div className="hero-body">
				<div className="container">
					<div className="columns gap is-vcentered">
						<div className="column">
							<h1 className="subtitle h4">Hello, my name is <span className="is-red">Julian Salguero</span> and <br />
							I am a web developer.</h1>
							<p>JavaScript Developer | SDET</p>
							<div className="buttons">
								<Link to="https://github.com/juliansal/portfolio-alpha" target="_blank" className="button is-primary">Github</Link>
								<Link to="https://www.linkedin.com/in/julio-salguero-a9b22075/" target="_blank" className="button is-primary is-outlined">LinkedIn</Link>
							</div>
						</div>
						<div className="column">
							<figure className="image card">
								<img src="../../assets/img/screenshotcode.png" alt="html code"/>
							</figure>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section>
			<div className="body">
				<div className="container">
					<div className="columns">
						<div className="column">
						<h4 className="heading h4">Skills</h4>
						<ul className="h4">
							<li>HTML</li>
							<li>CSS</li>
							<li>JavaScript</li>
							<li>React</li>
							<li>Angular</li>
							<li>Ruby on Rails</li>
							<li>Selenium Testing</li>
						</ul>
						</div>
						<div className="column">
							
						<h4 className="heading h4">Latest Articles</h4>
						<div className="article-clip">
							<p className="post-link"><Link to="/">Red hair crookshanks</Link></p>
							<p >Bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. Beaters gobbledegook N.E.W.T.,
							Honeydukes eriseD inferi Wormtail. Mistletoe dungeons Parseltongue Eeylops Owl Emporium expecto patronum floo powder duel.
							</p>
						</div>

						<div className="article-clip">
							<p className="post-link"><Link to="/">Red hair crookshanks</Link></p>
							<p >Bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. Beaters gobbledegook N.E.W.T.,
							Honeydukes eriseD inferi Wormtail. Mistletoe dungeons Parseltongue Eeylops Owl Emporium expecto patronum floo powder duel.
							</p>
						</div>

						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>
)

export default IndexPage
