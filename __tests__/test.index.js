const { isValidEmail, isValidPassword, validateUserInput } = require('../index.js');

const dataValid = { email: 'bob@yandex.com', password: '1amAp0k3m0n%' };
const dataInvalidPassword = { email: 'bob@yandex.com', password: '123456' };
const dataInvalidEmail = { email: 'bob', password: '1amAp0k3m0n%' };
const dataInvalidCredentials = { email: 'bob', password: '12345' };

describe('User data validation tests', () => {
    test('#isValidPassword should check that the password is valid', () => {
        expect(isValidPassword(dataInvalidEmail.password)).toBeTruthy();
        expect(isValidPassword(dataInvalidPassword.password)).toBeFalsy();
    });
    test('#isValidEmail should check that the email is valid', () => {
        expect(isValidEmail(dataInvalidPassword.email)).toBeTruthy();
        expect(isValidEmail(dataInvalidEmail.email)).toBeFalsy();
    });
    test('#validateUserInput should return the value of the message property if the data is correct, without returning an error', () => {
        expect(validateUserInput(dataValid).isValidated).toBeTruthy();
        expect(validateUserInput(dataValid).message).toBe('User created successfully');
        expect(validateUserInput(dataValid).error).toBeNull;
    });
    test('#validateUserInput should return the email error message if the email is incorrect', () => {
        expect(validateUserInput(dataInvalidEmail).isValidated).toBeFalsy();
        expect(validateUserInput(dataInvalidEmail).message).toBeNull;
        expect(validateUserInput(dataInvalidEmail).error).toBe('Wrong email');
    });
    test('#validateUserInput should return the password error message if the password is incorrect', () => {
        expect(validateUserInput(dataInvalidPassword).isValidated).toBeFalsy();
        expect(validateUserInput(dataInvalidPassword).message).toBeNull;
        expect(validateUserInput(dataInvalidPassword).error).toBe('Wrong password');
    });
    test('#validateUserInput should return an incorrect data error if all data is incorrect', () => {
        expect(validateUserInput(dataInvalidCredentials).isValidated).toBeFalsy();
        expect(validateUserInput(dataInvalidCredentials).message).toBeNull;
        expect(validateUserInput(dataInvalidCredentials).error).toBe('Incorrect data');
    });
});