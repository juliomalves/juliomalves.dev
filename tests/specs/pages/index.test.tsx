import * as React from 'react'
import { render, screen } from '@testing-library/preact'
import HomePage from '@/pages/index'

const renderComponent = () => render(<HomePage />)

describe('GIVEN a <HomePage />', () => {
    it('THEN should render its children components', () => {
        renderComponent()
        expect(screen.getByRole('main')).toBeInTheDocument()
        expect(screen.getByLabelText('Summary')).toBeInTheDocument()
        expect(screen.getByLabelText('Tech Skills')).toBeInTheDocument()
        expect(screen.getByLabelText('Timeline')).toBeInTheDocument()
        expect(screen.getByLabelText('Contact')).toBeInTheDocument()
    })
})
