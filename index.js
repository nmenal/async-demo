console.log('Before');

const p = getUser(1);
p
    .then((user) => getRpositories(user.gitHubUserName))
    .then((repositories) => console.log("repositories : ", repositories))
    .catch(err => console.log("Error :", err))

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a databse ...');
            resolve({ id: id, gitHubUserName: 'nmenal' });
        }, 2000);
    });
}

function getRpositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling Github API...');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    })
}