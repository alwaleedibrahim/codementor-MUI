import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import DeveloperCard from "./DeveloperCard";
import { useState } from "react";

export default function Connect() {
  const [developers] = useState([
    { name: "Hoda Hassan", jobTitle: "Backend Developer", gender: "girl" },
    { name: "Sara El-Sayed", jobTitle: "Software Engineer", gender: "girl" },
    { name: "Khaled Mahmoud", jobTitle: "Mobile App Developer", gender: "boy" },
    { name: "Omar Ali", jobTitle: "Full Stack Developer", gender: "boy" },
    { name: "Ahmed Youssef", jobTitle: "Frontend Developer", gender: "boy" },
    { name: "Fatma Ibrahim", jobTitle: "DevOps Engineer", gender: "girl" },
  ]);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#005672",
          px: 10,
          pt: 20,
          pb: 5,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bolder",
            color: "white",
            px: { xs: 0, lg: 25 },
            textAlign: "center",
          }}
        >
          Connect with <br /> 12000+ top developers any time
        </Typography>
        <Grid container spacing={4} sx={{ my: 5 }}>
          <Grid size={{ xs: 12, lg: 4 }} sx={{ mt: 4 }}>
            <Grid size={12} sx={{ mb: 2 }}>
              <DeveloperCard developer={developers[0]} />
            </Grid>
            <Grid size={12}>
              <DeveloperCard developer={developers[1]} />
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, lg: 4 }}>
            <Grid size={12} sx={{ mb: 2 }}>
              <DeveloperCard developer={developers[2]} />
            </Grid>
            <Grid size={12}>
              <DeveloperCard developer={developers[3]} />
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, lg: 4 }} sx={{ mt: 4 }}>
            <Grid size={12} sx={{ mb: 2 }}>
              <DeveloperCard developer={developers[4]} />
            </Grid>
            <Grid size={12}>
              <DeveloperCard developer={developers[5]} />
            </Grid>
          </Grid>
        </Grid>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bolder",
            color: "white",
            px: { xs: 0, lg: 25 },
            textAlign: "center",
          }}
        >
          Start working with our developers
        </Typography>
        <Button
          variant="contained"
          color="warning"
          sx={{ py: 1.7, px: 3, my: 3 }}
        >
          get help now
        </Button>
      </Box>
    </>
  );
}
