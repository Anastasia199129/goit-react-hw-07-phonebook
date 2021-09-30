import Button from '../button/Button';
import PropTypes from 'prop-types';
import style from './contactList.module.css';
import { connect } from 'react-redux';
import action from '../../redux/contacts/contasts-actions';

const ContactList = ({ filtred, onButtonDeleteClick }) => {
  return (
    <ul className={style.list}>
      {filtred.map(({ name, number, id }) => {
        return (
          <li className={style.item} key={id}>
            <p className={style.p}>{name}:</p>
            <p className={style.pRight}>{number}</p>
            <Button
              text="Delete"
              onClick={() => {
                onButtonDeleteClick(id);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  filtred: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onButtonDeleteClick: PropTypes.func,
};

const mapStateToProps = state => ({
  filtred: state.contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(state.contacts.filter.toLowerCase()),
  ),
});

const mapDispatchToProps = dispatch => ({
  onButtonDeleteClick: id => dispatch(action.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
