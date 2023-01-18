import './App.scss'
import InputSearch from "../../components/inputSearch/InputSearch";
import {useState} from "react";
import {EmojiInterface} from "../../interfaces/emoji.interface";
import filterEmojis from "../../helpers/filterEmojis";
import EmojiList from "../../components/emojiList/EmojiList";
import scaredCatEmoji from "../../assets/images/scared_cate.png"
import fireEmoji from "../../assets/images/fire.png"

function App() {
    const [emojis, setEmojis] = useState<EmojiInterface[]>(filterEmojis("", 20));

    const handleFilterEmojis = (search: string) => {
        setEmojis(filterEmojis(search, 20))
    }

    return (
        <div className="container">
            <header className="emoji-search-header">
                <img src={scaredCatEmoji} alt="header-emoji"/>
                <h4>Emoji Search</h4>
                <img src={fireEmoji} alt="header-emoji"/>
            </header>
            <InputSearch onFilterEmojis={handleFilterEmojis}/>
            <EmojiList emojis={emojis}/>
        </div>
    )
}

export default App
