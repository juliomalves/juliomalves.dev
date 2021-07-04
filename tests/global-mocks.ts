import '@testing-library/jest-dom/extend-expect'
import { loadEnvConfig } from '@next/env'
import { mockedRouter } from '@/tests/utils/with-router-context'

// Load environment variables the same way Next.js does
loadEnvConfig(process.cwd())

// Mock `window.matchMedia()` which is not implemented by JSDOM.
// https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
    }))
})

jest.mock('next/router', () => ({
    ...mockedRouter,
    useRouter() {
        return mockedRouter
    }
}))
