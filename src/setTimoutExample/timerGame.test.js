import { timerGame } from './timerGame';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

test('waits 1 second before ending the game', () => {
  const callback = jest.fn();
  timerGame(callback);

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  

  jest.runAllTimers();
  

  expect(callback).toHaveBeenCalled();
});