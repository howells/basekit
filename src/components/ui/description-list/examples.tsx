import React from "react";
import { DescriptionList, DescriptionTerm, DescriptionDetails } from "./description-list";

// Default description list
export const DefaultExample = () => (
  <DescriptionList>
    <React.Fragment>
      <DescriptionTerm>Name</DescriptionTerm>
      <DescriptionDetails>John Doe</DescriptionDetails>
    </React.Fragment>
    <React.Fragment>
      <DescriptionTerm>Email</DescriptionTerm>
      <DescriptionDetails>john@example.com</DescriptionDetails>
    </React.Fragment>
  </DescriptionList>
);