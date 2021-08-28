const supertest = require('supertest');
const MotorServicingAppUsers = require("../models/index");
const app = require("../../server");


describe("Testing the motorservicingapp", () => {
    // Testing the POST /signup endpoint
    it("tests the signup endpoint and returns as success message", async () => {

        const response = await supertest(app).post("/signup").send({
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            password: '123456',
            password: '123456'
        });

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Created new User');
    });

    afterEach(async () => {
		await MotorServicingAppUsers.deleteOne({
			email: 'johndoe@gmail.com'
		}); 
    });

    // Testing the POST /login endpoint
    it("tests the login endpoint and return success message", async () => {
        
        const response = await supertest(app).post("/login").send({
            email: 'johndoe@gmail.com',
            password: '123456'
        });

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('logged in!');
    });

})