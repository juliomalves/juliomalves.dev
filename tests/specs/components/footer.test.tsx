import * as React from 'react'
import { render, screen, within } from '@testing-library/preact'
import Footer from '@/components/footer'

describe('GIVEN a <Footer />', () => {
    it('THEN should render its children components', () => {
        render(<Footer />)
        const footer = within(screen.getByRole('contentinfo'))
        expect(footer.getByLabelText('Twitter')).toBeInTheDocument()
        expect(footer.getByRole('img', { name: 'Twitter logo', hidden: true })).toBeInTheDocument()
        expect(footer.getByLabelText('GitHub')).toBeInTheDocument()
        expect(footer.getByRole('img', { name: 'GitHub logo', hidden: true })).toBeInTheDocument()
        expect(footer.getByLabelText('LinkedIn')).toBeInTheDocument()
        expect(footer.getByRole('img', { name: 'LinkedIn logo', hidden: true })).toBeInTheDocument()
        expect(footer.getByText(/^Julio Alves © \d{4}$/)).toBeInTheDocument()
    })
})
