import * as React from 'react'
import { render, screen, within } from '@testing-library/preact'
import Link from '@/components/link'

const renderComponent = ({ href = '/', label = 'Link label', external = false } = {}) =>
    render(
        <Link href={href} label={label} external={external}>
            Link text
        </Link>
    )

describe('GIVEN a <Link />', () => {
    it('THEN should render its children components', () => {
        renderComponent()
        const linkElement = screen.getByLabelText('Link label')
        expect(linkElement).toHaveAttribute('href', '/')
        expect(linkElement).not.toHaveAttribute('rel')
        expect(linkElement).not.toHaveAttribute('target')
        expect(within(linkElement).getByText('Link text')).toBeInTheDocument()
    })

    describe('AND the link is external', () => {
        it('THEN should render its children components', () => {
            renderComponent({ external: true })
            const linkElement = screen.getByLabelText('Link label')
            expect(linkElement).toHaveAttribute('href', '/')
            expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer')
            expect(linkElement).toHaveAttribute('target', '_blank')
            expect(within(linkElement).getByText('Link text')).toBeInTheDocument()
        })
    })
})
