interface Props {
    title: string
    subTitle: string
}

// ** Styles Import
import styles from './SectionTitle.module.scss'

const SectionTitle = ({ title, subTitle }: Props) => {
    return (
        <div>
            {/* SubTitle */}
            <div className={styles.subTitle}>{subTitle}</div>
            {/* Title */}
            <h2 className={styles.title}>{title}</h2>
        </div>
    )
}

export default SectionTitle