import { render, screen, within } from '@testing-library/react'
import Header from '@/components/header'
import { ThemeProvider } from '@/components/contexts/theme'

describe('GIVEN a <Header />', () => {
    it('THEN should render its children components', async () => {
        render(
            <ThemeProvider>
                <Header />
            </ThemeProvider>
        )
        const header = within(screen.getByRole('banner'))
        expect(await header.findByLabelText('Dark mode')).toBeInTheDocument()
        expect(header.getByLabelText('juliomalves.dev')).toBeInTheDocument()
        expect(header.getByRole('img', { name: 'Julio Alves' })).toBeInTheDocument()
    })
})
