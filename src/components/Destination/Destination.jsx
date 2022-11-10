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
          heading="Taal Volcano, Batangas"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, reiciendis! Corrupti, et iure corporis ipsa architecto vero tenetur quam pariatur inventore quo esse id quaerat quisquam ullam est cupiditate quibusdam soluta veniam possimus ut nihil? Eos ex culpa ipsum, maiores nihil dolorem labore nisi saepe cupiditate molestiae perferendis doloribus architecto odio fuga quasi sed? Pariatur, tenetur exercitationem vel aspernatur deleniti, nemo error blanditiis tempora quaerat repudiandae amet quibusdam recusandae doloribus rem id unde dolorum facilis voluptatum soluta non dolorem doloremque perspiciatis? Beatae impedit culpa, quasi non iusto in explicabo praesentium officia, nemo labore aut accusantium, deleniti placeat blanditiis! Libero, debitis!"
          img1="https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          img2="https://images.unsplash.com/photo-1524842495237-6abc737eae1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=746&q=80"
        />

        <DestinationData
          className="first-destination-reverse"
          heading="Mt. Daguldul, Batangas"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, reiciendis! Corrupti, et iure corporis ipsa architecto vero tenetur quam pariatur inventore quo esse id quaerat quisquam ullam est cupiditate quibusdam soluta veniam possimus ut nihil? Eos ex culpa ipsum, maiores nihil dolorem labore nisi saepe cupiditate molestiae perferendis doloribus architecto odio fuga quasi sed? Pariatur, tenetur exercitationem vel aspernatur deleniti, nemo error blanditiis tempora quaerat repudiandae amet quibusdam recusandae doloribus rem id unde dolorum facilis voluptatum soluta non dolorem doloremque perspiciatis? Beatae impedit culpa, quasi non iusto in explicabo praesentium officia, nemo labore aut accusantium, deleniti placeat blanditiis! Libero, debitis!"
          img1="https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          img2="https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />

        <DestinationData
          className="first-destination"
          heading="Mt. Daguldul, Batangas"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, reiciendis! Corrupti, et iure corporis ipsa architecto vero tenetur quam pariatur inventore quo esse id quaerat quisquam ullam est cupiditate quibusdam soluta veniam possimus ut nihil? Eos ex culpa ipsum, maiores nihil dolorem labore nisi saepe cupiditate molestiae perferendis doloribus architecto odio fuga quasi sed? Pariatur, tenetur exercitationem vel aspernatur deleniti, nemo error blanditiis tempora quaerat repudiandae amet quibusdam recusandae doloribus rem id unde dolorum facilis voluptatum soluta non dolorem doloremque perspiciatis? Beatae impedit culpa, quasi non iusto in explicabo praesentium officia, nemo labore aut accusantium, deleniti placeat blanditiis! Libero, debitis!"
          img1="https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          img2="https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />

      </div>
    </>
  );
};

export default Destination;
