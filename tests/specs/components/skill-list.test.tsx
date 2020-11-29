import * as React from 'react'
import { render, screen, within } from '@testing-library/preact'
import SkillList from '@/components/skill-list'

describe('GIVEN a <SkillList />', () => {
    it.each([
        ['JavaScript'],
        ['TypeScript'],
        ['React.js'],
        ['Next.js'],
        ['Node.js'],
        ['HTML'],
        ['CSS'],
        ['Sass'],
        ['Git'],
        ['BrightScript']
    ])('THEN should render %s skill item', skill => {
        render(<SkillList />)
        expect(within(screen.getByRole('list')).getByLabelText(skill)).toBeInTheDocument()
    })
})
