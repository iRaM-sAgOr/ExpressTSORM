import * as chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import app from '../src/server';
import Person from "../src/models/Person";

chai.use(chaiHttp);
const { expect } = chai;

describe('GET /api/users', () => {
  // Prepare stubs for Person model interactions
  let findAllStub: sinon.SinonStub;

  beforeEach(() => {
    findAllStub = sinon.stub(Person, 'findAll').resolves([
      Person.build({ id: '1', name: 'John Doe' }),
      Person.build({ id: '2', name: 'Jane Doe' })
    ]);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should return all users', (done) => {
    chai.request(app)
      .get('/person')
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        
        // Ensure response body matches stubbed data
        expect(res.body).to.deep.equal([
          { id: '1', name: 'John Doe', created_at: null, updated_at: null },
          { id: '2', name: 'Jane Doe', created_at: null, updated_at: null }
        ]);
        done();
      });
  });
});