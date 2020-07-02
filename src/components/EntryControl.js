import React from "react";
import NewEntryForm from "./NewEntryForm";
import EntryList from "./EntryList";
import EntryDetail from "./EntryDetail";
import EditEntryForm from './EditEntryForm';


class EntryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterEntryList: [],
      counter: 0,
      selectedEntry: null,
      editing: false
    };
  }

  handleChangingSelectedEntry = (id) => {
    const selectedEntry = this.state.masterEntryList.filter(entry => entry.id === id)[0];
    this.setState({ selectedEntry: selectedEntry });
  }

  handleAddingNewEntryToList = (newEntry) => {

    const newMasterEntryList = this.state.masterEntryList.concat(newEntry);
    this.setState({
      masterEntryList: newMasterEntryList,
      counter: 0
    });
  }

  handleClick = () => {
    if (this.state.selectedEntry != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedEntry: null,
        editing: false
      });
    } else if (this.state.counter === 0) {
      this.setState(prevState => ({
        counter: prevState.counter + 1
      }));
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
        counter: 0
      }));
    }
  }

  handleEditingEntryInList = (entryToEdit) => {
    const editedMasterEntryList = this.state.masterEntryList
      .filter(entry => entry.id !== this.state.selectedEntry.id)
      .concat(entryToEdit);
    this.setState({
      masterEntryList: editedMasterEntryList,
      editing: false,
      selectedEntry: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  }

  handleDeletingEntry = (id) => {
    const newMasterEntryList = this.state.masterEntryList.filter(entry => entry.id !== id);
    this.setState({
      masterEntryList: newMasterEntryList,
      selectedEntry: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditEntryForm entry={this.state.selectedEntry} onEditEntry={this.handleEditingEntryInList} />
      buttonText = "Return to Entry List";
    }
    else if (this.state.selectedEntry != null) {
      currentlyVisibleState =
        <EntryDetail
          entry={this.state.selectedEntry}
          onClickingDelete={this.handleDeletingEntry}
          onClickingEdit={this.handleEditClick}
        />
      buttonText = "Return to Entry List";
    } else if (this.state.counter === 0) {
      currentlyVisibleState =
        <EntryList
          entryList={this.state.masterEntryList}
          onEntrySelection={this.handleChangingSelectedEntry}
        />
      buttonText = "Add Entry!";
    } else if (this.state.counter === 1) {
      currentlyVisibleState =
        <NewEntryForm
          onNewEntryCreation={this.handleAddingNewEntryToList}
        />
      buttonText = "Return to List";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default EntryControl;