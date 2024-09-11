import { Box, Button, Typography } from "@mui/material";

export default function FindDevelopers() {
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
          Find developers for live mentorship & freelance projects
        </Typography>
        <Button
          variant="contained"
          color="warning"
          sx={{ py: 1.7, px: 3, my: 3 }}
        >
          get help now
        </Button>
      </Box>
      <Box
        sx={{
          background: "linear-gradient(#005672 66%, white 34%) no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="/src/assets/images/hero-l.png"
          style={{ width: 700, maxWidth: "100%" }}
          //   background:
        />
      </Box>
    </>
  );
}
