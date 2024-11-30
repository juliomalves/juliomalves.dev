import { render, screen, within } from '@testing-library/react'
import Footer from '@/components/footer'

describe('GIVEN a <Footer />', () => {
    it('THEN should render its children components', () => {
        render(<Footer />)
        const footer = within(screen.getByRole('contentinfo'))
        expect(footer.getByLabelText('Twitter')).toHaveAttribute('href', 'https://www.twitter.com/juli0malves')
        expect(footer.getByRole('img', { name: 'Twitter logo' })).toBeInTheDocument()
        expect(footer.getByLabelText('GitHub')).toHaveAttribute('href', 'https://www.github.com/juliomalves')
        expect(footer.getByRole('img', { name: 'GitHub logo' })).toBeInTheDocument()
        expect(footer.getByLabelText('Stack Overflow')).toHaveAttribute('href', 'https://www.stackoverflow.com/users/1870780/juliomalves')
        expect(footer.getByRole('img', { name: 'Stack Overflow logo' })).toBeInTheDocument()
        expect(footer.getByLabelText('LinkedIn')).toHaveAttribute('href', 'https://www.linkedin.com/in/juliomalves')
        expect(footer.getByRole('img', { name: 'LinkedIn logo' })).toBeInTheDocument()
        expect(footer.getByLabelText('Buy me a Coffee')).toHaveAttribute('href', 'https://buymeacoffee.com/juliomalves')
        expect(footer.getByRole('img', { name: 'Buy me a Coffee logo' })).toBeInTheDocument()
        expect(footer.getByText(/^Julio Alves © \d{4}$/)).toBeInTheDocument()
    })
})
