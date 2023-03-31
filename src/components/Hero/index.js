import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <section id="hero">
            {/* Container */}
            <div>
                {/* Flex Wrapper */}
                <div>
                    {/* Profile Image - Right Column */}
                    <div>
                        {/* Image */}
                        <Image src="/assets/images/dustin-hunter-profile-large.png" width={656} height={617} alt="Head and shoulders profile picture of Dustin Hunter" />
                    </div>
                    {/* Content - Left Column */}
                    <div>
                        {/* SubTitle */}
                        <div>Get to Know Me</div>
                        {/* Heading */}
                        <h1>Hi, I&apos;m <span>Dustin Hunter</span></h1>
                        {/* Text */}
                        <p>I am a team-oriented, success driven, individual with a passion for providing top tier results. My goal is to help achieve a higher level of success through mastering new products, providing my team a dependable champion, and working together to find solutions which reduce cost and improve both quality and speed. I have a passion for web development and apply my technical skills to success in the SaaS and Web Development spaces, leading teams of exceptional developers; not from behind, but at the front of the pack.</p>

                        {/* Flex Wrapper */}
                        <div>
                            {/* Social Block */}
                            <div>
                                <div>Social</div>
                                <ul>
                                    <li>
                                        <Link href="#" title="" target="_blank" rel="noreferrer">
                                            F
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" title="" target="_blank" rel="noreferrer">
                                            I
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" title="" target="_blank" rel="noreferrer">
                                            L
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Skills Block */}
                            <div>
                                <div>Skills</div>
                                <ul>
                                    <li>
                                        <Link href="#" title="" target="_blank" rel="noreferrer">
                                            TS
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" title="" target="_blank" rel="noreferrer">
                                            NextJS
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" title="" target="_blank" rel="noreferrer">
                                            SASS
                                        </Link>
                                    </li>
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