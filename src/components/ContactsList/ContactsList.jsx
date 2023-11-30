import propTypes from 'prop-types'
import css from "./ContactsList.module.css"


export const ContactsList = ({ contacts , handleDelete }) => (
  <div className={css.contactListWrapper}>
  <ul className={css.contactsList}>
    {contacts.map ((contact) => (
        <li className={css.contactListItem} key={contact.id}> <span>{contact.name}: {contact.number} </span>
          <button type="submit" onClick={() => handleDelete(contact.id)}>Delete</button>
         </li>
    ))}
  </ul>
  </div>
);


ContactsList.propTypes = {
  contacts: propTypes.array.isRequired,
  handleDelete: propTypes.func.isRequired,
}