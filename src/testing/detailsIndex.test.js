import { store } from '../app/store'; // Adjust the path as needed
import { index } from '../feature/DetailsIndex';

test("Initial State of the Index", () => {
  let state = store.getState().i;
  expect(state).toBe(1);
});

test("Update Index by 1", () => {
  let state = store.getState().i;
  store.dispatch(index(state + 1));
  state = store.getState().i;
  expect(state).toBe(2);
});
