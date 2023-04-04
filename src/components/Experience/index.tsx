// ** React Imports
import { useState } from 'react'

// ** Styles Import
import styles from './Experience.module.scss'

// ** Components Import
import SectionTitle from '@/components/SectionTitle'
import CardExperience from '@/components/CardExperience'
import CardEducation from '@/components/CardEducation'

const experience = [
    // {
    //     title: 'Owner',
    //     employer: 'Lacuna Strategies LLC',
    //     years: '2023 - Present',
    //     details: (
    //         <ul>
    //             <li>Development of websites, applications, and smart contracts</li>
    //             <li>Business consultations, </li>
    //         </ul>
    //     )
    // },
    {
        title: 'Developer - Freelance',
        employer: 'Eternal Royals NFT',
        years: '2021 - 2022',
        details: (
            <ul>
                <li>Complete redesign and rebuild of <a href="https://www.eternalroyals.io/" target="_blank" rel="noreferrer">Eternal Royals NFT</a> to improve layout, design, and content</li>
                <li>Drove user engagement through the roll out of a two-week easter egg event with 10 different easter eggs to find</li>
                <li>Interface and collaborate with the team and lead developer to achieve goals and strategic initiatives</li>
            </ul>
        )
    },
    {
        title: 'Director, Technical Support',
        employer: 'LeadVenture',
        years: '2018 - 2023',
        details: (
            <ul>
                <li>Collaborating with a team of 15 managers/supervisors and 120 employees across multiple brands to drive excellence in customer and technical support;</li>
                <li>Delivering products built in-house by Technical Support teams to reduce case volume and improve customer quality of life;</li>
                <li>Maintained 90%+ CSAT in 2021 with an average Technical Support NPS of 70 and on track to exceed last year&apos;s CSAT;</li>
                <li>Introduced Live Chat and Customer Self-Help channels, reducing case volume, resolution time, and dealer effort;</li>
                <li>Work directly with Executive team to set and achieve operational goals aligned with the company&apos;s vision</li>
            </ul>
        )
    },
    {
        title: 'Manager, Technical Support',
        employer: 'Dealer Spike, LLC',
        years: '2016 - 2018',
        details: (
            <ul>
                <li>Managed 70 employees across 6 Support Teams</li>
                <li>Maintained high quality support with below 24hr turnaround time</li>
                <li>Improved scalability through new structure, policies, and procedures</li>
                <li>Primary point of contact for all major escalations</li>
            </ul>
        )
    },
    {
        title: 'Asst. Manager, Technical Support',
        employer: 'Dealer Spike, LLC',
        years: '2015 - 2016',
        details: (
            <ul>
                <li>Developed in-depth reporting systems of employee performance</li>
                <li>Assisted in creation and achievement of departmental goals and KPIs</li>
                <li>Managed hiring and team building for multiple teams with varying skill requirements</li>
            </ul>
        )
    },
    {
        title: 'Lead, Technical Support',
        employer: 'Dealer Spike, LLC',
        years: '2014 - 2015',
        details: (
            <ul>
                <li>Provided motivation, coaching, counseling, and solutioning for team</li>
                <li>Created new and innovative solutions to satisfy client needs</li>
                <li>Set consecutive records for most cases closed</li>
                <li>Trained new hires on domain and DNS management, email administration, web development, platform support, and data integration management</li>
            </ul>
        )
    },
    {
        title: 'Developer - Freelance',
        employer: 'Metro Safety & Fire, Inc.',
        years: '2011 - 2013',
        details: (
            <ul>
                <li>Full redesign and rebuild of corporate website, improving content and user experience</li>
                <li>Full build of customer portal for customer&apos;s clients to log in and access reports necessary for compliance</li>
            </ul>
        )
    },
]

const education = [
    {
        title: 'Bachelors of Science in Finance',
        school: 'Portland State University',
        years: '2011 - 2013',
    },
    {
        title: 'Associates of Science in Business',
        school: 'Portland Community College',
        years: '2008 - 2010',
    },
]

const Experience = () => {

    const [activeTab, setActiveTab] = useState<'experience' | 'resume'>('experience')

    const currentYear = new Date().getFullYear()

    return (
        <section id="experience" className={styles.experience}>
            <div className="container">
                {/* Section Title */}
                <div style={{ textAlign: 'center' }}>
                    <SectionTitle
                        title="My Resume"
                        subTitle="10+ Years of Experience"
                    />
                </div>
                {/* Main Content */}
                <div>
                    {/* Toggle Buttons */}
                    <div className={styles.toggleButtons}>
                        <button
                            onClick={() => setActiveTab('experience')}
                            className={activeTab === 'experience' ? styles.active : ''}
                        >Experience</button>

                        <button
                            onClick={() => setActiveTab('resume')}
                            className={activeTab === 'resume' ? styles.active : ''}
                        >Professional Skills</button>
                    </div>

                    {/* Experience Section */}
                    <div className={styles.experienceList}>
                        {/* Experience */}
                        <div className={styles.experienceHeading}>
                            <div className={styles.years}>2014 - {currentYear}</div>
                            <h3 className={styles.heading}>Work Experience</h3>
                        </div>

                        <div className={styles.experienceCards}>
                            {
                                experience.map((item) => (
                                    <CardExperience
                                        key={item.title}
                                        title={item.title}
                                        employer={item.employer}
                                        years={item.years}
                                        details={item.details}
                                    />
                                ))
                            }
                        </div>


                        {/* Education */}
                        <div className={styles.experienceHeading}>
                            <div className={styles.years}>2014 - {currentYear}</div>
                            <h3 className={styles.heading}>Education</h3>
                        </div>

                        <div className={styles.educationCards}>
                            {
                                education.map((item) => (
                                    <CardEducation
                                        key={item.title}
                                        title={item.title}
                                        school={item.school}
                                        years={item.years}
                                    />
                                ))
                            }
                        </div>
                    </div>

                    {/* Resume Section */}
                    <div className={styles.resumeList}>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience