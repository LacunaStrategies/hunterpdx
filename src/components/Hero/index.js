// ** NextJS Imports
import Image from 'next/image'
import Link from 'next/link'

// ** React Icons Import
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { TbBrandNextjs, TbBrandTypescript, TbBrandSupabase } from 'react-icons/tb'

// ** Styles Import
import styles from './Hero.module.scss'

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

const skillsItems = [
    {
        label: 'NextJS',
        path: '#',
        title: 'Next.js by Vercel - The React Framework',
        icon: <TbBrandNextjs aria-hidden="true" />,
    },
    {
        label: 'Instagram',
        path: '#',
        title: 'Follow Dustin Hunter on Instagram',
        icon: <TbBrandTypescript aria-hidden="true" />,
    },
    {
        label: 'LinkedIn',
        path: '#',
        title: 'Connect with Dustin Hunter on LinkedIn',
        icon: <TbBrandSupabase aria-hidden="true" />,
    },
]

const Hero = () => {
    return (
        <section className={styles.hero} id="hero">
            {/* Container */}
            <div className="container">
                {/* Flex Wrapper */}
                <div className={styles.row}>
                    {/* Profile Image - Right Column */}
                    <div className={styles.profileImage}>
                        {/* Image */}
                        <Image src="/assets/images/dustin-hunter-profile-large.png" width={656} height={617} priority={true} alt="Head and shoulders profile picture of Dustin Hunter" />
                    </div>
                    {/* Content - Left Column */}
                    <div className={styles.content}>
                        {/* SubTitle */}
                        <div className={styles.subHeading}>Get to Know Me</div>
                        {/* Heading */}
                        <h1 className={styles.primaryHeading}>Hi, I&apos;m <span>Dustin Hunter</span></h1>
                        {/* Text */}
                        <p>I am a team-oriented, success driven, individual with a passion for providing top tier results. My goal is to help achieve a higher level of success through mastering new products, providing my team a dependable champion, and working together to find solutions which reduce cost and improve both quality and speed. I have a passion for web development and apply my technical skills to success in the SaaS and Web Development spaces, leading teams of exceptional developers; not from behind, but at the front of the pack.</p>

                        {/* Flex Wrapper */}
                        <div className={styles.showcase}>
                            {/* Social Block */}
                            <div className={`${styles.showcaseBlock}`}>
                                <div className={styles.showcaseHeading}>Social</div>
                                <ul className={styles.socialList}>
                                    {
                                        socialItems.map((item) => (
                                            <li key={item.label}>
                                                <Link href={item.path} title={item.title} target="_blank" rel="noreferrer">
                                                    {item.icon}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            {/* Skills Block */}
                            <div className={`${styles.showcaseBlock}`}>
                                <div className={styles.showcaseHeading}>Skills</div>
                                <ul className={styles.skillsList}>
                                    {
                                        skillsItems.map((item) => (
                                            <li key={item.label}>
                                                <Link href={item.path} title={item.title} target="_blank" rel="noreferrer">
                                                    {item.icon}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero