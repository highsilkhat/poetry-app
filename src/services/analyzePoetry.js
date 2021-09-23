import {syllable} from 'syllable'
import { haikuMatcher } from './matchers/haikuMatcher'

const analyzers = [
    haikuMatcher
]


export function analyzePoetry (text) {
    const lines = text.trim().split("\n")
    const syllableCounts = lines.map(line => syllable(line))
    const poetryData = {
        syllableCounts
    }
    console.log(poetryData)

    return analyzers.map(analyzer => analyzer(poetryData))
}