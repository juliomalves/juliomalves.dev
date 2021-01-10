import * as React from 'react'
import Head from 'next/head'
import SkillItem from '@/components/skill-item'
import TimelineItem, { TimelineItemType } from '@/components/timeline-item'
import Link from '@/components/link'
import SvgIcon, {
    cssIcon,
    gitIcon,
    htmlIcon,
    javascriptIcon,
    nextjsIcon,
    nodejsIcon,
    reactIcon,
    rokuIcon,
    sassIcon,
    typescriptIcon
} from '@/components/svg-icon'

const HomePage = () => {
    const sectionClassName = 'flex flex-col px-4 tablet:px-8'

    return (
        <>
            <Head>
                <link rel="canonical" href="https://juliomalves.dev" />
            </Head>
            <main className="grid-wrapper min-h-content">
                <h1 className="px-4 tablet:px-8">
                    Hello, I&apos;m <span className="inline-block">Julio Alves</span>
                </h1>
                <section className={sectionClassName} aria-label="Summary">
                    <p>
                        I&apos;m a <strong>software engineer</strong> experienced in building web apps for all kinds of devices. I&apos;m
                        based in London, UK where I work as a Senior Front-end Engineer at ITV.
                    </p>
                    <p>
                        My focus right now is <strong>React.js</strong>, using Next.js and TypeScript. I also have extensive experience with
                        Roku/BrightScript development.
                    </p>
                </section>
                <section className={sectionClassName} aria-labelledby="tech-skills">
                    <h2 id="tech-skills">Tech Skills</h2>
                    <p>Here are some of the technologies and tools I&apos;m proficient and comfortable with:</p>
                    <ul className="flex flex-wrap tablet:px-4">
                        <SkillItem
                            label="JavaScript"
                            icon={
                                <SvgIcon
                                    className="svg-skill-icon hover:text-energy-yellow"
                                    label="JavaScript logo"
                                    d={javascriptIcon}
                                    viewBox="0 0 50 50"
                                />
                            }
                        />
                        <SkillItem
                            label="TypeScript"
                            icon={
                                <SvgIcon
                                    className="svg-skill-icon hover:text-navy-blue"
                                    label="TypeScript logo"
                                    d={typescriptIcon}
                                    viewBox="0 0 50 50"
                                />
                            }
                        />
                        <SkillItem
                            label="React.js"
                            icon={
                                <SvgIcon
                                    className="svg-skill-icon hover:text-sky-blue"
                                    label="React.js logo"
                                    d={reactIcon}
                                    viewBox="0 0 50 50"
                                />
                            }
                        />
                        <SkillItem
                            label="Next.js"
                            icon={
                                <SvgIcon
                                    className="svg-skill-icon hover:text-gray-500"
                                    label="Next.js logo"
                                    d={nextjsIcon}
                                    viewBox="0 0 48 48"
                                />
                            }
                        />
                        <SkillItem
                            label="Node.js"
                            icon={
                                <SvgIcon
                                    className="svg-skill-icon hover:text-may-green"
                                    label="Node.js logo"
                                    d={nodejsIcon}
                                    viewBox="0 0 32 32"
                                />
                            }
                        />
                        <SkillItem
                            label="HTML"
                            icon={
                                <SvgIcon className="svg-skill-icon hover:text-orange" label="HTML logo" d={htmlIcon} viewBox="0 0 50 50" />
                            }
                        />
                        <SkillItem
                            label="CSS"
                            icon={
                                <SvgIcon
                                    className="svg-skill-icon hover:text-royal-blue"
                                    label="CSS logo"
                                    d={cssIcon}
                                    viewBox="0 0 128 128"
                                />
                            }
                        />
                        <SkillItem
                            label="Sass"
                            icon={<SvgIcon className="svg-skill-icon hover:text-pink" label="Sass logo" d={sassIcon} viewBox="0 0 50 50" />}
                        />
                        <SkillItem
                            label="Git"
                            icon={
                                <SvgIcon
                                    className="svg-skill-icon hover:text-red-orange"
                                    label="Git logo"
                                    d={gitIcon}
                                    viewBox="0 0 50 50"
                                />
                            }
                        />
                        <SkillItem
                            label="BrightScript"
                            icon={
                                <SvgIcon
                                    className="svg-skill-icon hover:text-purple"
                                    label="BrightScript logo"
                                    d={rokuIcon}
                                    viewBox="0 0 24 24"
                                />
                            }
                        />
                    </ul>
                </section>
                <section className={sectionClassName} aria-labelledby="timeline">
                    <h2 id="timeline">Timeline</h2>
                    <ul>
                        <TimelineItem type={TimelineItemType.Work} date="2019-09-25" title="Joined ITV">
                            <p>
                                Got offered and accepted a senior position at ITV. Currently building React websites and a React Native app.
                            </p>
                        </TimelineItem>
                        <TimelineItem type={TimelineItemType.Work} date="2017-01-05" title="Joined Accedo.tv">
                            <p>
                                Started at Accedo.tv where I contributed to several Node.js microservices and CTV app. Around the same time,
                                decided to move closer to Central London, reducing my commute time by over <em>2 hours</em> a day!
                            </p>
                        </TimelineItem>
                        <TimelineItem type={TimelineItemType.Work} date="2015-09-25" title="Joined TV App Agency">
                            <p>
                                Managed to land my first job at TV App Agency, building apps for TVs and set-top boxes. Got to learn the
                                niche programming language <em>BrightScript</em> along the way!
                            </p>
                        </TimelineItem>
                        <TimelineItem type={TimelineItemType.Travel} date="2015-06-25" title="Moved to the UK">
                            <p>
                                Decided to move to London to look for my first real professional experience. BIGGER, <strong>bolder</strong>{' '}
                                and way busier (in a good way!) than what I was accustomed to.
                            </p>
                        </TimelineItem>
                        <TimelineItem type={TimelineItemType.Education} date="2015-01-15" title="Graduated from university">
                            <p>
                                Completed my master&apos;s degree in Software Enginering! Spent a few months working on research projects at
                                my uni afterwards, where I delved into MATLAB for a bit.
                            </p>
                        </TimelineItem>
                    </ul>
                </section>
                <section className={sectionClassName} aria-labelledby="contact">
                    <h2 id="contact">Contact</h2>
                    <p>
                        If you want to reach out please drop me an{' '}
                        <Link className="focus-outline" href="mailto:contact@juliomalves.dev" external>
                            email
                        </Link>
                        . You can also check out my social media presence following the links below.
                    </p>
                </section>
            </main>
        </>
    )
}

export default HomePage
