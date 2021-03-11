import {getUsers} from "./dataManager.js"
import {entryHTML} from "./HTMLManager.js"

console.log("parseCheck", getUsers());
export const entryLoopLog = () => {
    const entryHTMLSelector = document.querySelector(".postList")
    let entryListHolder = ""
        getUsers().then(param => {
            for (const entry of param) {
                entryListHolder += entryHTML(entry)
        }
        entryHTMLSelector.innerHTML = entryListHolder
        })
};
console.log("hello", entryLoopLog())


entryLoopLog()

