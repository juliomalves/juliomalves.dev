import * as React from 'react'

interface SectionProps {
    children: React.ReactNode,
    id: string
}

const Section = ({ id, children }: SectionProps) => (
    <section id={id} className="flex flex-col p-4 sm:px-8">
        {children}
    </section>
)

export default Section
