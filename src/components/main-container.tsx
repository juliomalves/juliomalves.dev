import React from 'react'
import DefaultSection from '@components/sections/default'
import SummarySection from '@components/sections/summary'

type Props = {
    content: string[]
}

const sectionsMap = {
    summary: SummarySection,
    default: DefaultSection
}

const MainContainer = ({ content }: Props): JSX.Element => {
    const sections = content.map(
        (item: string): JSX.Element => {
            const sectionId = item.toLowerCase()
            const DynamicSection = sectionsMap[sectionId] ?? sectionsMap.default
            return <DynamicSection key={sectionId} id={sectionId} />
        }
    )

    return <article className="w-full divide-y divide-gray-400 text-black bg-white">{sections}</article>
}

export default MainContainer
