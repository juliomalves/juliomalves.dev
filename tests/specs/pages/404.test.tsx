import * as React from 'react'
import { render, screen, within } from '@testing-library/preact'
import Page404 from '@/pages/404'

describe('GIVEN a <Page404 />', () => {
    it('THEN should render its children components', () => {
        render(<Page404 />)
        const mainElement = screen.getByRole('main')
        expect(within(mainElement).getByLabelText('Page Not Found')).toBeInTheDocument()
        expect(within(mainElement).getByRole('link', { name: 'Go back home' })).toBeInTheDocument()
    })
})
