import * as React from 'react'
import { render, screen, within } from '@testing-library/preact'
import HomePage from '@/pages/index'

describe('GIVEN a <HomePage />', () => {
    it('THEN should render its children components', () => {
        render(<HomePage />)
        const main = within(screen.getByRole('main'))
        expect(main.getByLabelText('Summary')).toBeInTheDocument()
        expect(main.getByLabelText('Tech Skills')).toBeInTheDocument()
        expect(main.getByLabelText('Timeline')).toBeInTheDocument()
        expect(main.getByLabelText('Contact')).toBeInTheDocument()
    })
})
