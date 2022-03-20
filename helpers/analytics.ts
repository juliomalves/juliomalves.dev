export const pageView = (url: string) => {
    window.gtag?.('config', process.env.NEXT_PUBLIC_ANALYTICS_ID ?? '', {
        page_path: url
    })
}

interface IGTagEventParams {
    action: Gtag.EventNames
    category?: string
    label?: string
    value?: number
}

export const event = ({ action, category, label, value }: IGTagEventParams) => {
    window.gtag?.('event', action, {
        event_category: category,
        event_label: label,
        value
    })
}
