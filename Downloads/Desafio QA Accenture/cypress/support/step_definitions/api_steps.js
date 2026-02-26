import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import api from "../api/api";

let username;
let password;
let userId;
let token;
let availableBooks = [];

Given("I create a new user with random credentials", () => {
    username = `user_${Math.floor(Math.random() * 1000000)}`;
    password = "Password123!";

    api.createUser(username, password).then((response) => {
        expect(response.status).to.eq(201);
        userId = response.body.userID;
    });
});

Given("I generate an access token", () => {
    api.generateToken(username, password).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.status).to.eq("Success");
        token = response.body.token;
    });
});

Given("I confirm the user is authorized", () => {
    api.isAuthorized(username, password).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.eq(true);
    });
});

Given("I list the available books", () => {
    api.getBooks().then((response) => {
        expect(response.status).to.eq(200);
        availableBooks = response.body.books;
        expect(availableBooks.length).to.be.greaterThan(0);
    });
});

When("I rent two books", () => {
    const isbnsToRent = [availableBooks[0].isbn, availableBooks[1].isbn];
    api.addBooks(userId, token, isbnsToRent).then((response) => {
        expect(response.status).to.eq(201);
    });
});

Then("I should see the rented books in the user details", () => {
    api.getUserDetails(userId, token).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.books.length).to.eq(2);
        expect(response.body.books[0].isbn).to.eq(availableBooks[0].isbn);
        expect(response.body.books[1].isbn).to.eq(availableBooks[1].isbn);
    });
});
