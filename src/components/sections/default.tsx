import React from 'react'

type Props = {
    id: string
}

const DefaultSection = ({ id }: Props): JSX.Element => (
    <section id={id} className="flex flex-col justify-center p-6">
        Default Section
    </section>
)

export default DefaultSection
