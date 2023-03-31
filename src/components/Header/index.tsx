import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from './Header.module.scss'

const navItems = [
    {
        label: 'Home',
        path: '#home',
        title: 'Navigate to top of page',
    },
    {
        label: 'About',
        path: '#about',
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
        icon: '',
    },
    {
        label: 'Instagram',
        path: '#',
        title: 'Follow Dustin Hunter on Instagram',
        icon: '',
    },
    {
        label: 'LinkedIn',
        path: '#',
        title: 'Connect with Dustin Hunter on LinkedIn',
        icon: '',
    },
] 

const Header = () => {

    const [showMenu, setShowMenu] = useState(false)

    const toggleNav = (): void => {
        setShowMenu(!showMenu)
    }

    return (
        <header>
            <div className={styles.container}>
                {/* Header Logo Image */}
                <div>
                    <Image src="/assets/images/dustin-hunter-circle-profile-small.png" alt="Small circle profile picture of Dustin Hunter" height={70} width={70} />
                </div>

                {/* Mobile Nav Toggle */}
                <div>
                    <button onClick={() => toggleNav()} aria-label="Toggle mobile navigation menu">
                        |||
                    </button>
                </div>

                {/* Nav Menu */}
                <nav>
                    {/* Close Mobile Nav Button */}
                    <button onClick={() => toggleNav()} aria-label="Toggle mobile navigation menu">
                        X
                    </button>

                    {/* Nav Top - Mobile Only */}
                    <div>
                        <Image src="/assets/images/dustin-hunter-circle-profile-small.png" alt="Small circle profile picture of Dustin Hunter" height={70} width={70} />
                        <p>Skill and Passion Combined</p>
                    </div>
                    {/* END Nav Top */}

                    {/* Nav Main */}
                    <div>
                        <ul>
                            {
                                navItems.map(item => (
                                    <li key={item.label}>
                                        <Link href={item.path} title={item.title}>{item.label}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* END Nav Main */}

                    {/* Nav Bottom - Mobile Only */}
                    <div>
                        <div>Connect on Social</div>
                        <ul>
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
        </header>
    )
}

export default Header