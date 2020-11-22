import * as React from 'react'

interface EmojiProps {
    label: string
    symbol: string
}

const Emoji = ({ label, symbol }: EmojiProps) => (
    <span role="img" aria-label={label}>
        {symbol}
    </span>
)

export default Emoji
