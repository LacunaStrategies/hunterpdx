// ** Import Styles
import styles from './CardEducation.module.scss'

interface Props {
    title: string
    school: string
    years: string
}

const CardEducation = ({ title, school, years }: Props) => {
    return (
        <div className={styles.card}>
            <div className={styles.inner}>
                <div className={styles.heading}>
                    <div>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.school}>{school}</div>
                    </div>
                    <div className={styles.years}>{years}</div>
                </div>
            </div>
        </div>
    )
}

export default CardEducation