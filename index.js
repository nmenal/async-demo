console.log('Before');

getUser(1, (user) => {
    console.log("user : ", user);
    
    // Get the repositories 
    getRpositories(user.gitHubUserName, (repositories) => {
        console.log("repositories : ", repositories);
    })
});

console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a databse ...');
        callback({id:id,gitHubUserName:'nmenal'})
    }, 2000);
}

function getRpositories(username,callback) {
    setTimeout(()=>{
        console.log('Calling Github API...');
        
        callback(['repo1','repo2','repo3']);
    },2000)
}