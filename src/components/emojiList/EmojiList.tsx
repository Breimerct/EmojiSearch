import {EmojiInterface} from "../../interfaces/emoji.interface";
import CopySvg from '../../assets/icons/copy.svg'
import { toast, ToastOptions } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import('./EmojiList.scss')

interface EmojiListInterface {
    emojis: EmojiInterface[]
}

function EmojiList({emojis}: EmojiListInterface) {
    const codePointHex = (value: string) => (value.codePointAt(0)?.toString(16))

    const toastConfig: ToastOptions = {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark"
    }

    const handleOnCopy = async (emoji: string) => {
        await navigator.clipboard.writeText(emoji)
        toast.success('emoji copied correctly', toastConfig)
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