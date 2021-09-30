import PropTypes from 'prop-types';
import s from './App.css';
import { connect } from 'react-redux';
import ContactForm from './components/contactForm/ContactForm';
import Filter from './components/filter/Filter';
import ContactList from './components/contactList/ContactList';
import Title from './components/title/Title';
import operations from './redux/contacts/contacts-operations';
import { Component } from 'react';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className={s.container}>
        <Title text="Phoneboock" />
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

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => {
    dispatch(operations.fetchContacts());
  },
});

export default connect(null, mapDispatchToProps)(App);
