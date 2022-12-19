const app = require('../../src/app');

describe('\'genre\' service', () => {
  it('registered the service', () => {
    const service = app.service('genre');
    expect(service).toBeTruthy();
  });
});
