import {syllable} from 'syllable'
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ShakesSonnet = (props) => {

    const [shakesSonnet, setShakesSonnet] = useState ({
        firstLine: "",
        secondLine: "",
        thirdLine: "",
        fourthLine: "",
        fifthLine: "",
        sixthLine: "",
        seventhLine: "",
        eigthLine: "",
        ninthLine: "",
        tenthLine: "",
        eleventhLine: "",
        twelthLine: "",
        thirteenthLine: "",
        fourteenthLine: ""
    })

    const [lastWord, setLastWord] = useState ({

        firstLine: "",
        secondLine: "",
        thirdLine: "",
        fourthLine: "",
        fifthLine: "",
        sixthLine: "",
        seventhLine: "",
        eigthLine: "",
        ninthLine: "",
        tenthLine: "",
        eleventhLine: "",
        twelthLine: "",
        thirteenthLine: "",
        fourteenthLine: ""
        
    })

    // const [rhymeList, setRhymeList] = useState ([])

    useEffect (() => {
        axios.get(`https://rhymebrain.com/talk?function=getRhymes&word=${lastWord.firstLine}`)
        .then(res => {
            setLastWord.FirstLine(res.data);
            console.log(res)
            
        })
        .catch(err => console.log(err));

    }, [lastWord.firstLine])

    const onChangeHandler = (event) => {
        setShakesSonnet({
            ...shakesSonnet,
            [event.target.name]: event.target.value
        })
        setLastWord({
            ...lastWord,
            [event.target.name]: findLastWord(event.target.value)
        })
    }
    
    const shakesSonnetCheck = (value) => {
        console.log(syllable(value))
        if (syllable(value) === 10) {
            return false;
        }
        return true
    }

    const findLastWord = (lines) => {
        let word = lines.split(" ");
        return( word[word.length - 1]);
    
    }

    const ryhmeCheck = (arr, rhymedWord) => {
        console.log(arr)
        console.log(rhymedWord)
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].word === rhymedWord) {
                console.log(arr[i].word)
                return false;
            }
        }
        return true
        
    }

    return (
        <>
            <h1>Poetry App</h1>

            <h2>Shakespearean Sonnet</h2>

            {/* {ryhmeCheck(rhymeList, "know")} */}
            {findLastWord("This is a string")}

            <form>
                <label>First Line</label>
                <input type="text" name="firstLine" onChange={onChangeHandler} /><br />
                <span>{shakesSonnetCheck(shakesSonnet.firstLine) && shakesSonnet.firstLine.length !== 0 && "Lines in sonnets have 10 syllables each."}</span><br />
                <span>{ryhmeCheck(lastWord.firstLine, lastWord.thirdLine) && "Lines do not rhyme"}</span><br/>

                <label>Second Line</label>
                <input type="text" name="secondLine" onChange={onChangeHandler} /><br />
                <span>{shakesSonnetCheck(shakesSonnet.secondLine) && shakesSonnet.secondLine.length !== 0 && "Lines in sonnets have 10 syllables each."}</span><br />

                <label>Third Line</label>
                <input type="text" name="thirdLine" onChange={onChangeHandler} /><br />
                <span>{shakesSonnetCheck(shakesSonnet.thirdLine) && shakesSonnet.thirdLine.length !== 0 && "Lines in sonnets have 10 syllables each."}</span><br />

                <label>Fourth Line</label>
                <input type="text" name="fourthLine" onChange={onChangeHandler} /><br />
                <span>{shakesSonnetCheck(shakesSonnet.fourthLine) && shakesSonnet.fourthLine.length !== 0 && "Lines in sonnets have 10 syllables each."}</span><br />

                <label>Fifth Line</label>
                <input type="text" name="fifthLine" onChange={onChangeHandler} /><br />
                <span>{shakesSonnetCheck(shakesSonnet.fifthLine) && shakesSonnet.fifthLine.length !== 0 && "Lines in sonnets have 10 syllables each."}</span><br />

                <label>Sixth Line</label>
                <input type="text" name="sixthLine" onChange={onChangeHandler} /><br />
                <span>{shakesSonnetCheck(shakesSonnet.sixthLine) && shakesSonnet.sixthLine.length !== 0 && "Lines in sonnets have 10 syllables each."}</span><br />

                <label>Seventh Line</label>
                <input type="text" name="seventhLine" onChange={onChangeHandler} /><br />
                <span>{shakesSonnetCheck(shakesSonnet.seventhLine) && shakesSonnet.seventhLine.length !== 0 && "Lines in sonnets have 10 syllables each."}</span><br />

                <label>Eight Line</label>
                <input type="text" name="eigthLine" onChange={onChangeHandler} /><br />
                <span>{shakesSonnetCheck(shakesSonnet.eigthLine) && shakesSonnet.eigthLine.length !== 0 && "Lines in sonnets have 10 syllables each."}</span><br />

                <label>Ninth Line</label>
                <input type="text" name="ninthLine" onChange={onChangeHandler} /><br />
                <span>{shakesSonnetCheck(shakesSonnet.ninthLine) && shakesSonnet.ninthLine.length !== 0 && "Lines in sonnets have 10 syllables each."}</span><br />

                <label>Tenth Line</label>
                <input type="text" name="tenthLine" onChange={onChangeHandler} /><br />
                <span>{shakesSonnetCheck(shakesSonnet.tenthLine) && shakesSonnet.tenthLine.length !== 0 && "Lines in sonnets have 10 syllables each."}</span><br />

                <label>Eleventh Line</label>
                <input type="text" name="eleventhLine" onChange={onChangeHandler} /><br />
                <span>{shakesSonnetCheck(shakesSonnet.eleventhLine) && shakesSonnet.eleventhLine.length !== 0 && "Lines in sonnets have 10 syllables each."}</span><br />

                <label>Twelth Line</label>
                <input type="text" name="twelthLine" onChange={onChangeHandler} /><br />
                <span>{shakesSonnetCheck(shakesSonnet.twelthLine) && shakesSonnet.twelthLine.length !== 0 && "Lines in sonnets have 10 syllables each."}</span><br />

                <label>Thirteenth Line</label>
                <input type="text" name="thirteenthLine" onChange={onChangeHandler} /><br />
                <span>{shakesSonnetCheck(shakesSonnet.thirteenthLine) && shakesSonnet.thirteenthLine.length !== 0 && "Lines in sonnets have 10 syllables each."}</span><br />

                <label>Fourteenth Line</label>
                <input type="text" name="secondLine" onChange={onChangeHandler} /><br />
                <span>{shakesSonnetCheck(shakesSonnet.secondLine) && shakesSonnet.secondLine.length !== 0 && "Lines in sonnets have 10 syllables each."}</span><br />

            </form>
            
            
        </>
    )

}

export default ShakesSonnet
