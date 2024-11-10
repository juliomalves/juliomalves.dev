import { fireEvent, render, screen } from '@testing-library/react'
import ThemeToggleButton from '@/components/theme-toggle-button'
import { ThemeProvider } from '@/components/contexts/theme'

describe('GIVEN a <ThemeToggleButton />', () => {
    describe('WHEN the button is clicked', () => {
        it('THEN should toggle the theme', () => {
            render(
                <ThemeProvider>
                    <ThemeToggleButton />
                </ThemeProvider>
            )
            fireEvent.click(screen.getByLabelText('Dark mode'))
            expect(screen.getByLabelText('Light mode')).toBeInTheDocument()
            expect(screen.getByRole('img', { name: 'Sun icon' })).toBeInTheDocument()
        })
    })
})
