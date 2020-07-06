import React from "react";
import NewEntryForm from "./NewEntryForm";
import EntryList from "./EntryList";
import EntryDetail from "./EntryDetail";
import EditEntryForm from './EditEntryForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";


class EntryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      counter: 0,
      selectedEntry: null,
      editing: false
    };
  }

  handleChangingSelectedEntry = (id) => {
    const selectedEntry = this.props.masterEntryList[id];
    this.setState({ selectedEntry: selectedEntry });
  }

  handleAddingNewEntryToList = (newEntry) => {
    const { dispatch } = this.props;
    const { name, pokemonType, level, location, description, id} = newEntry;
    const action = {
      type: 'ADD_POKEMON',
      id: id,
      name: name,
      pokemonType: pokemonType,
      level: level,
      location: location,
      description: description,
    }
    dispatch(action);
    this.setState({ formVisibleOnPage: false, counter: 0 });
  }
      
   

      // masterEntryList: newMasterEntryList,
      // counter: 0
 
  // decreaseCount = () => {
  //   if(this.state.count <=10){

  //   }
  //   this.setState({ count: this.state.count -1 });
  // }
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
    const { dispatch } = this.props;
    const { id, name, location, level, description, pokemonType } = entryToEdit;
    const action = {
      type: 'ADD_POKEMON',
      id: id,
      name: name,
      pokemonType: pokemonType,
      level: level,
      location: location,
      description: description,
    }
    dispatch(action);
    this.setState({
      editing: false, 
      selectedEntry: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  }

  handleDeletingEntry = (id) => {
    const { dispatch } = this.props;
    const action = {
    type: 'DELETE_POKEMON',
    id: id
    }
    dispatch(action);
    this.setState({selectedEntry: null});
  };

  render() { 
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) { // possible prop needed
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
          entryList={this.props.masterEntryList}
          onEntrySelection={this.handleChangingSelectedEntry}
          // onClickingDecrement={this.decreaseCount}
        />
      buttonText = "Add New Pokemon!";
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

EntryControl.propTypes = {
  masterTicketList: PropTypes.object
};

 const mapStateToProps = state => {
   return {
     masterEntryList: state
   }
 } 

EntryControl = connect(mapStateToProps)(EntryControl);

export default EntryControl;