import PageWrapper from '@/components/page-wrapper'
import SkillItem from '@/components/skill-item'
import TimelineItem from '@/components/timeline-item'
import Link from '@/components/link'
import SvgIcon from '@/components/svg-icon'

const HomePage = () => {
    const sectionClassName = 'flex flex-col px-4 tablet:px-8'
    const skillIconClassName = 'inline-block w-12 h-12 tablet:w-16 tablet:h-16'

    return (
        <PageWrapper>
            <h1 className="px-4 tablet:px-8">
                Hello, I&apos;m <span className="inline-block">Julio Alves</span>
            </h1>
            <section className={sectionClassName} aria-label="Summary">
                <p>
                    I&apos;m a <strong>software engineer</strong> experienced in building web apps for all kinds of devices. I&apos;m based
                    in London, UK where I work as a Lead Front-end Engineer at ITV.
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
                        hoverClassName="group-hover:text-[#F0DB4F]"
                        label="JavaScript"
                        icon={<SvgIcon className={skillIconClassName} title="JavaScript logo" id="icon-javascript" hidden />}
                    />
                    <SkillItem
                        hoverClassName="group-hover:text-[#007ACC]"
                        label="TypeScript"
                        icon={<SvgIcon className={skillIconClassName} title="TypeScript logo" id="icon-typescript" hidden />}
                    />
                    <SkillItem
                        hoverClassName="group-hover:text-[#61DBFB]"
                        label="React.js"
                        icon={<SvgIcon className={skillIconClassName} title="React.js logo" id="icon-react" hidden />}
                    />
                    <SkillItem
                        hoverClassName="group-hover:text-gray-500"
                        label="Next.js"
                        icon={<SvgIcon className={skillIconClassName} title="Next.js logo" id="icon-nextjs" hidden />}
                    />
                    <SkillItem
                        hoverClassName="group-hover:text-[#3C873A]"
                        label="Node.js"
                        icon={<SvgIcon className={skillIconClassName} title="Node.js logo" id="icon-nodejs" hidden />}
                    />
                    <SkillItem
                        hoverClassName="group-hover:text-[#E34C26]"
                        label="HTML"
                        icon={<SvgIcon className={skillIconClassName} title="HTML logo" id="icon-html" hidden />}
                    />
                    <SkillItem
                        hoverClassName="group-hover:text-[#2965F1]"
                        label="CSS"
                        icon={<SvgIcon className={skillIconClassName} title="CSS logo" id="icon-css" hidden />}
                    />
                    <SkillItem
                        hoverClassName="group-hover:text-[#CC6699]"
                        label="Sass"
                        icon={<SvgIcon className={skillIconClassName} title="Sass logo" id="icon-sass" hidden />}
                    />
                    <SkillItem
                        hoverClassName="group-hover:text-[#06B6D4]"
                        label="TailwindCSS"
                        icon={<SvgIcon className={skillIconClassName} title="Tailwind CSS logo" id="icon-tailwindcss" hidden />}
                    />
                    <SkillItem
                        hoverClassName="group-hover:text-[#6F1AB1]"
                        label="BrightScript"
                        icon={<SvgIcon className={skillIconClassName} title="BrightScript logo" id="icon-brightscript" hidden />}
                    />
                </ul>
            </section>
            <section className={sectionClassName} aria-labelledby="timeline">
                <h2 id="timeline">Timeline</h2>
                <ul>
                    <TimelineItem type="work" date="2023-10-16" title="Promoted to Tech Lead">
                        <p>
                            Got promoted to a Tech Lead position at ITV. Currently working across several teams to support ITVX web app
                            development.
                        </p>
                    </TimelineItem>
                    <TimelineItem type="work" date="2019-09-25" title="Joined ITV">
                        <p>Got offered and accepted a senior position at ITV. Currently building React websites and a React Native app.</p>
                    </TimelineItem>
                    <TimelineItem type="work" date="2017-01-05" title="Joined Accedo.tv">
                        <p>
                            Started at Accedo.tv where I contributed to several Node.js microservices and CTV app. Around the same time,
                            decided to move closer to Central London, reducing my commute time by over <em>2 hours</em> a day!
                        </p>
                    </TimelineItem>
                    <TimelineItem type="work" date="2015-09-25" title="Joined TV App Agency">
                        <p>
                            Managed to land my first job at TV App Agency, building apps for TVs and set-top boxes. Got to learn the niche
                            programming language <em>BrightScript</em> along the way!
                        </p>
                    </TimelineItem>
                    <TimelineItem type="travel" date="2015-06-25" title="Moved to the UK">
                        <p>
                            Decided to move to London to look for my first real professional experience. BIGGER, <strong>bolder</strong> and
                            way busier (in a good way!) than what I was accustomed to.
                        </p>
                    </TimelineItem>
                    <TimelineItem type="education" date="2015-01-15" title="Graduated from university">
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
                    <Link className="focus-outline" href="mailto:contact@juliomalves.dev" external>
                        email
                    </Link>
                    . You can also check out my social media presence following the links below.
                </p>
            </section>
        </PageWrapper>
    )
}

export default HomePage
