import React from 'react'

interface SummarySectionProps {
    id: string
}

const SummarySection = ({ id }: SummarySectionProps) => (
    <section id={id} className="flex flex-col justify-center p-6">
        <h1 className="sub-heading">Hello, my name is Julio Alves</h1>
        <p>I&apos;m a Software Engineer experienced in building Web-based applications for connected TV devices.</p>
        <button className="btn btn-gray">Click me!</button>
    </section>
)

export default SummarySection
