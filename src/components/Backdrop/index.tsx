interface Props {
    onClick: () => void
    children: React.ReactNode
}

// ** Framer Motion Imports
import { motion } from "framer-motion"

// ** Styles
import styles from './Backdrop.module.scss'

const Backdrop = ({ children, onClick }: Props) => {

    return (
        <motion.div
            onClick={onClick}
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    )
}

export default Backdrop