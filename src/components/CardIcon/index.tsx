interface Props {
    icon: any
    title: string
    content: string
}

// ** Styles Import
import styles from './CardIcon.module.scss'

const CardIcon = ({ icon, title, content }: Props) => {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div className={styles.title}>
                {title}
            </div>
            <p className={styles.content}>
                {content}
            </p>
        </div>
    )
}

export default CardIcon