import React from 'react'
import Section from '@/components/section'

import SummaryMarkup from '@/components/sections/summary.mdx'
import ProjectsMarkup from '@/components/sections/projects.mdx'
import ContactMarkup from '@/components/sections/contact.mdx'

const HomePage = () => (
    <main className="flex flex-col items-center p-6 sm:px-8 divide-y divide-gray-300">
        <Section id="summary">
            <SummaryMarkup />
        </Section>
        <Section id="projects">
            <ProjectsMarkup />
        </Section>
        <Section id="contact">
            <ContactMarkup />
        </Section>
    </main>
)

export default HomePage
