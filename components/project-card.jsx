import styles from '../styles/project-card.module.scss'

import Image from 'next/image'

import GithubLogo from '../public/github-logo.svg'
import ExternalLogo from '../public/external-logo.svg'

import CraftDash from '../public/craft-dash-preview.png'
import Techleons from '../public/techleons-preview.png'
import Code from '../public/code.svg'

const getImage = (image_name) => {
	if (image_name === 'craft-dash') {
		return CraftDash
	}

	if (image_name === 'techleons') {
		return Techleons
	}

	if (image_name === 'code') {
		return Code
	}
}
const ProjectCard = ({
	previewImage,
	projectName_p1,
	projectName_p2,
	githubURL,
	demoURL,
	content,
	tagList,
	multiLink,
	orientation
}) => {
	return (
		<div className={styles.project_card}>
			<div className={styles.project_card_p1}>
				<div className={styles.project_preview}>
					<Image
						src={getImage(previewImage)}
						height={370}
						alt={projectName_p2}
						title={projectName_p2}
					/>
				</div>
				<div className={styles.project_name_links}>
					<div className={styles.project_name}>
						<h3>
							<span className={styles.nav_item_00}>{projectName_p1}</span>
							<span>&nbsp;&nbsp;&nbsp;</span>
							<span className={styles.nav_item_01}>{projectName_p2}</span>
						</h3>
					</div>

					<div className={styles.project_links}>
						<div>
							{multiLink === true ? (
								<a
									href='https://github.com/rupamkerketta/client-petsweb'
									target='_blank'
									rel='noreferrer'
									onClick={() => {
										window.open(
											'https://github.com/rupamkerketta/server-petsweb'
										)
									}}>
									<Image
										src={GithubLogo}
										width={35}
										height={35}
										alt='Link to code on GitHub'
										title='Link to code on GitHub'
									/>
								</a>
							) : (
								<a href={githubURL} target='_blank' rel='noreferrer'>
									<Image
										src={GithubLogo}
										width={35}
										height={35}
										alt='Link to code on GitHub'
										title='Link to code on GitHub'
									/>
								</a>
							)}
						</div>
						{demoURL !== '' ? (
							<div>
								<a href={demoURL} target='_blank' rel='noreferrer'>
									<Image
										src={ExternalLogo}
										width={35}
										height={35}
										alt='Link to live site'
										title='Link to live site'
									/>
								</a>
							</div>
						) : (
							''
						)}
					</div>
				</div>
				<div className={styles.project_tags}>
					{tagList.map((tag) => {
						return <span key={tag}>{tag}</span>
					})}
				</div>
			</div>

			<div className={styles.project_card_p2}>
				<div className={styles.project_content}>
					<p>{content}</p>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
