// import types from './contacts-types';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from '../contacts/contasts-actions';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const items = createReducer(initialState, {
  [actions.addContacts]: (state, { payload }) => {
    const findName = state.find(({ name }) => name === payload.name);
    if (findName !== undefined) {
      alert(`${payload.name} already exists`);
      return;
    }
    return [...state, payload];
  },
  [actions.deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

// const items = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];
//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
