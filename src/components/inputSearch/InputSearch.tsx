import('./InputSearch.scss')

interface InputPropsInterface {
    onFilterEmojis: (event: any) => void
}

function InputSearch({ onFilterEmojis }: InputPropsInterface) {

    const handleOnChangeInput = (event: any) => {
        onFilterEmojis(event.target.value)
    }

    return (
        <div className="input-box">
            <input name="filter" type="text" required onChange={handleOnChangeInput}/>
            <label htmlFor="filter">filter emoji</label>
        </div>
    );
}

export default InputSearch