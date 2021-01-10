import * as React from 'react'
import { render, screen, within } from '@testing-library/preact'
import Footer from '@/components/footer'

describe('GIVEN a <Footer />', () => {
    it('THEN should render its children components', () => {
        render(<Footer />)
        const footerElement = screen.getByRole('contentinfo')
        expect(within(footerElement).getByLabelText('Twitter')).toBeInTheDocument()
        expect(within(footerElement).getByRole('img', { name: 'Twitter logo', hidden: true })).toBeInTheDocument()
        expect(within(footerElement).getByLabelText('GitHub')).toBeInTheDocument()
        expect(within(footerElement).getByRole('img', { name: 'GitHub logo', hidden: true })).toBeInTheDocument()
        expect(within(footerElement).getByLabelText('LinkedIn')).toBeInTheDocument()
        expect(within(footerElement).getByRole('img', { name: 'LinkedIn logo', hidden: true })).toBeInTheDocument()
        expect(within(footerElement).getByText(/^Julio Alves © \d{4}$/)).toBeInTheDocument()
    })
})
