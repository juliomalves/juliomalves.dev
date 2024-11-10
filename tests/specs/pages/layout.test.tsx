import { render, screen } from '@testing-library/react'
import RootLayout from '@/app/layout'

jest.mock('@/helpers/analytics')

const renderComponent = ({ Component }: any) =>
    render(
        <RootLayout>
            <Component />
        </RootLayout>
    )

describe('GIVEN an <RootLayout />', () => {
    describe('WHEN provided with a component and page props', () => {
        it('THEN should render its children components', () => {
            const Component = () => <main>Page component test</main>
            renderComponent({ Component })
            expect(screen.getByRole('banner')).toBeInTheDocument()
            expect(screen.getByText('Page component test')).toBeInTheDocument()
            expect(screen.getByRole('contentinfo')).toBeInTheDocument()
        })
    })
})
