import * as React from 'react'
import { render, screen } from '@testing-library/preact'
import SkillItem from '@/components/skill-item'
import SvgIcon, { reactIcon } from '@/components/svg-icon'

describe('GIVEN a <SkillItem />', () => {
    it('THEN should render given skill item', () => {
        render(
            <SkillItem
                hoverClassName="text-black"
                label="React.js"
                icon={<SvgIcon d={reactIcon} title="React logo" viewBox="0 0 50 50" />}
            />
        )
        expect(screen.getByText('React.js')).toBeInTheDocument()
        expect(screen.getByRole('img', { name: 'React logo' })).toBeInTheDocument()
    })
})
