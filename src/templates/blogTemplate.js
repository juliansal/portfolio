import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// this prop will be injected by the GraphQL query below.
export default function Template({ data }) {
	const { markdownRemark } = data // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark
	const { skills } = frontmatter
	const showSkills = skills.map(skill => (
		<li key={skill} className="is-red">{skill}</li>
	))
	
	return (
	<Layout>
		<SEO title="Post" />
		<section className="container body is-medium">
			<div className="columns is-variable is-1">
				<div className="column is-8">
					<h1 className="title is-2">{ frontmatter.title }</h1>
				</div>
			</div>
			<div className="columns is-variable is-3">
				<div className="column is-8">
					<figure className="media-left">
						<img src={frontmatter.imagePath.publicURL} className="image" alt="lil-cloud" />
					</figure>
				</div>
				<div className="column is-4">
					<table className="table is-hoverable is-bordered is-dark">
						<tbody>
							<tr>
								<th>Project date</th>
								<td>{ frontmatter.date }</td>
							</tr>
							<tr>
								<th>Client</th>
								<td>{ frontmatter.client }</td>
							</tr>
							<tr>
								<th>Project URL</th>
								<td>{ frontmatter.project_url }</td>
							</tr>
						</tbody>
					</table>

					<h3>Skills</h3>
					<ul className="project-skills">
						{showSkills}
					</ul>
				</div>
			</div>
			<div className="columns is-variable is-3">
				<div dangerouslySetInnerHTML={{ __html: html }}></div>
				<div className="column is-8 lightfont"></div>
			</div>
		</section>
	</Layout>
	)
}

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
				client
				project_url
				imagePath {
					publicURL
				}
				skills
			}
		}
	}
`