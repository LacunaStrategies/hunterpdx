// ** NextJS Imports
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** React Imports
import { useState } from 'react'

// ** React Icons Imports
import { RiMenu3Fill } from 'react-icons/ri'
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'

// ** Styles
import styles from './Header.module.scss'

const navItems = [
    {
        label: 'Home',
        path: '/#home',
        title: 'Navigate to top of page',
    },
    {
        label: 'About',
        path: '/#about',
        title: 'Navigate to About Us section',
    },
    {
        label: 'Portfolio',
        path: '#portfolio',
        title: 'Navigate to Portfolio section',
    },
    {
        label: 'Resume',
        path: '#resume',
        title: 'Navigate to Resume section',
    },
    {
        label: 'Contact',
        path: '#contact',
        title: 'Navigate to Contact section',
    }
]

const socialItems = [
    {
        label: 'Facebook',
        path: '#',
        title: 'Like Dustin Hunter on Facebook',
        icon: <FiFacebook aria-hidden="true" />,
    },
    {
        label: 'Instagram',
        path: '#',
        title: 'Follow Dustin Hunter on Instagram',
        icon: <FiInstagram aria-hidden="true" />,
    },
    {
        label: 'LinkedIn',
        path: '#',
        title: 'Connect with Dustin Hunter on LinkedIn',
        icon: <FiLinkedin aria-hidden="true" />,
    },
]

const Header = () => {

    // State Variables
    const [showMenu, setShowMenu] = useState(false)

    // Hooks
    const router = useRouter()

    // Functions
    const toggleNav = (): void => {
        setShowMenu(!showMenu)
    }

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.navWrapper}>
                    {/* Header Logo Image */}
                    <div>
                        <Link href="/" title="Navigate to top of page">
                            <Image src="/assets/images/dustin-hunter-circle-profile-small.png" alt="Small circle profile picture of Dustin Hunter" height={70} width={70} />
                        </Link>
                    </div>

                    {/* Mobile Nav Toggle */}
                    <div className={styles.navToggle}>
                        <button onClick={() => toggleNav()} aria-label="Toggle mobile navigation menu">
                            <RiMenu3Fill aria-hidden="true" />
                        </button>
                    </div>

                    {/* Nav Overlay - Mobile Only */}
                    <div
                        onClick={() => setShowMenu(false)}
                        className={`${styles.mobileOverlay} ${showMenu ? styles.open : ''}`}
                    ></div>

                    {/* Nav Menu */}
                    <nav className={showMenu ? `${styles.open}` : ''}>
                        <div className={styles.mobileNavTop}>
                            {/* Nav Top - Mobile Only */}
                            <Link onClick={() => setShowMenu(false)} href="/" title="Navigate to top of page">
                                <Image src="/assets/images/dustin-hunter-circle-profile-small.png" alt="Small circle profile picture of Dustin Hunter" height={70} width={70} />
                            </Link>
                            {/* Close Mobile Nav Button */}
                            <button
                                className={styles.closeNav}
                                onClick={() => setShowMenu(false)} aria-label="Close mobile navigation menu">
                                X
                            </button>
                            <p>Skill And Passion Combined</p>
                        </div>

                        {/* END Nav Top */}

                        {/* Nav Main */}
                        <ul className={styles.navList}>
                            {
                                navItems.map(item => (
                                    <li key={item.label}>
                                        <Link
                                            className={
                                                (router.asPath === item.path || (router.asPath === '/' && item.path === '/#home'))
                                                    ? styles.active
                                                    : ''
                                            }
                                            href={item.path}
                                            title={item.title}
                                            scroll={false}
                                            onClick={() => setShowMenu(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        {/* END Nav Main */}

                        {/* Nav Bottom - Mobile Only */}
                        <div className={styles.mobileNavBottom}>
                            <div className={styles.heading}>Connect on Social</div>
                            <ul className={styles.socialList}>
                                {
                                    socialItems.map(item => (
                                        <li key={item.label}>
                                            <Link href={item.path} title={item.title} target="_blank" rel="noreferrer">
                                                {item.icon}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header