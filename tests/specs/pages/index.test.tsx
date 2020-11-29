import * as React from 'react'
import { render, screen, within } from '@testing-library/preact'
import HomePage from '@/pages/index'

describe('GIVEN a <HomePage />', () => {
    it('THEN should render its children components', () => {
        render(<HomePage />)
        const mainElement = screen.getByRole('main')
        expect(within(mainElement).getByLabelText('Summary')).toBeInTheDocument()
        expect(within(mainElement).getByLabelText('Tech Skills')).toBeInTheDocument()
        expect(within(mainElement).getByLabelText('Timeline')).toBeInTheDocument()
        expect(within(mainElement).getByLabelText('Contact')).toBeInTheDocument()
    })
})
