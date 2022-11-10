import "./TripCss/style.css";

import React from "react";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <div className="tripcard">
        <TripData
          image="https://images.unsplash.com/photo-1556960146-ba4d5f5fa2f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          heading="Trip in Tanzania"
          text="A safari is an overland journey to observe wild animals, especially in eastern or southern Africa.
           The so-called 'Big Five' game animals of Africa – lion, leopard, rhinoceros, elephant, and Cape buffalo – particularly form an important part of the safari market, 
           both for wildlife viewing and big-game hunting.. In 1836, William Cornwallis Harris led an expedition purely to observe and record wildlife and landscapes.
            Harris established the safari style of journey, starting with a not too strenuous rising at first light, an energetic day walking, an afternoon rest then concluding with a 
            formal dinner and telling stories in the evening over drinks and tobacco. The hunting aspect traditionally associated with the safari is said to have its origins in the 
            early 17th century in the region of Évora, Alentejo, where villagers got together to hunt wild boar and reclaim land for farming."
        />
        <TripData
          image="https://images.unsplash.com/photo-1538168407380-1d74b45cf8ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          heading="Trip in Sydney"
          text="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most 
          famous and distinctive buildings and a masterpiece of 20th century architecture.Designed by Danish architect Jørn Utzon, but completed by an Australian architectural team headed by Peter Hall,
           the building was formally opened by Queen Elizabeth II on 20 October 1973 after a gestation beginning with Utzon's 1957 selection as winner of an 
           international design competition. The Government of New South Wales, led by the premier, Joseph Cahill, authorised work to begin in 1958 with Utzon directing construction. 
           The government's decision to build Utzon's design is often overshadowed by circumstances that followed, including cost and scheduling overruns as well as the architect's ultimate resignation."
        />
        <TripData
          image="https://images.unsplash.com/photo-1510253687831-0f982d7862fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
          heading="Trip in Turkey"
          text="Cappadocia or Capadocia is a historical region in Central Anatolia, Turkey. It largely is in the provinces Nevşehir, Kayseri, Aksaray, Kırşehir, Sivas and Niğde.
          According to Herodotus, in the time of the Ionian Revolt (499 BC), the Cappadocians were reported as occupying a region from Mount Taurus to the vicinity of the Euxine (Black Sea). 
          Cappadocia, in this sense, was bounded in the south by the chain of the Taurus Mountains that separate it from Cilicia, to the east by the upper Euphrates, to the north by Pontus,
           and to the west by Lycaonia and eastern Galatia.The name, traditionally used in Christian sources throughout history, continues in use as an international tourism concept to define 
           a region of exceptional natural wonders, in particular characterized by fairy chimneys and a unique historical and cultural heritage."
        />
      </div>
    </div>
  );
}

export default Trip;
