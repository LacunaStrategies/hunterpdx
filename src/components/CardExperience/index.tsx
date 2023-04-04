// ** Styles Import
import styles from './CardExperience.module.scss'

interface Props {
    title: string
    employer: string
    years: string
    details: React.ReactNode
}

const CardExperience = ({ title, employer, years, details }: Props) => {
    return (
        <div className={styles.card}>
            <div className={styles.inner}>
                <div className={styles.heading}>
                    <div>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.employer}>{employer}</div>
                    </div>
                    <div className={styles.years}>{years}</div>
                </div>
                <div className={styles.cardBottom}>
                    {details}
                </div>
            </div>

        </div>
    )
}

export default CardExperience