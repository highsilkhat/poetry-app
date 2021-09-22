import {syllable} from 'syllable'
import React, {useState} from 'react';

const Haiku = (props) => {

const [haiku, setHaiku] = useState({
    firstLine: "",
    secondLine: "",
    thirdLine: ""
})


const onChangeHandler = (event) => {
    setHaiku({
        ...haiku,
        [event.target.name]: event.target.value
    })
}

const haikuCheck = (value, numSyllables) => {
    console.log(syllable(value))
    if (syllable(value) === numSyllables) {
        return false;
    }
    return true
}

// would like to add the current number of syllables in front-end validation message

//would like to use single text box for multiple lines of poetry

    return (
        <>
            <h1>Poetry App</h1>

            <h2>Haiku</h2>

            <form>
                <label>First Line</label>
                <textarea name="firstLine" onChange={onChangeHandler} /><br />
                <span>{haikuCheck(haiku.firstLine, 5) && haiku.firstLine.length !== 0 && "The first line of a haiku has 5 syllables."}</span><br />

                <label>Second Line</label>
                <input type="text" name="secondLine" onChange={onChangeHandler} /><br />
                <span>{haikuCheck(haiku.secondLine, 7) && haiku.secondLine.length !== 0 && "The second line of a haiku has 7 syllables."}</span><br />

                <label>Third Line</label>
                <input type="text" name="thirdLine" onChange={onChangeHandler} /><br />
                <span>{haikuCheck(haiku.thirdLine, 7) && haiku.thirdLine.length !== 0 && "The third line of a haiku has 5 syllables."}</span><br />
            </form>
        </>
    )

}

export default Haiku