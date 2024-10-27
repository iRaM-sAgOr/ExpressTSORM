import * as chai from 'chai';
import chaiHttp from 'chai-http';

declare module 'chai' {
  interface ChaiStatic {
    request: typeof chaiHttp.request;
  }
}
