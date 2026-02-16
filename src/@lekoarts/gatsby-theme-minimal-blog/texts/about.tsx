import React from "react";

const About: React.FC = () => {
  return (
    <div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <img
          src="https://avatars.githubusercontent.com/u/13424219?v=4"
          alt="Jake's profile picture"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            flexShrink: 0,
          }}
        />
        <div
          style={{
            fontSize: "1.5rem",
            lineHeight: "1.6",
          }}
        >
          I'm Jake! I've been traveling for the past year and currently live in
          Brooklyn, NY. I currently am building{" "}
          <a
            href="https://www.foodisgood.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fig
          </a>{" "}
          where I'm a co-founder and CTO. I also am a fellow in the Aspen
          Institute's Food Fellowship program. I'm passionate about building
          things that help people. In particular, I want to build a better food
          system so that all people can live healthy, enjoyable lives.
        </div>
      </div>
    </div>
  );
};

export default About;
