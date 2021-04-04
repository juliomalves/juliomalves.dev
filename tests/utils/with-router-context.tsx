import { Router } from 'next/router'

export const mockedRouter: Partial<Router> = {
    route: '',
    pathname: '',
    query: {},
    asPath: '/',
    push: async () => true,
    replace: async () => true,
    reload: () => null,
    back: () => null,
    prefetch: async () => undefined,
    beforePopState: () => null,
    events: {
        on: () => null,
        off: () => null,
        emit: () => null
    }
}
