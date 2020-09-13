import React from 'react'
import DefaultSection from '@/components/sections/default'
import SummarySection from '@/components/sections/summary'

interface MainContainerProps {
    content: string[]
}

type Section = typeof DefaultSection | typeof SummarySection

const sectionsMap: Record<string, Section> = {
    summary: SummarySection,
    default: DefaultSection
}

const MainContainer = ({ content }: MainContainerProps) => {
    const sections = content.map(
        (item: string) => {
            const sectionId = item.toLowerCase()
            const DynamicSection = sectionsMap[sectionId] ?? sectionsMap.default
            return <DynamicSection key={sectionId} id={sectionId} />
        }
    )

    return <article className="w-full divide-y divide-gray-400 text-black bg-white">{sections}</article>
}

export default MainContainer
