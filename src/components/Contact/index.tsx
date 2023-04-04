// ** NextJS Imports
import Image from 'next/image'

// ** React Icons Imports
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'
// ** Component Imports
import SectionTitle from '@/components/SectionTitle'

// ** Styles Import
import styles from './Contact.module.scss'
import Link from 'next/link'
import ContactForm from '../ContactForm'

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

const Contact = () => {
    return (
        <section className={styles.contact} id="contact">
            <div className="container">
                <div style={{ textAlign: 'center' }}>
                    <SectionTitle
                        subTitle="Drop a Line Anytime"
                        title="Contact Me"
                    />
                </div>
                <div className={styles.mainContent}>
                    {/* Bio */}
                    <div className={styles.bio}>
                        <div className={styles.image}>
                            <Image src="/assets/images/full-profile-bg.jpg" width={1038} height={650} alt="Dustin Hunter Profile Picture" />
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>Dustin Hunter</h3>
                            <div className={styles.subTitle}>Owner/Entrepreneur</div>
                            <p>I am always available to discuss web development, leadership/management, and business operations.</p>
                        </div>

                        <ul className={styles.contactList}>
                            <li><strong>Phone:</strong> <a href="tel:5036809017" title="Call Dustin Hunter">503.680.9017</a></li>
                            <li><strong>Email:</strong> <a href="mailto:dustin@hunterpdx.com">dustin@hunterpdx.com</a></li>
                        </ul>

                        <div>
                            <div className={styles.showcaseHeading}>Connect on Social</div>
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
                    </div>
                    {/* Contact Form */}
                    <div className={styles.contactForm}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact