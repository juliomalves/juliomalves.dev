import { pageView, event } from '@/helpers/analytics'

const setupGlobals = () => {
    process.env.NEXT_PUBLIC_ANALYTICS_ID = 'ga-test-id'
    global.gtag = jest.fn()
}

const cleanupGlobals = () => {
    delete process.env.NEXT_PUBLIC_ANALYTICS_ID
    delete global.gtag
}

describe('GIVEN pageView()', () => {
    describe('WHEN the gtag global is set', () => {
        it('THEN should call the gtag function with the appropriate params', () => {
            setupGlobals()
            pageView('/page-path')
            expect(global.gtag).toHaveBeenCalledWith('config', 'ga-test-id', { page_path: '/page-path' })
            cleanupGlobals()
        })
    })

    describe('WHEN the gtag global is NOT set', () => {
        it('THEN should NOT call the gtag function', () => {
            pageView('/page-path')
            expect(global.gtag).toBeUndefined()
        })
    })
})

describe('GIVEN event()', () => {
    describe('WHEN the gtag global is set', () => {
        it('THEN should call the gtag function with the appropriate params', () => {
            setupGlobals()
            event({ action: 'page_view', category: 'event-category', label: 'event-label', value: 1 })
            expect(global.gtag).toHaveBeenCalledWith('event', 'page_view', {
                event_category: 'event-category',
                event_label: 'event-label',
                value: 1
            })
            cleanupGlobals()
        })
    })

    describe('WHEN the gtag global is NOT set', () => {
        it('THEN should NOT call the gtag function', () => {
            event({ action: 'page_view', category: 'event-category', label: 'event-label', value: 1 })
            expect(global.gtag).toBeUndefined()
        })
    })
})
