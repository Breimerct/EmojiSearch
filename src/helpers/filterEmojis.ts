import emojisJson from "../db/emojis.json";
import {EmojiInterface} from "../interfaces/emoji.interface";

export default function filterEmojis(search: string, maxResult: number): EmojiInterface[] {
    const emojis: EmojiInterface[] = emojisJson
    const emojisFiltered = emojis.filter(({title, keywords, symbol}) => (
        title.toLowerCase().includes(search.toLowerCase()) ||
        keywords.toLowerCase().includes(search.toLowerCase()) ||
        symbol.toLowerCase().includes(search.toLowerCase())
    ))
    emojisFiltered.sort((a, b) => (b.title < a.title ? 1 : -1))
    return emojisFiltered.slice(0, maxResult)
}