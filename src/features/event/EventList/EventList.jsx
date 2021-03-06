import React from "react"
import EventListItem from "./EventListItem.jsx"

class EventList extends React.Component {
  render() {
    const { events, deleteEvent } = this.props
    return (
      <div>
        {events.map(event => (
          <EventListItem
            key={event.id}
            event={event}
            deleteEvent={deleteEvent}
          />
        ))}
      </div>
    )
  }
}

export default EventList
