import EventList from '../../components/events/event-list';
import {getAllEvents} from '../../dummy-data';
import Footer from '../../components/footer/footer';

function AllEventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <EventList items={events} />
      <Footer/>
    </div>
  );
}

export default AllEventsPage;
