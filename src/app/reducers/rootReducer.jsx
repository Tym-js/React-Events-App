import { combineReducers } from "redux"
import eventReducer from "../../features/event/eventReducer.jsx"

import { reducer as formReducer } from "redux-form"

const rootReducer = combineReducers({
  events: eventReducer,
  form: formReducer
})

export default rootReducer
