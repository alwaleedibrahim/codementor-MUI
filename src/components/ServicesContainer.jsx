import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import ServiceBox from "./ServiceBox";

export default function ServicesContainer() {
  const [services] = useState([
    {
      img: "/src/assets/images/mentorship.jpg",
      title: "One-on-one live mentorships",
      items: [
        "Debug with help of an expert",
        "Personalize your leatning experience",
        "Get answers of complex problems",
      ],
      direction: "row",
      action: 'find a mentor'
    },
    {
      img: "/src/assets/images/freelance-job.png",
      title: "Project-based freelance work",
      items: [
        "Find experts for on-demand code review",
        "Build features for your existing project",
        "Turn your idea into an MVP",
      ],
      direction: "row-reverse",
      action: 'find a freelancer'
    },
    {
      img: "/src/assets/images/visit-arc (1).svg",
      title: "Hiring for a Bigger Project?",
      items: [
        "Debug with help of an expert",
        "Personalize your leatning experience",
        "Get answers of complex problems",
      ],
      direction: "row",
      action: 'Learn more'
    },
  ]);
  useEffect(() => {}, []);
  return (
    <>
      {services && (
        <Grid container spacing={3}>
          <Grid size={12}>
            <ServiceBox service={services[0]} />
          </Grid>
          <Grid size={12}>
            <ServiceBox service={services[1]} />
          </Grid>
          <Grid size={12}>
            <ServiceBox service={services[2]} />
          </Grid>
        </Grid>
      )}
    </>
  );
}
