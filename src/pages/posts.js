import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PostsPage = () => (
	<Layout>
		<SEO title="Posts" />
		<section className="container gap body">
			<h1 className="has-text-centered title is-1">Web Projects</h1>
			<div className="columns is-multiline is-desktop">
				<div className="column is-one-quarter">
					<article className="media">
						<div className="media-content">
							<figure>
								<Link to="/">
									<img className="image" alt="lil-cloud" />
								</Link>
							</figure>
							<div className="content">
								<p><a className="profile-name" >POST.TITLE</a></p>
								<div className="byline-meta">
									<small>
										<span className="name">POST.NAME</span> |
										<span className="date">POST.DATE</span>
									</small>
								</div>
								<div className="excerpt">POST.BODY</div>
								<p className="read-more">
									<Link to="/" className="is-red">[ Read More ]</Link>
								</p>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
	</Layout>
)

export default PostsPage