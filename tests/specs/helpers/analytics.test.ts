import { pageView, event } from '@/helpers/analytics'

describe('GIVEN pageView()', () => {
    describe('WHEN the gtag global is set', () => {
        it('THEN should call the gtag function with the appropriate params', () => {
            global.gtag = jest.fn()
            pageView('/page-path')
            expect(global.gtag).toHaveBeenCalledWith('config', 'ga-test-id', { page_path: '/page-path' })
            delete global.gtag
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
            global.gtag = jest.fn()
            event({ action: 'page_view', category: 'event-category', label: 'event-label', value: 1 })
            expect(global.gtag).toHaveBeenCalledWith('event', 'page_view', {
                event_category: 'event-category',
                event_label: 'event-label',
                value: 1
            })
            delete global.gtag
        })
    })

    describe('WHEN the gtag global is NOT set', () => {
        it('THEN should NOT call the gtag function', () => {
            event({ action: 'page_view', category: 'event-category', label: 'event-label', value: 1 })
            expect(global.gtag).toBeUndefined()
        })
    })
})
