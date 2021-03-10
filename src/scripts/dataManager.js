let retrieveUsers = []



//create a function that will pull the array from the server
export const getUsers = () => {

    //tells where to fetch the array from (what server? this initializes the "promise")
    return fetch("http://localhost:8088/posts")
    //until this action is complete, dont move on (the action is converting the response to ".json" from "text" so our file can read it.)
    .then(response => response.json())
    //annonomys function that will console.log parsedResponse as well as return parsedResponse.
    .then(parsedResponse => {
        // console.log("parsedR", parsedResponse)
    // do something with response here
    //parsedResponse is what is holding the array from our server, that name is declared from the boilerplate code we used to set up the server. 
    return parsedResponse;
    })
    }

//this invokes the function above as well as adds in 
//    export const useUsers = () => {
//        getUsers().then(()=> {
//        return retrieveUsers})
//     };


    //used for later
    const loggedInUser = {
        id: 1,
        firstName: "Preston",
        lastName: "Shotts",
        email: "email@gmail.com"
       }
       
       export const getLoggedInUser = () => {
        return loggedInUser;
       }

       console.log(getLoggedInUser())



