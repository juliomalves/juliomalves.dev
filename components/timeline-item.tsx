import React, { ReactNode } from 'react'
import Emoji from '@/components/emoji'

export enum TimelineItemType {
    Education = 'education',
    Travel = 'travel',
    Work = 'work'
}

interface ITimelineItem {
    date: string
    children: ReactNode
    title: string
    type: TimelineItemType
}

const typeToSymbol: Record<TimelineItemType, string> = {
    [TimelineItemType.Education]: '👨‍🎓',
    [TimelineItemType.Travel]: '✈️',
    [TimelineItemType.Work]: '👨‍💻'
}

const TimelineItem = ({ children, date, title, type }: ITimelineItem) => {
    const dateFormat = new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: 'long' })
    const dateString = dateFormat.format(new Date(date))
    const symbol = typeToSymbol[type]

    return (
        <li className="flex flex-col">
            <div className="flex items-center py-2">
                <div className="border-2 rounded-full border-neon-blue dark:border-cerise w-4 h-4"></div>
                <time className="text-lg font-semibold px-4" dateTime={date}>
                    {dateString}
                </time>
            </div>
            <div className="flex flex-col pl-8 relative text-gray-800 dark:text-gray-500 timeline -z-1">
                <h3 className="text-text-midnight dark:text-gray-100">
                    {title} {<Emoji label={type} symbol={symbol} />}
                </h3>
                {children}
            </div>
        </li>
    )
}

export default TimelineItem
