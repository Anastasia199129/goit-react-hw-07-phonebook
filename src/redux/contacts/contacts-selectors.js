const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const getLoading = state => state.contacts.loading;

const getFiltredContacts = state => {
  const items = getContacts(state);
  const filter = getFilter(state);
  console.log(filter);
  return items.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
};

export default {
  getLoading,
  getFiltredContacts,
  getFilter,
};
