import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/preact'
import ThemeToggleButton from '@/components/theme-toggle-button'

describe('GIVEN a <ThemeToggleButton />', () => {
    describe('WHEN the button is clicked', () => {
        it('THEN should toggle the theme', () => {
            render(<ThemeToggleButton />)
            fireEvent.click(screen.getByLabelText('Dark mode'))
            expect(screen.getByLabelText('Light mode')).toBeInTheDocument()
        })
    })
})
