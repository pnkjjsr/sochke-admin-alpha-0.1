import * as React from "react";
import { Box, Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import publishArticleImage from "./welcome_illustration.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    background:
      theme.palette.type === "dark"
        ? "#535353"
        : `linear-gradient(to right, #8975fb 0%, #746be7 35%), linear-gradient(to bottom, #8975fb 0%, #6f4ceb 50%), #6f4ceb`,

    color: "#fff",
    padding: 20,
    marginTop: theme.spacing(2),
    marginBottom: "1em",
  },
  media: {
    background: `url(${publishArticleImage}) top right / cover`,
    marginLeft: "auto",
  },
  actions: {
    [theme.breakpoints.down("md")]: {
      padding: 0,
      flexWrap: "wrap",
      "& a": {
        marginTop: "1em",
        marginLeft: "0!important",
        marginRight: "1em",
      },
    },
  },
}));

const Welcome = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Box display="flex">
        <Box flex="1">
          <Typography variant="h5" component="h2" gutterBottom>
            Welcome to the Sochke admin.
          </Typography>
          <Box maxWidth="40em">
            <Typography variant="body1" component="p" gutterBottom>
              Please create/update/delete carefully, you are working on
              Production data.
            </Typography>
          </Box>
        </Box>

        <Box
          display={{ xs: "none", sm: "none", md: "block" }}
          className={classes.media}
          width="16em"
          height="9em"
          overflow="hidden"
        />
      </Box>
    </Card>
  );
};

export default Welcome;
