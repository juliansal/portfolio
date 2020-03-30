import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
	<div className="column is-one-quarter">
		<article className="media">
			<div className="media-content">
				<figure>
					<Link to={post.frontmatter.path}>
						<img src={post.frontmatter.imagePath.publicURL} className="image" alt="lil-cloud" />
					</Link>
				</figure>
				<div className="content">
					<p><Link to={post.frontmatter.path} 
						className="profile-name" >{post.frontmatter.title}</Link></p>
					<div className="byline-meta">
						<small>
							<span className="name">POST.NAME</span> |
							<span className="date">{post.frontmatter.date}</span>
						</small>
					</div>
					<div className="excerpt">{post.excerpt}</div>
					<p className="read-more">
						<Link to={post.frontmatter.path} className="is-red">[ Read More ]</Link>
					</p>
				</div>
			</div>
		</article>
	</div>
)

export default PostLink