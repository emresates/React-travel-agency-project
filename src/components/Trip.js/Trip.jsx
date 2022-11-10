import "./TripCss/style.css";

import React from "react";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image="https://images.pexels.com/photos/62600/pexels-photo-62600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          heading="Trip in Paris"
          text="If you do too much it's going to lose its effectiveness. That easy. We touch the canvas, the canvas takes what it wants. Trees grow however makes them happy. We're not trying to teach you a thing to copy. We're just here to teach you a technique, then let you loose into the world. All you have to do is let your imagination go wild. We need a shadow side and a highlight side. If what you're doing doesn't make you happy - you're doing the wrong thing. That's a son of a gun of a cloud. I like to beat the brush. Isn't it fantastic that you can change your mind and create all these happy things? Trees live in your fan brush, but you have to scare them out. We'll make some happy little bushes here. Let your imagination be your guide."
        />
        <TripData
          image="https://images.pexels.com/photos/789555/pexels-photo-789555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          heading="Trip in Belgium"
          text="If you do too much it's going to lose its effectiveness. That easy. We touch the canvas, the canvas takes what it wants. Trees grow however makes them happy. We're not trying to teach you a thing to copy. We're just here to teach you a technique, then let you loose into the world. All you have to do is let your imagination go wild. We need a shadow side and a highlight side. If what you're doing doesn't make you happy - you're doing the wrong thing. That's a son of a gun of a cloud. I like to beat the brush. Isn't it fantastic that you can change your mind and create all these happy things? Trees live in your fan brush, but you have to scare them out. We'll make some happy little bushes here. Let your imagination be your guide."
        />
        <TripData
          image="https://images.pexels.com/photos/2233391/pexels-photo-2233391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          heading="Trip in Turkey"
          text="If you do too much it's going to lose its effectiveness. That easy. We touch the canvas, the canvas takes what it wants. Trees grow however makes them happy. We're not trying to teach you a thing to copy. We're just here to teach you a technique, then let you loose into the world. All you have to do is let your imagination go wild. We need a shadow side and a highlight side. If what you're doing doesn't make you happy - you're doing the wrong thing. That's a son of a gun of a cloud. I like to beat the brush. Isn't it fantastic that you can change your mind and create all these happy things? Trees live in your fan brush, but you have to scare them out. We'll make some happy little bushes here. Let your imagination be your guide."
        />
      </div>
    </div>
  );
}

export default Trip;
