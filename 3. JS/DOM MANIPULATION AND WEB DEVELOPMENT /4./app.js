// using promise
function savetoDb(data)
{

    return new Promise( (resolve,reject) => {
        let internetSpeed = Math.floor(Math.random() *10 ) + 1;
        if( internetSpeed > 4 )
        {
            resolve("success : data was saved");
        }
        else
        {
            reject("failure : weak connection");
        }
    }
);
}


//write this in console to see output
// savetoDb("data one");


// use of .this() and .catch()
savetoDb("apna college")
    .then( (result) => {
        console.log("result : " , result );
        console.log("promise 1 was resolved");
        return savetoDb("apna college");
    })

       .then( (result) => {
            console.log("result : " , result );
            console.log("promise   2  was resolved");
        })
    
    
    .catch( (error) => { 
        console.log("error : " , error );
        console.log("promise was rejected");
    });