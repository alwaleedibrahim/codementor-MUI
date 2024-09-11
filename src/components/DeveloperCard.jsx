import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import JavascriptIcon from "@mui/icons-material/Javascript";
import TerminalIcon from "@mui/icons-material/Terminal";
import AndroidIcon from "@mui/icons-material/Android";
import PropTypes from "prop-types";

export default function DeveloperCard(props) {
  return (
    <>
      <Card
        sx={{ display: "flex", px: 3, py: 1.5, width: "300px", mx: "auto" }}
      >
        <CardMedia
          component="img"
          image={`https://avatar.iran.liara.run/public/${props.developer.gender}?username=${props.developer.name}`}
          sx={{ borderRadius: "50%", width: "100px", margin: "auto" }}
          height={"100px"}
        ></CardMedia>
        <CardContent sx={{ pr: 0 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {props.developer.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "gray" }}>
            {props.developer.jobTitle}
          </Typography>
          <Box sx={{ color: "gray" }}>
            <JavascriptIcon sx={{ mx: 0.7 }} />
            <TerminalIcon sx={{ mx: 0.7 }} />
            <AndroidIcon sx={{ mx: 0.7 }} />
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

DeveloperCard.propTypes = {
  developer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
  }),
};
