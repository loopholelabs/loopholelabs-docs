// Module imports
import {cache} from 'react'
import {uuidv7} from "uuidv7";

export const generateID = cache(() => {
    return uuidv7()
})
