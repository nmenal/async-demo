//if any of the promises is rejected the finale promise is considered rejected

const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        reject(new Error('Because something failed'));
    }, 2000);
})
const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
    }, 2000);
})


Promise.all([p1,p2])
    .then(result => console.log(result));
    