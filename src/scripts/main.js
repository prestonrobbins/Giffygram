import {entryLoopLog} from "./listManager.js"
import {NavBar} from "./navBar.js"
import {Footer} from "./Footer.js"



/**
 * Main logic module for what should happen on initial page load for Giffygram
 */

//Get a reference to the location on the DOM where the app will display
let postElement = document.querySelector(".postList");
let navElement = document.querySelector("nav");
let entryElement = document.querySelector(".entryForm")
const applicationElement = document.querySelector(".giffygram");
let FooterElement = document.querySelector("footer");


/*
 This function performs one, specific task.

 1. Can you explain what that task is?
 2. Are you defining the function here or invoking it?
*/
const startGiffyGram = () => {
    postElement.innerHTML = "Hello Cohort 47"
    }


const showNavBar = () => {
    navElement.innerHTML = NavBar();
   }


const showFooter = () => {
    FooterElement.innerHTML = Footer();
   }




applicationElement.addEventListener("click", event => {
	if (event.target.id === "logout"){
		console.log("You clicked on logout")
	}
})



applicationElement.addEventListener("change", event => {
  if (event.target.id === "yearSelection") {
    const yearAsNumber = parseInt(event.target.value)
    console.log(`User wants to see posts since ${yearAsNumber}`)
    //invoke a filter function passing the year as an argument
    showFilteredPosts(yearAsNumber);
  }
})

const showFilteredPosts = (year) => {
  //get a copy of the post collection
  const epoch = Date.parse(`01/01/${year}`);
  //filter the data
  const filteredData = usePostCollection().filter(singlePost => {
    if (singlePost.timestamp >= epoch) {
      return singlePost
    }
  })
  const postElement = document.querySelector(".postList");
  postElement.innerHTML = PostList(filteredData);
}



startGiffyGram();
entryLoopLog();
showNavBar();
showFooter();