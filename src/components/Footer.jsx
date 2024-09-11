import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <Box
        sx={{ backgroundColor: "#000", color: "#fff", px: 17, pt: 7, pb: 2 }}
        component={"footer"}
      >
        <Grid container>
          <Grid size={{ xs: 12, lg: 4 }}>
            <Typography variant="h5">PRODUCTS</Typography>
            <Typography variant="h6">Codementor</Typography>
            <Typography variant="body1">
              Find a mentor to help you in real time
            </Typography>
            <Typography variant="h6"> Codementor Events</Typography>
            <Typography variant="body1">
              Attend and host virtual events for developers
            </Typography>
            <Typography variant="h6"> DevProjects </Typography>
            <Typography variant="body1">
              Learn programming by building projects
            </Typography>
            <Typography variant="h6"> Arc</Typography>
            <Typography variant="body1">
              Helping employers find talent for remote jobs
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, lg: 8 }} container>
            <Grid size={12}>
              <Typography variant="h5">PAGES</Typography>
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <List>
                <ListItem>
                  <ListItemText>Become a Codementor</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>How It Works</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Find Mentors</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Find Freelancers</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Find a Tutor</ListItemText>
                </ListItem>
              </List>
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <List>
                <ListItem>
                  <ListItemText>Community</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Blog</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Codementor For Students</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Codementor For Teams</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Code Review</ListItemText>
                </ListItem>
              </List>
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <List>
                <ListItem>
                  <ListItemText>Pair Programming</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Best Web Design Software</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Coding Starter Kit</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Codementor Reviews</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Best Language to Learn</ListItemText>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Grid container sx={{ borderTop: "2px solid #555" }}>
          <Grid size={{ xs: 12, lg: 4 }} sx={{ margin: "auto" }}>
            <Typography variant="body1">
              &copy; Copyright 2024 Codementor
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, lg: 8 }}>
            <List
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", lg: 'row' },
              }}
            >
              <Box sx={{ display: "flex", flexWrap: 'wrap' }}>
                <ListItem>Cookie Policy</ListItem>
                <ListItem>Privacy Policy</ListItem>
                <ListItem>Terms of Service</ListItem>
                <ListItem>Careers</ListItem>
                <ListItem>Help Center</ListItem>
              </Box>
              <Box sx={{ display: "flex" }}>
                <ListItem className="footer-icon-li">
                  <FacebookIcon />
                </ListItem>
                <ListItem className="footer-icon-li">
                  <XIcon />
                </ListItem>
                <ListItem className="footer-icon-li">
                  <LinkedInIcon />
                </ListItem>
              </Box>
            </List>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
