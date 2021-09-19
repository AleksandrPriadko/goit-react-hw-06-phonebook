import { Component } from "react";
import { connect } from "react-redux";
import styles from "./Style.module.scss";
import { deleteContact } from "../../redux/app-actions";

class ContactsList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;

    return (
      <ul className={styles.contacts}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={styles.contact}>
              <span>{name}</span>
              <span>{number}</span>
              <button
                className={styles.button}
                onClick={() => deleteContact(id)}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
