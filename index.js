getUser(1, getRepositorie);

function getRepositorie(user) {
    getRepositories(user.gitHubUsername, getCommit);
}

function getCommit(repos) {
    getCommits(repos[0], displayCommits);
};

function displayCommits(commits) {
    console.log(commits);
}

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({ id: id, gitHubUsername: 'mosh' });
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling GitHub API...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}

function getCommits(repo, callback) {
    setTimeout(() => {
        console.log('Calling GitHub API...');
        callback(['commit']);
    }, 2000);
}