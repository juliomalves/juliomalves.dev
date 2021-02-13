import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/preact'
import ThemeToggleButton from '@/components/theme-toggle-button'

const setThemeMock = jest.fn()
jest.mock('next-themes', () => ({
    useTheme() {
        return { theme: 'light', setTheme: setThemeMock }
    }
}))

describe('GIVEN a <ThemeToggleButton />', () => {
    describe('WHEN the button is clicked', () => {
        it('THEN should change theme', () => {
            render(<ThemeToggleButton />)
            expect(screen.getByRole('img', { name: 'Moon icon' })).toBeInTheDocument()
            fireEvent.click(screen.getByLabelText('Dark mode'))
            expect(setThemeMock).toHaveBeenCalledWith('dark')
        })
    })
})
