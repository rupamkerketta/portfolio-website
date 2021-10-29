import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Typewriter from 'typewriter-effect'

import SectionDivide from '../components/section-head'
import ProjectCard from '../components/project-card'

import myLogo from '../public/my-logo.svg'
import myPic from '../public/my-pic.png'
import myPic2 from '../public/my-pic-2.jpg'
import nextJsLogo from '../public/nextjs-logo.svg'
import githubLogo from '../public/github-logo.svg'
import linkedinLogo from '../public/linkedin-logo.svg'

import styles from '../styles/home.module.scss'

function Home() {
	return (
		<>
			<Head>
				<title>Rupam Kerketta</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<div className={styles.navigation}>
				<div className={styles.nav_item_p0}>
					<Link href='/#main-section'>
						<a>
							<Image
								src={myLogo}
								width={80}
								height={80}
								alt='Rupam Kerketta'
								title='Rupam Kerketta'
							/>
						</a>
					</Link>
				</div>
				<div className={styles.nav_item_p1}>
					<ul className={styles.nav_item_p11}>
						<li>
							<Link href='/#projects'>
								<a>
									<span className={styles.nav_item_00}>[00]-</span>
									<span className={styles.nav_item_01}>Projects</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href='/#blogs'>
								<a>
									<span className={styles.nav_item_00}>[01]-</span>
									<span className={styles.nav_item_01}>Blogs</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href='/#about-me'>
								<a>
									<span className={styles.nav_item_00}>[02]-</span>
									<span className={styles.nav_item_01}>About Me</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href='/#contact'>
								<a>
									<span className={styles.nav_item_00}>[03]-</span>
									<span className={styles.nav_item_01}>Contact</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href='/resume.pdf'>
								<a target='_blank'>
									<span className={styles.nav_item_01}>Resume()</span>
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.social_links}>
				<div className={styles.social_line}></div>
				<div className={styles.social_icons}>
					<div className={styles.social_link_wrapper}>
						<Link href='https://github.com/rupamkerketta' target='_blank'>
							<a target='_blank'>
								<Image
									src={githubLogo}
									width={30}
									height={30}
									alt='Github'
									title='Github'
								/>
							</a>
						</Link>
					</div>

					<div className={styles.social_link_wrapper}>
						<Link href='https://www.linkedin.com/in/rupamkerketta/'>
							<a target='_blank'>
								<Image
									src={linkedinLogo}
									width={30}
									height={30}
									alt='Linkedin'
									title='Linkedin'
								/>
							</a>
						</Link>
					</div>
				</div>

				<div className={styles.email_sideline}>
					<div className={styles.email_content}>
						<Link href='mailto:dev.kerkettarupam@gmail.com'>
							<a>dev.kerkettarupam@gmail.com</a>
						</Link>
					</div>
					<div className={styles.email_line}></div>
				</div>
			</div>

			<div id='main-section' className={styles.home}>
				<div>
					<section className={styles.main_section}>
						<div className={styles.first_part}>
							<h3>Hey there, Welcome to my website</h3>
						</div>
						<div className={styles.second_part}>
							<h1>I&apos;m Rupam Kerketta</h1>
							<h3>I craft full-stack applications for the web</h3>
						</div>
						<div className={styles.third_part}>
							<h3>I&apos;m a &#123;</h3>
							<h3 className={styles.third_part_typing}>
								<Typewriter
									options={{
										autoStart: true,
										loop: true
									}}
									onInit={(typewriter) => {
										typewriter
											.typeString(
												'<span class="key">type:</span> <span className={styles.value}> "webDev"</span><span className={styles.comma}>&#44;</span> '
											)
											.typeString(
												'<br/><span className={styles.key}>range:</span> <span className={styles.value}> "full-stack"'
											)
											.callFunction(() => {
												console.log('String typed out!')
											})
											.start()
									}}
								/>
							</h3>
							<h3>&#125;</h3>
						</div>
						<div className={styles.my_pic}>
							<Image
								src={myPic}
								width={320}
								height={320}
								alt='Rupam Kerketta'
								title='Rupam Kerketta'
							/>
						</div>
					</section>

					{/* <div className={styles.navigation_keys}>
						<h3># Press 0 || 1 || 2 || 3 to switch between sections</h3>
					</div> */}

					<SectionDivide name_p1='[00]-' name_p2='Projects' id='projects' />
					<section className={styles.projects_section}>
						<h2 className={styles.section_head}>
							Some of the stuff that i&apos;ve built
						</h2>
						<ProjectCard
							previewImage='craft-dash'
							githubURL='https://github.com/rupamkerketta/craft-dash'
							demoURL='https://craftdash.xyz'
							tagList={[
								'Nodejs',
								'Reactjs',
								'Express.js',
								'mongoose',
								'MongoDB',
								'WebRTC',
								'Socket.io',
								'Google Cloud Storage',
								'redux-thunk'
							]}
							content={
								'Craft Dash provides an online platform for the people working in teams to collaborate in real-time with interactive drag and drop idea nodes with emojis, with video and text chatting functionalities. The real-time interaction platform using video chat and text messages will help users to establish their project goals efficiently. The main objective of this project is to provide a mind-mapping platform where users can collaborate with their team members in real-time.'
							}
							projectName_p1='00'
							projectName_p2='Craft Dash'
						/>

						<ProjectCard
							previewImage='techleons'
							githubURL='https://github.com/rupamkerketta/techleons-2020'
							demoURL='https://rupamkerketta.github.io/techleons-2020/'
							tagList={['HTML', 'CSS', 'JavsScript']}
							content={
								'This website was created for the College Fest - Techleons 2020 CHRIST(DEEMED TO BE UNIVERSITY), BANGALORE. '
							}
							projectName_p1='01'
							projectName_p2='Techleons'
						/>

						<ProjectCard
							previewImage='code'
							demoURL=''
							multiLink={true}
							tagList={['React.js', 'Node.js', 'Express.js', 'mySQL']}
							content={
								'Developed a web application for finding pets and their rehabilitation. Separate dashboard for the users and the volunteers. One of the very first projects that I made during my college years.'
							}
							projectName_p1='02'
							projectName_p2='Petsweb'
						/>
					</section>
					<SectionDivide name_p1='[01]-' name_p2='Blogs' id='blogs' />
					<section className={styles.blogs_section}>
						<h2 className={styles.section_head}>Work in Progress...</h2>
					</section>
					<SectionDivide name_p1='[02]-' name_p2='About Me' id='about-me' />
					<section className={styles.about_me_section}>
						<div className={styles.about_me_wrapper}>
							<p>
								Hey!! My name is Rupam Kerketta and I love creating applications
								that run on the web.
							</p>
							<p>
								My interest in web-dev started when I was in my first year of
								college, I started by making simple UI using just HTML & CSS,
								eventually i started learning React.js for making dummy
								projects.
							</p>
							<p>
								Fast-forward to my senior year I created a full blown
								application using the MERN stack along with my team-mate who
								helped me a lot in designing the UI and UX of the overall
								application.
							</p>
							<p>
								I love learning and working on technologies that make modern
								web-development possible, I believe that there is always
								something new and exciting to learn everyday.
							</p>
							<p>
								Here are few of the technologies that i work with.
								<ul>
									<li>JavaScript (ES6+)</li>
									<li>React.js</li>
									<li>Node.js</li>
									<li>Docker</li>
									<li>Express.js</li>
									<li>Figma</li>
								</ul>
							</p>
						</div>
						<div className={styles.my_pic_dyu}>
							<Image
								src={myPic2}
								alt='Rupam Kerketta'
								title='Just trying to pose'
								height={500}
								width={440}
							/>
						</div>
					</section>
					<SectionDivide name_p1='[03]-' name_p2='Contact' id='contact' />
					<section className={styles.contact_me_section}>
						<h2 className={styles.section_head}>Get in Touch</h2>
						<div className={styles.contact_me_content}>
							<p>
								Whether you have a question or you just wanna say hi feel free
								and i’ll try my best to get back to you.
							</p>
							<div className={styles.contact_button}>
								<Link href='mailto:dev.kerkettarupam@gmail.com'>
									<a>
										<button>Say Hello!!</button>
									</a>
								</Link>
							</div>
						</div>
					</section>

					<section className={styles.footer_section}>
						<div className={styles.footer_content}>
							<h3>Thank you for stopping by.</h3>
							<h3>Designed and Built by Rupam Kerketta</h3>
						</div>
						<div className={styles.footer_tech_name}>
							<h3>Technology used</h3>
							<Image
								src={nextJsLogo}
								title='Next.js'
								alt='Next.js'
								width={70}
								height={70}
							/>
						</div>
					</section>
				</div>
			</div>
		</>
	)
}

export default Home
