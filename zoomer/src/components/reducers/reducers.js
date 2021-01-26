import AllEvents from '../AllEvents';

import { ADD_EVENTS } from '../actions/actionTypes';
import { REMOVE_EVENTS } from '../actions/actionTypes';
import { EMPTY_EVENTS } from '../actions/actionTypes';

const initialState = {
  addedEvents: [],
  count: 0
};

const EventsReducer = (state = initialState, action) => {
  switch (action.type) {

    if(action.type === ADD_EVENTS) {

         let addedEvent = state.events.find(event=> event.id === action.id)
          //check if the action id exists in the addedItems
         let existed_events= state.addedEvent.find(event=> action.id === event.id)
         
         if(existed_events) {
            addedEvent.quantity += 1 
             return{
                ...state,
                 count: state.count + addedEvent.id 
                  }
        }

        else{
            addedEvent.quantity = 1;
            //calculating the total
            let newCount = state.count + addedEvent.id 


    case ADD_EVENTS:
      return {
        ...state,
        events: state.events.map(event =>
          event.id === action.id ? {...event, selected: true} : event,
        ),
      };

    case REMOVE_EVENTS:
      return {
        ...state,
        events: state.events.map(event =>
          event.id === action.id
            ? {...event, selected: false, quantity: 1}
            : event,
        ),
      };

    case EMPTY_CART:
      return {
        ...state,
        events: state.events.map(event =>
          event.selected
            ? {...event, selected: false, quantity: 1}
            : event,
        ),
      };
    default:
      return state;
  }
};
export {EventsReducer};