import React, { ReactNode } from 'react'

interface SectionProps {
    children: ReactNode,
    id: string
}

const Section = ({ id, children }: SectionProps) => (
    <section id={id} className="flex flex-col justify-center max-w-3xl py-4">
        {children}
    </section>
)

export default Section
