export function haikuMatcher (poetryData) {

    return {
        name: "haiku",
        isMatch: checkHaiku(poetryData)
    }

}

function checkHaiku (poetryData) {
    if (poetryData.syllableCounts.length !== 3) {
        return false
    }
    return poetryData.syllableCounts[0] === 5 
        && poetryData.syllableCounts[1] === 7 
        && poetryData.syllableCounts[2] === 5
}