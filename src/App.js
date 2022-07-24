import './App.css';
import Navbar from "./components/Navbar";
import TravelCard from './components/TravelCard';
import data from './data.js'

export default function App() {
  const travelCard=data.map(place=>{
    return(<TravelCard
    title={place.title}
    location={place.location}
    googleMapsUrl={place.googleMapsUrl}
    startDate={place.startDate}
    endDate={place.endDate}
    description={place.description}
    imageUrl={place.imageUrl}

  />
      )})
    
  return (
    <div>
      <Navbar/>
     {travelCard}
     
    </div>
  );
}

 
