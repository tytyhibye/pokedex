import React from 'react';
import Entry from './Entry';
import PropTypes from "prop-types";
import EntryDetail from './EntryDetail';



function EntryList(props) {
  return (
    <React.Fragment>
      {props.entryList.map((entry) =>
          <Entry
          whenEntryClicked={props.onEntrySelection}
          name={entry.name}
          type={entry.type}
          location={entry.location}
          level={entry.level}
          description={entry.description}
          id={entry.id}
          key={entry.id} />
      )}
    </React.Fragment>
  ); 
}

EntryList.propTypes = {
  entryList: PropTypes.array,
  onEntrySelection: PropTypes.func
};

export default EntryList;