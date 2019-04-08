console.log('Before');

const user = getUser(1,(user)=>{
    console.log("user : ",user);
});

console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a databse ...');
        callback({id:id,gitHubUserName:'nmenal'})
    }, 2000);
}