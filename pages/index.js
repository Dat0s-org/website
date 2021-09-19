import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';
import Banner from '../components/banner/banner';
import AboutUs from '../components/about-us/about-us';
import Footer from '../components/footer/footer';

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  
  return (
    <div>
      <Banner />
      <AboutUs />
      <EventList items={featuredEvents}/>
      <Footer />
    </div>
  );
}

export default HomePage;
