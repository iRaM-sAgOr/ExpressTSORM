import { strict as assert } from 'assert';
import sinon, { SinonStub } from 'sinon';
import request from 'supertest';
import app from '../src/server';
import Person from '../src/models/Person';

describe('GET /person', () => {
  let findAllStub: SinonStub;

  beforeEach(() => {
    findAllStub = sinon.stub(Person, 'findAll').resolves([
      Person.build({ id: '1', name: 'John Doe' }),
      Person.build({ id: '2', name: 'Jane Doe' })
    ]);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should return all users', async () => {
    const response = await request(app).get('/person');

    assert.equal(response.status, 200);
    assert(Array.isArray(response.body), 'Response body should be an array');
    // assert.deepEqual(response.body, [
    //   { id: '1', name: 'John Doe', created_at: undefined, updated_at: undefined },
    //   { id: '2', name: 'Jane Doe', created_at: undefined, updated_at: undefined }
    // ]);
    assert.deepEqual(response.body, [
      { id: '1', name: 'John Doe' },
      { id: '2', name: 'Jane Doe' }
    ]);
  });
});