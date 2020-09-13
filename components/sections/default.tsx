import React from 'react'

interface DefaultSectionProps {
    id: string
}

const DefaultSection = ({ id }: DefaultSectionProps) => (
    <section id={id} className="flex flex-col justify-center p-6">
        Default Section
    </section>
)

export default DefaultSection
