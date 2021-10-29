import styles from '../styles/section-head.module.scss'

const SectionDivide = ({ name_p1, name_p2 }) => {
	return (
		<div className={styles.section_divide}>
			<div className={styles.line_left}></div>
			<h2>
				<span className={styles.nav_item_00}>{name_p1}</span>
				<span className={styles.nav_item_01}>{name_p2}</span>
			</h2>
			<div className={styles.line_right}></div>
		</div>
	)
}

export default SectionDivide
