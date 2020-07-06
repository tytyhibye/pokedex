import React from 'react';
import Entry from './Entry';
import PropTypes from "prop-types";
// import Accordion from '@material-ui/core/Accordion';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import EntryDetail from './EntryDetail';



function EntryList(props) {
  return (
    <React.Fragment>
      <h3>Pokemon List</h3>
      {Object.values(props.entryList).map(entry => {
        return <Entry
          whenEntryClicked={props.onEntrySelection}
          name={entry.name}
          pokemonType={entry.pokemonType}
          location={entry.location}
          level={entry.level}
          description={entry.description}
          id={entry.id}
          key={entry.id} />
      })}
    </React.Fragment>
  ); 
}

EntryList.propTypes = {
  entryList: PropTypes.object,
  onEntrySelection: PropTypes.func
};

export default EntryList;