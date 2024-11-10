import { render, screen, within } from '@testing-library/react'
import Page404 from '@/app/not-found'

describe('GIVEN a <Page404 />', () => {
    it('THEN should render its children components', () => {
        render(<Page404 />)
        const main = within(screen.getByRole('main'))
        expect(main.getByLabelText('Page Not Found')).toBeInTheDocument()
        expect(main.getByRole('link', { name: 'Go back home' })).toBeInTheDocument()
    })
})
