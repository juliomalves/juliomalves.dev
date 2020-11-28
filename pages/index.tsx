import * as React from 'react'
import SkillList from '@/components/skill-list'
import TimelineItem, { TimelineItemType } from '@/components/timeline-item'
import Link from '@/components/link'

const HomePage = () => {
    const sectionClassName = 'flex flex-col px-4 sm:px-8'

    return (
        <main className="grid-wrapper">
            <section className={sectionClassName} aria-label="Summary">
                <h1 id="summary">
                    Hello, I&apos;m <span className="inline-block">Julio Alves</span>
                </h1>
                <p>
                    I&apos;m a <strong>software engineer</strong> experienced in building web apps for all kinds of devices. I&apos;m based
                    in London, UK where I work as a Senior Front-end Engineer at ITV.
                </p>
                <p>
                    My focus right now is <strong>React.js</strong>, using Next.js and TypeScript. I also have extensive experience with
                    Roku/BrightScript development.
                </p>
            </section>
            <section className={sectionClassName} aria-labelledby="tech-skills">
                <h2 id="tech-skills">Tech Skills</h2>
                <p>Here are some of the technologies and tools I&apos;m proficient and comfortable with:</p>
                <SkillList />
            </section>
            <section className={sectionClassName} aria-labelledby="timeline">
                <h2 id="timeline">Timeline</h2>
                <ul>
                    <TimelineItem type={TimelineItemType.Work} date="2019-09-25" title="Joined ITV">
                        <p>Got offered and accepted a senior position at ITV. Currently building React websites and a React Native app.</p>
                    </TimelineItem>
                    <TimelineItem type={TimelineItemType.Work} date="2017-01-05" title="Joined Accedo.tv">
                        <p>
                            Started at Accedo.tv where I contributed to several Node.js microservices and CTV app. Around the same time,
                            decided to move closer to Central London, reducing my commute time by over 2 hours a day!
                        </p>
                    </TimelineItem>
                    <TimelineItem type={TimelineItemType.Work} date="2015-09-25" title="Joined TV App Agency">
                        <p>
                            Managed to land my first job at TV App Agency, building apps for TVs and set-top boxes. Got to learn the niche
                            programming language <em>BrightScript</em> along the way!
                        </p>
                    </TimelineItem>
                    <TimelineItem type={TimelineItemType.Travel} date="2015-06-25" title="Moved to the UK">
                        <p>
                            Decided to move to London to look for my first real professional experience. BIGGER, <strong>bolder</strong> and
                            way busier (in a good way!) than what I was accustomed to.
                        </p>
                    </TimelineItem>
                    <TimelineItem type={TimelineItemType.Education} date="2015-01-15" title="Graduated from university">
                        <p>
                            Completed my master&apos;s degree in Software Enginering! Spent a few months working on research projects at my
                            uni afterwards, where I delved into MATLAB for a bit.
                        </p>
                    </TimelineItem>
                </ul>
            </section>
            <section className={sectionClassName} aria-labelledby="contact">
                <h2 id="contact">Contact</h2>
                <p>
                    If you want to reach out please drop me an{' '}
                    <Link href="mailto:contact@juliomalves.dev" external>
                        email
                    </Link>
                    . You can also check out my social media presence following the links below.
                </p>
            </section>
        </main>
    )
}

export default HomePage
