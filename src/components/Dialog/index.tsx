// ** Framer Motion Import
import { motion } from "framer-motion"

// ** React Icons Imports
import { SlClose } from 'react-icons/sl'

// ** Components Imports
import Backdrop from '@/components/Backdrop'

// ** Styles Import
import styles from './Dialog.module.scss'
import Image from "next/image"
import Link from "next/link"

const dropIn = {
    hidden: {
        y: 150,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
    exit: {
        y: 150,
        opacity: 0,
    },
}

interface Props {
    handleClose: () => void
    activeItem: {
        title: string
        category: string
        img: string
        link: string
        content: any
    }
}

const Dialog = ({ handleClose, activeItem }: Props) => {

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className={styles.dialog}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <button
                    className={styles.close}
                    onClick={handleClose}
                >
                    <SlClose aria-hidden="true" title="Close Dialog" />
                </button>

                <div className={styles.image}>
                    <Image src={activeItem.img} height={600} width={800} alt={`${activeItem.title} Image`} />
                </div>
                <div className={styles.content}>
                    <div className={styles.category}>{activeItem.category}</div>
                    <div className={styles.title}>{activeItem.title}</div>
                    <div className={styles.text}>
                        {activeItem.content}
                    </div>
                    {
                        activeItem.link !== '' ? (
                            <Link 
                                href={activeItem.link} 
                                target="_blank" 
                                rel="noreferrer" 
                                className={styles.ctaButton}
                            >
                                View Project
                            </Link>
                        ) : (
                            <button 
                                className={styles.ctaButton}
                                disabled={true}
                            >
                                Coming Soon
                            </button>
                        )
                    }
                </div>
            </motion.div>
        </Backdrop>
    )
}


export default Dialog