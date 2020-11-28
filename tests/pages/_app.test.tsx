import * as React from 'react'
import { Router as NextRouter } from 'next/router'
import { render, screen } from '@testing-library/preact'
import App from '@/pages/_app'
import { mockedRouter } from '@/tests/utils/with-router-context'
import * as analytics from '@/helpers/analytics'

const renderComponent = ({ Component, pageProps }) =>
    render(<App Component={Component} pageProps={pageProps} router={mockedRouter as NextRouter} />)

describe('GIVEN an <App />', () => {
    describe('WHEN provided with a component and page props', () => {
        it('THEN should render its children components', () => {
            const Component = () => <main>Page component test</main>
            renderComponent({ Component, pageProps: {} })
            expect(screen.getByRole('banner')).toBeInTheDocument()
            expect(screen.getByText('Page component test')).toBeInTheDocument()
            expect(screen.getByRole('contentinfo')).toBeInTheDocument()
        })
    })

    describe('WHEN a route change occurs', () => {
        it('THEN should trigger page view tracking', () => {
            const pageViewMock = jest.spyOn(analytics, 'pageView').mockImplementation(jest.fn)
            const onRouteEventsMock = jest.spyOn(mockedRouter.events, 'on').mockImplementation(jest.fn)
            const Component = () => <main>Page component test</main>
            renderComponent({ Component, pageProps: {} })
            const handleRouteChange = onRouteEventsMock.mock.calls[0][1]
            handleRouteChange('/')
            expect(pageViewMock).toHaveBeenCalledWith('/')
        })
    })
})
