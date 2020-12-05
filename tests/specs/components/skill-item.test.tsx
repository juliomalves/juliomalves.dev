import * as React from 'react'
import { render, screen } from '@testing-library/preact'
import SkillItem from '@/components/skill-item'
import ReactLogo from '@/assets/svg/react-logo.svg'

describe('GIVEN a <SkillItem />', () => {
    it('THEN should render %s skill item', () => {
        render(<SkillItem label="React.js" Icon={ReactLogo} />)
        expect(screen.getByText('React.js')).toBeInTheDocument()
    })
})
