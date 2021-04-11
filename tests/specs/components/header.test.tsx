import * as React from 'react'
import { render, screen, within } from '@testing-library/preact'
import Header from '@/components/header'

describe('GIVEN a <Header />', () => {
    it('THEN should render its children components', async () => {
        render(<Header />)
        const header = within(screen.getByRole('banner'))
        expect(await header.findByLabelText('Dark mode')).toBeInTheDocument()
        expect(header.getByLabelText('juliomalves.dev')).toBeInTheDocument()
        expect(header.getByRole('img', { name: 'Julio Alves' })).toBeInTheDocument()
    })
})
