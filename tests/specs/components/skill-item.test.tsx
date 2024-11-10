import { render, screen } from '@testing-library/react'
import SkillItem from '@/components/skill-item'
import SvgIcon from '@/components/svg-icon'

describe('GIVEN a <SkillItem />', () => {
    it('THEN should render given skill item', () => {
        render(<SkillItem hoverClassName="text-black" label="React.js" icon={<SvgIcon id="icon-react" title="React logo" />} />)
        expect(screen.getByText('React.js')).toBeInTheDocument()
        expect(screen.getByRole('img', { name: 'React logo' })).toBeInTheDocument()
    })
})
