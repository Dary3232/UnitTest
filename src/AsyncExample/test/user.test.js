jest.mock('../request'); 

import * as user from '../user';
import request from '../request'; 


beforeEach(() => {
  request.mockImplementation(() => 
    Promise.resolve({ name: 'Mark' })
  );
});

it('works with promises', () => {
  expect.assertions(1);
  return user.getUserName(4).then(data => expect(data).toBe('Mark'));
});