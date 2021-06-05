import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import contactStyle from '../components/modules/contact.module.scss'
import Helmet from 'react-helmet'
import config from '../../data/siteConfig'

const Contact = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					Email
					githubUsername
				}
			}
		}
	`)
	const { Email, githubUsername: starjardin } = data.site.siteMetadata
	return (
		<Layout>
			<Helmet title={`Contact - ${config.userName}`} />
			<div>
				<h2 className={contactStyle.title}>Stay in touch</h2>
				<p>I write about stuff related to Html5, css3, Javascript, React, and Various useful Api.</p>
				<p className={contactStyle.subtitle}>You can contact me via email or find me around the web.</p>
				<ul className={contactStyle.list}>
					<li>
						Email:{' '}
						<a
							target='_blank'
							rel='noopener noreferrer'
							className={contactStyle.link}
							href={`mailto:${data.site.siteMetadata.Email}`}>
							{Email}
						</a>
					</li>
					<li>
						Github:{' '}
						<a
							target='_blank'
							rel='noopener noreferrer'
							className={contactStyle.link}
							href={`https://github.com/${starjardin}`}>
							{starjardin}
						</a>
					</li>
				</ul>
			</div>
		</Layout>
	)
}
export default Contact
