import EventItem from "./event-item";
import classes from './event-list.module.css';

function EventList(props) {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          id={event.id}
          key={event.id}
          title={event.title}
          image={event.image}
          date={event.date}
          time={event.time}
          location={event.location}
          description={event.description}
        />
      ))}
    </ul>
  );
}

export default EventList;
