"use client";

import { DescriptionList, DescriptionTerm, DescriptionDetails } from "./description-list";

export function Example() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">User Profile</h3>
        <DescriptionList>
          <DescriptionTerm>Name</DescriptionTerm>
          <DescriptionDetails>John Doe</DescriptionDetails>
          <DescriptionTerm>Email</DescriptionTerm>
          <DescriptionDetails>john@example.com</DescriptionDetails>
          <DescriptionTerm>Role</DescriptionTerm>
          <DescriptionDetails>Administrator</DescriptionDetails>
          <DescriptionTerm>Department</DescriptionTerm>
          <DescriptionDetails>Engineering</DescriptionDetails>
          <DescriptionTerm>Location</DescriptionTerm>
          <DescriptionDetails>San Francisco, CA</DescriptionDetails>
        </DescriptionList>
      </div>
    </div>
  );
}