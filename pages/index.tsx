import React from 'react'
import Section from '@/components/section'

import SummaryMarkup from '@/components/sections/summary.mdx'

const HomePage = () => (
    <main className="flex flex-col items-center p-6 sm:px-8 min-h-screen divide-y divide-gray-300">
        <Section id="summary">
            <SummaryMarkup />
        </Section>
    </main>
)

export default HomePage
