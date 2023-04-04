// ** React Imports
import { useState } from 'react'

// ** Framer Motion Imports
import { AnimatePresence } from 'framer-motion'

// ** Components Import
import CardImage from '../CardImage'
import SectionTitle from '../SectionTitle'

// ** Styles Import
import styles from './Portfolio.module.scss'
import Dialog from '../Dialog'

const portfolioItems = [
    {
        title: 'Eternal Royals NFT',
        category: 'Development',
        img: '/assets/images/eternal-royals.jpg',
        content: <p>I signed on with the Eternal Royals NFT project prior to October 2021, buliding their first website as an overnight emergency request in order to have a location to direct traffic for their pending NFT drop. Multiple cups of coffee later and racing the sun as it crested the horizon, the updated website was launched and the drop sold out in only 3 days!<br /><br />I have since signed on for longer-term management of the website and was able to redesign and launch the new current version of their website. Due to restrictions in the production environment, the site is currently built on HTML, CSS and jQuery/JS with multiple plugins for UX; current intentions are to convert the website to Ruby on Rails with Stimulus or React now that we are not rushing a release!</p>,
        link: 'https://www.eternalroyals.io/',
    },
    {
        title: 'HackerTyper Easter Egg',
        category: 'Development',
        img: '/assets/images/hackertyper-egg.jpg',
        content: <p>I recently worked on a customized implementation of the infamous <a href="https://hackertyper.net/" target="_blank" rel="noreferrer" title="Hacker Typer">HackerTyper</a>, to be utilized as an interactive landing page for an NFT project for gaining access to their whitelist.<br /><br />The core javascript of the HackerTyper script has been modified with an event masked as Typer.log which listens for a specific keydown event - in this case, the letter &ldquo;t&rdquo; - and then monitors for a specified number of characters to see if the password phrase - in this case, &ldquo;test&rdquo; (checked against a hashcode to obfuscate the intended phrase) - has been typed. Once the correct phrase has been typed, an AJAX call is made to a custom PHP script to validate the string and return markup revealing a hidden form for entering into the whitelist.</p>,
        link: '/easter-eggs/hackertyper',
    },
    {
        title: 'Royal Hunt Easter Eggs',
        category: 'Development',
        img: '/assets/images/royal-hunt.jpg',
        content: <p>As part of the <a href="https://www.eternalroyals.io/" target="_blank" rel="noreferrer" title="Eternal Royals NFT Portfolio Site">Eternal Royals NFT</a> new website launch, I created a set of 10 easter eggs to be released over 2 weeks (1 each day during the work week) as a contest for end users to compete as the first to find each egg and the first to find all 10, with prizes awared to the winners. It was a very fun event and received a lot of positive feedback from the community!<br /><br />The Royal Hunt was implemented primarily with changes to the markup and CSS of the website, with associated jQuery/JS for handling the interactive aspects and an AJAX call to a node.js file for handling final validation and returning the success validation markup to the page. The response included a link to a form for submitting the entry verification of having found an egg and receiving the timestamped log in the database, which was then used to populate a leadboard of the top 10 &ldquo;Royal Hunters&rdquo;.</p>,
        link: '',
    },
    {
        title: 'The Right Way to Say "No"',
        category: 'Management',
        img: '/assets/images/how-to-say-no.jpg',
        content: <p>Having dealt with a very customizeable platform and VIP client base for many years, I have experienced plenty of opportunities to work with clients who are accustomed to hearing the word &ldquo;yes&rdquo;. The issue this presents is that, like many, these clients are especially put off by the answer &ldquo;no&rdquo;. To provide my team(s) with a useful tool kit, I have created a breakdown of methods that can be used to say &ldquo;no&rdquo;, while mitigating the potential for an escalation.<br /><br />The core focus of &ldquo;The Right Way to Say No&rdquo; is that very few individuals (if any) feel good receiving a simple &ldquo;no&rdquo;, regardless of the level of professionalism or politeness applied to it. To effectively communicate to a client that something can&apos;t be (or won&apos;t be) done, it is imperitive that they understand the &ldquo;no&rdquo; and the level of consideration put into their request before they received their response. I offer this training regularly, outlining each method in detail with both how and when to use it. The results have been extremely positive!</p>,
        link: '',
    },
    {
        title: '5 Steps to Buy-In',
        category: 'Management',
        img: '/assets/images/5-steps-to-buy-in.jpg',
        content: <p>It is possible to get buy-in from almost anyone. The trick is understanding how to get it. Whether it be clients, 3rd parties, peers, supervisors, or even family and friends, getting buy-in is key to moving forward with as little conflict and confrontation as pssible. I have seen many individuals with great ideas who simply couldn&apos;t convey their thoughts in a way to achieve buy-in, losing out on the success they would have otherwise achieved.<br /><br />The &ldquo;5 Steps to Buy-In&rdquo; is a process that organizes some of the most important steps needed to achieve buy-in into a sequential order. Following these steps can greatly increase your chances of success, while missing or not properly understanding any of these steps will likely make buy-in more difficult. The 5 steps include the following: &ldquo;Disarm&rdquo;, &ldquo;Inform&rdquo;, &ldquo;Suggest&rdquo;, &ldquo;Digest&rdquo;, &ldquo;Execute/Loop&rdquo;. Contact me for the detailed breakdown!</p>,
        link: 'https://www.linkedin.com/pulse/standing-out-office-1-6-dustin-hunter/',
    },
    {
        title: 'Tracking Bandwidth as a CPU',
        category: 'Management',
        img: '/assets/images/tracking-bandwidth.jpg',
        content: <p>Over the years, I have trained many leaders on how to pull a story from data, understand what data is most important, and when that data is important. One of the facets of data analysis that I have seen individuals struggle with consistently is reporting on current and forecasted bandwidth needs. To solve this, I have created an alternative approach which relates headcount / working hours to that of CPU &ldquo;cores&rdquo; and tasks (widgets) to that of CPU &ldquo;processes&rdquo;.<br /><br />&ldquo;Tracking Bandwidth as a CPU&rdquo; is not a great deal different from any other throughput or bandwidth analysis and, instead, re-shapes the perspective of how you visualize that data in your mind and on a spreadsheet. Working in a tech-centric world, I found that relating team bandwidth to that of a CPU allowed individuals to more easily break down their processes, the cost of those processes, and how those costs were being distributed across their teams.</p>,
        link: '',
    },
]

const Portfolio = () => {

    const [modalOpen, setModalOpen] = useState(false)
    const [activeItem, setActiveItem] = useState({
        title: '',
        img: '',
        category: '',
        content: '',
        link: '',
    })

    const close = () => {
        setActiveItem({
            title: '',
            img: '',
            category: '',
            content: '',
            link: '',
        })
        setModalOpen(false)

        document.body.style.overflow = 'auto'
    }

    const open = (item: { title: string, category: string, img: string, content: any, link: string }) => {

        document.body.style.overflow = 'hidden'

        setActiveItem(item)
        setModalOpen(true)
    }

    return (
        <section id="portfolio" className={styles.portfolio}>
            <div className="container">
                <div style={{ textAlign: 'center' }}>
                    <SectionTitle
                        title="My Portfolio"
                        subTitle="A Brief Look at Things I've Done"
                    />
                </div>
                <div className={styles.portfolioList}>
                    {
                        portfolioItems.map((item) => (
                            <div className={styles.portfolioItem} key={item.title}>
                                <CardImage
                                    title={item.title}
                                    category={item.category}
                                    img={item.img}
                                    content={item.content}
                                    link={item.link}
                                    open={open}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>

            <AnimatePresence
                // Disable any initial animations on children that
                // are present when the component is first rendered
                initial={false}
                // Only render one component at a time.
                // The exiting component will finish its exit
                // animation before entering component is rendered
                mode="wait"
                // Fires when all exiting nodes have completed animating out
                onExitComplete={() => null}
            >
                {modalOpen && <Dialog handleClose={close} activeItem={activeItem} />}
            </AnimatePresence>
        </section>
    )
}

export default Portfolio