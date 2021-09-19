import { Component } from "react";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/app-actions";
import styles from "./Style.module.scss";

class FindContacts extends Component {
  render() {
    const { filter, handleFilter } = this.props;

    return (
      <div>
        <h3>Find contacts by name</h3>
        <input
          type="text"
          name="query"
          value={filter}
          required
          onInput={handleFilter}
          className={styles.input}
          autoComplete="off"
        />
      </div>
    );
  }
}

const getVisebleContacts = (allItems, filter) => {
  const normalizedFilter = filter.toLocaleLowerCase();
  return allItems.filter(
    ({ name, number }) =>
      name.toLocaleLowerCase().includes(normalizedFilter) ||
      number.includes(filter)
  );
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const visibleItems = getVisebleContacts(items, filter);
  return { contacts: visibleItems };
};

const mapDispatchToProps = (dispatch) => ({
  handleFilter: (event) => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FindContacts);
