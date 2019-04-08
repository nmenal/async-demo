console.log('Before');
getUser(1)
    .then(user => getRpositories(user))
    .then(repos => getCommits(repos))
    .then(commits => console.log(commits))

async function displayCommits() {
    try {
        const user = await getUser(1);
        const repo = await getRpositories(user);
        const commits = await getCommits(repo[0]);
        console.log(commits);
    } catch (error) {
        console.log(error);
    }
}

displayCommits();

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getting user from database..')
            resolve({ id: id, username: "nmenal" });
        }, 2000)
    })
}

function getRpositories(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getting repos from github..');
            resolve(["repo1", "repos2", "repos3"]);
        }, 2000)
    })
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getting commits from repo..');
            resolve(["commits"]);
        }, 2000)
    })
}
console.log('After');