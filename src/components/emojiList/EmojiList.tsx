import {EmojiInterface} from "../../interfaces/emoji.interface";
import CopySvg from '../../assets/icons/copy.svg'
import {useToasts} from 'react-toast-notifications';

import('./EmojiList.scss')

interface EmojiListInterface {
    emojis: EmojiInterface[]
}

function EmojiList({emojis}: EmojiListInterface) {
    const codePointHex = (value: string) => (value.codePointAt(0)?.toString(16))
    const {addToast} = useToasts();

    const handleOnCopy = async (emoji: string) => {
        await navigator.clipboard.writeText(emoji)
        addToast('Copy Successfully', {
            appearance: 'success',
            autoDismiss: true,
            autoDismissTimeout: 1500
        })
    }

    return (
        <div className="emoji-list">
            {
                emojis.map(({title, symbol}, index) => {
                    return (
                        <div
                            className="emoji-list-item"
                            key={index}
                            data-emoji={symbol}
                            onClick={() => handleOnCopy(symbol)}
                        >
                            <img src={`//cdn.jsdelivr.net/emojione/assets/png/${codePointHex(symbol)}.png`}
                                 alt="emoji-img"/>
                            <p className="title">{title}</p>
                            <span className="info">
                                <img width="30px" src={CopySvg} alt="copy-icon"/>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default EmojiList