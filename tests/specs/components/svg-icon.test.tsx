import * as React from 'react'
import { render, screen } from '@testing-library/preact'
import SvgIcon, { reactIcon } from '@/components/svg-icon'

describe('GIVEN a <SvgIcon />', () => {
    it('THEN should render given icon', () => {
        render(<SvgIcon d={reactIcon} viewBox="0 0 50 50" label="React logo" />)
        expect(screen.getByRole('img', { name: 'React logo' })).toBeInTheDocument()
    })
})
