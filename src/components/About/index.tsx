// ** React Icons Imports
import { FiTrendingUp, FiUsers, FiMenu, FiGithub } from 'react-icons/fi'
import { FaNodeJs } from 'react-icons/fa'
import { GiEasterEgg } from 'react-icons/gi'

// ** Components Import
import SectionTitle from '../SectionTitle'

// ** Styles Import
import styles from './About.module.scss'
import CardIcon from '../CardIcon'

const aboutItems = [
    {
        title: 'Management',
        icon: <FiTrendingUp aria-hidden="true" />,
        content: 'Strategic initiatives built on data, experience, and instinct. Active performance management through ongoing feedback, coaching and accountability.',
    },
    {
        title: 'Leadership',
        icon: <FiUsers aria-hidden="true" />,
        content: 'Leading from the front as a champion for the team; someone who is part of the team and not just in charge of it.',
    },
    {
        title: 'Problem Solving',
        icon: <FiMenu aria-hidden="true" />,
        content: 'Reducing problems to nothing more than a logical breakdown of potential solutions through advanced problem solving and critical thinking processes.',
    },
    {
        title: 'Front End Development',
        icon: <FiGithub aria-hidden="true" />,
        content: 'Utilizing popular front end languages, frameworks, and libraries to provide a fast, clean, and responsive experience for end users.',
    },
    {
        title: 'Back End Development',
        icon: <FaNodeJs aria-hidden="true" />,
        content: 'Comfortable with multiple server-side and programming languages, with enough experience and exposure to learn the next one quickly.',
    },
    {
        title: 'Easter Eggs',
        icon: <GiEasterEgg aria-hidden="true" />,
        content: 'Building interactive engagement for end users through a variety of unique and customized approaches.',
    },
]

const About = () => {
    return (
        <section className={styles.about}>
            <div className="container">
                <div>
                    <SectionTitle
                        title='What I Do'
                        subTitle='About Me'
                    />
                </div>
                <div className={styles.aboutList}>
                    {
                        aboutItems.map((item) => (
                            <div className={styles.aboutItem} key={item.title}>
                                <CardIcon
                                    key={item.title}
                                    title={item.title}
                                    icon={item.icon}
                                    content={item.content}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default About