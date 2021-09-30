import React from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";

//install
//npm install @material-ui/core@next
//npm install @material-ui/core
// npm install @emotion/react

const Review = ({ checkoutToken }) => (
  <>
    <Typography variant="h6" gutterBottom>
      Order summary
    </Typography>
    <List disablePadding>
      {checkoutToken.live.line_items.map((product) => (
        <ListItem style={{ padding: "5px 0" }} key={product.name}>
          <ListItemText
            primary={product.name}
            secondary={`Quantity: ${product.quantity}`}
          />
          <Typography variant="body2">
            {product.line_total.formatted_with_symbol}
          </Typography>
        </ListItem>
      ))}
      <ListItem style={{ padding: "5px 0" }}>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {checkoutToken.live.subtotal.formatted_with_symbol}
        </Typography>
      </ListItem>
    </List>
  </>
);

export default Review;

//source: https://www.youtube.com/watch?v=377AQ0y6LPA&t=10204s
