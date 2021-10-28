import Head from 'next/head'
import Image from 'next/image'

import Typewriter from 'typewriter-effect'

import myLogo from '../public/my-logo.svg'
import myPic from '../public/my-pic.png'
import styles from '../styles/home.module.scss'

function Home() {
	return (
		<div className={styles.home}>
			<Head>
				<title>Rupam Kerketta</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<div>
				<div className={styles.navigation}>
					<div className={styles.nav_item_p0}>
						<Image
							src={myLogo}
							width={135}
							height={135}
							alt='Rupam Kerketta'
							title='Rupam Kerketta'
						/>
					</div>
					<div className={styles.nav_item_p1}>
						<ul className={styles.nav_item_p11}>
							<li>
								<span className={styles.nav_item_00}>[00]-</span>
								<span className={styles.nav_item_01}>Projects</span>
							</li>
							<li>
								<span className={styles.nav_item_00}>[01]-</span>
								<span className={styles.nav_item_01}>Blogs</span>
							</li>
							<li>
								<span className={styles.nav_item_00}>[02]-</span>
								<span className={styles.nav_item_01}>About Me</span>
							</li>
							<li>
								<span className={styles.nav_item_00}>[03]-</span>
								<span className={styles.nav_item_01}>Contact</span>
							</li>
							<li>
								<span className={styles.nav_item_01}>Resume()</span>
							</li>
						</ul>
					</div>
				</div>

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
							width={390}
							height={390}
							alt='Rupam Kerketta'
							title='Rupam Kerketta'
						/>
					</div>
				</section>

				<div className={styles.navigation_keys}>
					<h3># Press 0 || 1 || 2 || 3 to switch between sections</h3>
				</div>
			</div>
		</div>
	)
}

export default Home
