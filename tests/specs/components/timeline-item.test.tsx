import * as React from 'react'
import { render, screen, within } from '@testing-library/preact'
import TimelineItem from '@/components/timeline-item'

const renderComponent = () =>
    render(
        <TimelineItem title="Item 1" date="2020-01-01T12:00:00Z" type="education">
            <p>Item content</p>
        </TimelineItem>
    )

describe('GIVEN a <TimelineItem />', () => {
    it('THEN should render its children components', () => {
        renderComponent()
        const listItemElement = screen.getByRole('listitem')
        expect(within(listItemElement).getByText('January 2020')).toBeInTheDocument()
        expect(within(listItemElement).getByRole('heading', { name: 'Item 1 education' })).toBeInTheDocument()
        expect(within(listItemElement).getByText('Item content')).toBeInTheDocument()
    })
})
