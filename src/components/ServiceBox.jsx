import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import PropTypes from "prop-types";

export default function ServiceBox(props) {
  const { service } = props;
  return (
    <Grid container sx={{ flexDirection: service.direction, px: 15 }}>
      <Grid size={{ md: 12, lg: 6 }}>
        <img src={service.img} style={{ maxWidth: "100%" }} />
      </Grid>
      <Grid size={{ md: 12, lg: 6 }} sx={{ py: 15 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          {service.title}
        </Typography>
        <List>
          {service.items.map((item) => {
            return (
              <ListItem key={item}>
                <ListItemIcon>
                  <KeyboardDoubleArrowRightIcon />
                </ListItemIcon>
                {item}
              </ListItem>
            );
          })}
        </List>
        <Button
          variant="contained"
          color="warning"
          sx={{ py: 1.7, px: 3, my: 3 }}
        >
          {service.action}
        </Button>
      </Grid>
    </Grid>
  );
}

ServiceBox.propTypes = {
  service: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    direction: PropTypes.oneOf(["row", "row-reverse"]).isRequired,
    action: PropTypes.string.isRequired,
  }).isRequired,
};
