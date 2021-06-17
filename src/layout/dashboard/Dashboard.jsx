import React, { useEffect } from "react";
import { useVersion } from "react-admin";
import { useMediaQuery } from "@material-ui/core";

import Welcome from "./Welcome";

const styles = {
  flex: { display: "flex" },
  flexColumn: { display: "flex", flexDirection: "column" },
  leftCol: { flex: 1, marginRight: "0.5em" },
  rightCol: { flex: 1, marginLeft: "0.5em" },
  singleCol: { marginTop: "1em", marginBottom: "1em" },
};

const Dashboard = () => {
  const version = useVersion();
  const isXSmall = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("md"));

  useEffect(() => {}, [version]); // eslint-disable-line react-hooks/exhaustive-deps

  return isXSmall ? (
    <div>
      <div>
        <Welcome />
      </div>
    </div>
  ) : isSmall ? (
    <div>
      <div style={styles.singleCol}>
        <Welcome />
      </div>
    </div>
  ) : (
    <>
      <Welcome />
    </>
  );
};

export default Dashboard;
