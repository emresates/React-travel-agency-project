import React from "react";
import "../Destination/DestinationCss/style.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours give you the oppurtinity to see a lot, within a time frame.</p>

        <DestinationData
          className="first-destination"
          heading="Colosseum, Italy"
          text="The Colosseum  is an oval amphitheatre in the centre of the city of Rome, Italy,
           just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still 
           the largest standing amphitheatre in the world today, despite its age. Construction began under the emperor Vespasian
           in 72 and was completed in 80 AD under his successor and heir, Titus. Further modifications 
            were made during the reign of Domitian.The three emperors that were patrons of the work are known as the Flavian 
            dynasty, and the amphitheatre was named the Flavian Amphitheatre.
            The Colosseum is built of travertine limestone, tuff, and brick-faced concrete. 
            It could hold an estimated 50,000 to 80,000 spectators at various points in its history. It was used for gladiatorial contests and public spectacles including animal hunts, executions, re-enactments of 
            famous battles, and dramas based on Roman mythology, and briefly mock sea battles. The building ceased to be used for entertainment in the early medieval era. 
            It was later reused for such purposes as housing, workshops, quarters for a religious order, a fortress, a quarry, and a Christian shrine."
          img1="https://images.unsplash.com/photo-1555992828-ca4dbe41d294?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          img2="https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />

        <DestinationData
          className="first-destination-reverse"
          heading="Machu Picchu, Peru"
          text="Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter (7,970 ft) mountain ridge.
           It is located in the Machupicchu District within Urubamba Province above the Sacred Valley, which is 80 kilometers northwest of Cusco. 
           The Urubamba River flows past it, cutting through the Cordillera and creating a canyon with a tropical mountain climate.          
          The Incas, in contrast to the Maya, had no written language, and no European visited the site until the 19th century, so far as is known. 
          There are, therefore, no written records of the site while it was in use. The names of the buildings, their supposed uses, 
          and their inhabitants are all the product of modern archeologists, on the basis of physical evidence, including tombs at the site."
          img1="https://images.unsplash.com/photo-1600352572058-8b3183cf94ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          img2="https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />

        <DestinationData
          className="first-destination"
          heading="Taj Mahal, Agra"
          text="The Taj Mahal is an Islamic ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. 
          It was commissioned in 1631 by the Mughal emperor Shah Jahan (r. 1628–1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.
           The tomb is the centrepiece of a 17-hectare complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.
          Construction of the mausoleum was essentially completed in 1643, but work continued on other phases of the project for another 10 years. 
          The Taj Mahal complex is believed to have been completed in its entirety in 1653 at a cost estimated at the time to be around ₹32 million,
           which in 2020 would be approximately ₹70 billion (about US $1 billion). The construction project employed some 20,000 artisans under the guidance of a board of architects
            led by the court architect to the emperor, Ustad Ahmad Lahauri. Various types of symbolism have been employed in the Taj to reflect natural beauty and divinity."
          img1="https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          img2="https://images.unsplash.com/photo-1592635196078-9fdc757f27f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        />
      </div>
    </>
  );
};

export default Destination;
