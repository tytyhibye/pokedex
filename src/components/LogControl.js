import React from "react";
import NewLogForm from "./NewLogForm";
import LogList from "./LogList";
import LogDetail from "./LogDetail";
import EditLogForm from './EditLogForm';


class LogControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterLogList: [],
      counter: 0,
      selectedLog: null,
      editing: false
    };
  }

  handleChangingSelectedLog = (id) => {
    const selectedLog = this.state.masterLogList.filter(log => log.id === id)[0];
    this.setState({ selectedLog: selectedLog });
  }

  handleAddingNewLogToList = (newLog) => {

    const newMasterLogList = this.state.masterLogList.concat(newLog);
    this.setState({
      masterLogList: newMasterLogList,
      counter: 0
    });
  }

  handleClick = () => {
    if (this.state.selectedLog != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedLog: null,
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

  handleEditingLogInList = (logToEdit) => {
    const editedMasterLogList = this.state.masterLogList
      .filter(log => log.id !== this.state.selectedLog.id)
      .concat(logToEdit);
    this.setState({
      masterLogList: editedMasterLogList,
      editing: false,
      selectedLog: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  }

  handleDeletingLog = (id) => {
    const newMasterLogList = this.state.masterLogList.filter(log => log.id !== id);
    this.setState({
      masterLogList: newMasterLogList,
      selectedLog: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditLogForm log={this.state.selectedLog} onEditLog={this.handleEditingLogInList} />
      buttonText = "Return to Log List";
    }
    else if (this.state.selectedLog != null) {
      currentlyVisibleState =
        <LogDetail
          log={this.state.selectedLog}
          onClickingDelete={this.handleDeletingLog}
          onClickingEdit={this.handleEditClick}
        />
      buttonText = "Return to Log List";
    } else if (this.state.counter === 0) {
      currentlyVisibleState =
        <LogList
          logList={this.state.masterLogList}
          onLogSelection={this.handleChangingSelectedLog}
        />
      buttonText = "Add Log!";
    } else if (this.state.counter === 1) {
      currentlyVisibleState =
        <NewLogForm
          onNewLogCreation={this.handleAddingNewLogToList}
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

export default LogControl;