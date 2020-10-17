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
        <li className="flex flex-col my-2">
            <div className="flex items-center">
                <div className="border-2 rounded-full border-current w-4 h-4"></div>
                <time className="font-semibold px-4" dateTime={date}>
                    {dateString}
                </time>
            </div>
            <div className="flex flex-col pl-8 mt-2 relative timeline -z-1">
                <h3>
                    {title} {<Emoji label={type} symbol={symbol} />}
                </h3>
                {children}
            </div>
        </li>
    )
}

export default TimelineItem
