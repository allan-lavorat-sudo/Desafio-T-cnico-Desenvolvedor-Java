class BookstoreApi {
    constructor() {
        this.baseUrl = 'https://demoqa.com';
    }

    createUser(username, password) {
        return cy.request({
            method: 'POST',
            url: `${this.baseUrl}/Account/v1/User`,
            body: {
                userName: username,
                password: password
            },
            failOnStatusCode: false
        });
    }

    generateToken(username, password) {
        return cy.request({
            method: 'POST',
            url: `${this.baseUrl}/Account/v1/GenerateToken`,
            body: {
                userName: username,
                password: password
            }
        });
    }

    isAuthorized(username, password) {
        return cy.request({
            method: 'POST',
            url: `${this.baseUrl}/Account/v1/Authorized`,
            body: {
                userName: username,
                password: password
            }
        });
    }

    getBooks() {
        return cy.request({
            method: 'GET',
            url: `${this.baseUrl}/BookStore/v1/Books`
        });
    }

    addBooks(userId, token, isbnList) {
        const collectionOfIsbns = isbnList.map(isbn => ({ isbn }));
        return cy.request({
            method: 'POST',
            url: `${this.baseUrl}/BookStore/v1/Books`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: {
                userId: userId,
                collectionOfIsbns: collectionOfIsbns
            }
        });
    }

    getUserDetails(userId, token) {
        return cy.request({
            method: 'GET',
            url: `${this.baseUrl}/Account/v1/User/${userId}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }
}

export default new BookstoreApi();
