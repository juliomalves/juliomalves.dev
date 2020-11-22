import * as React from 'react'
import Section from '@/components/section'

import SummaryMarkup from '@/components/sections/summary.mdx'

const HomePage = () => (
    <main className="grid-wrapper divide-y divide-gray-300">
        <Section id="summary">
            <SummaryMarkup />
        </Section>
    </main>
)

export default HomePage
