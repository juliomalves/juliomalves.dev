import * as React from 'react'
import { render, screen } from '@testing-library/react'
import SvgIcon from '@/components/svg-icon'

describe('GIVEN a <SvgIcon />', () => {
    it('THEN should render given icon', () => {
        render(<SvgIcon id="icon-react" title="React logo" />)
        expect(screen.getByRole('img', { name: 'React logo' })).toBeInTheDocument()
    })
})
