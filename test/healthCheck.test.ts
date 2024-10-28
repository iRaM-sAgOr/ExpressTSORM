import request from 'supertest';
import { strict as assert } from 'assert';
import app from '../src/server';

describe("GET /", () => {
    it("should return 200 OK", () => {
        return request(app).get("/")
            .expect(200);
    });

    it("should return Welcome to Express", async () => {
        const response = await request(app).get('/');
        assert.equal(response.status, 200)
        assert.strictEqual(response.body.message, 'server up')
    });
});