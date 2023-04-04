interface Props {
    title: string
    category: string
    img: string
    content: any
    link: string
    open: (item: {title: string, category: string, img: string, content: any, link: string}) => void
}

// ** NextJS Imports
import Image from 'next/image'

// ** React Icons Imports
import { FiArrowUpRight } from 'react-icons/fi'

// ** Styles Import
import styles from './CardImage.module.scss'

const CardImage = ({ title, category, img, content, link, open }: Props) => {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <button>
                    <Image
                        src={img}
                        alt="Portfolio Image"
                        width={800}
                        height={600}
                    />
                </button>
            </div>
            <div className={styles.category}>
                {category}
            </div>
            <button
                className={styles.title}
                onClick={() => open({title, category, img, content, link})}
                aria-label={`Show ${title} Dialog Content`}
            >
                {title}
                <FiArrowUpRight aria-hidden="true" />
            </button>
        </div>
    )
}

export default CardImage