// import types from './contacts-types';
import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContacts = createAction('contact/add', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

// const addContacts = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// });

const deleteContact = createAction('contact/delete');

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

const changeFilter = createAction('contact/changeFilter');

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

export default { addContacts, deleteContact, changeFilter };
