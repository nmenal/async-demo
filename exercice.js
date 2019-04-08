async function displayCustomer() {
    try {
        const customer = await getCustomer(1);
        console.log(customer)
        if (customer.isGold) {
            const movies = await getTopMovies(customer);
            const mail = await sendEmail(customer.email, movies);
            console.log(mail);
        }
    } catch (err) {
        console.log(err)
    }
}

displayCustomer();

function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'Mosh Hamedani',
                isGold: true,
                email: 'email'
            });
        }, 4000);
    });
}

function getTopMovies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
        }, 4000);
    });
}

function sendEmail(email, movies){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('a message');
        }, 4000);
    });
}