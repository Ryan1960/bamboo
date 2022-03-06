import { Grid } from "@material-ui/core";
import React from "react";
import "./ourService.css";

export function OurService({ services }) {
  return (
    <div>
      <Grid container className="selc_100">
        {services.map((service) => (
          <Grid item xs={4}>
            <div className="secD">
              <img src={service.source1} className="secDP" />
            </div>
            <div>
              <img src={service.zi} className="secDP" />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
