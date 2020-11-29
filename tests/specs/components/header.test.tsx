import * as React from 'react'
import { render, screen, within } from '@testing-library/preact'
import Header from '@/components/header'

describe('GIVEN a <Header />', () => {
    it('THEN should render its children components', () => {
        render(<Header />)
        const headerElement = screen.getByRole('banner')
        expect(within(headerElement).getByLabelText('juliomalves.dev')).toBeInTheDocument()
        expect(within(headerElement).getByRole('img', { name: 'Picture of Julio Alves' })).toBeInTheDocument()
        expect(within(headerElement).getByLabelText('Dark mode')).toBeInTheDocument()
    })
})
