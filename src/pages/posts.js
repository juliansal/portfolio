import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/post-link"
import "../components/posts.css"

const PostsPage = ({ data: { 
	allMarkdownRemark: { edges }, 
 }, }) => {

	const Posts = edges
		.filter(edge => !!edge.node.frontmatter.date)
		.map(edge => <PostLink key={edge.node.id} post={edge.node} />)
	
	return (
	<Layout>
		<SEO title="Posts" />
		<section className="container gap body">
			<h1 className="has-text-centered title is-1">Web Projects</h1>
			<div className="columns is-multiline is-desktop">
				{Posts}
			</div>
		</section>
	</Layout>
	)
 }

export default PostsPage

export const postQuery = graphql`
	query {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					id
					excerpt(pruneLength: 150)
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						path
						title
						client
						project_url
						imagePath {
							publicURL
						}
					}
				}
			}
		}
	}
`