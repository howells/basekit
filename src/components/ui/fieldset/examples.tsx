import React from "react";
import { Fieldset, FieldsetLegend } from "./fieldset";
import { Field, FieldLabel } from "../field/field";
import { Input } from "../input/input";

// Default fieldset
export const DefaultExample = () => (
  <Fieldset>
    <FieldsetLegend>Personal Information</FieldsetLegend>
    <div className="space-y-4">
      <Field>
        <FieldLabel>First Name</FieldLabel>
        <Input />
      </Field>
      <Field>
        <FieldLabel>Last Name</FieldLabel>
        <Input />
      </Field>
    </div>
  </Fieldset>
);