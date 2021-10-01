import PropTypes from 'prop-types';
import s from './App.css';
import { connect } from 'react-redux';
import ContactForm from './components/contactForm/ContactForm';
import Filter from './components/filter/Filter';
import ContactList from './components/contactList/ContactList';
import Title from './components/title/Title';
import operations from './redux/contacts/contacts-operations';
import { Component } from 'react';
import contactsSelectors from './redux/contacts/contacts-selectors';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className={s.container}>
        <Title text="Phoneboock" />
        {this.props.isLoading && <h1>loading...</h1>}
        <ContactForm />
        <Title text="Contacts" />
        <Filter />
        <ContactList />
      </div>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};

const mapStateToProps = state => ({
  isLoading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => {
    dispatch(operations.fetchContacts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
