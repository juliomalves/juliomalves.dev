import React from 'react'

type Props = {
    id: string
}

const SummarySection = ({ id }: Props): JSX.Element => (
    <section id={id} className="flex flex-col justify-center p-6">
        <h1 className="sub-heading">Hello, my name is Julio Alves</h1>
        <p>I'm a Software Engineer experienced in building Web-based applications for connected TV devices.</p>
    </section>
)

export default SummarySection
