"use client";

import { Download, Save } from "lucide-react";
import React from "react";
import { MenuIconWrapper, MenuItem, MenuLabel, MenuSeparator } from "../menu";
import { SplitButton } from "./split-button";

// Example component for preview system
export const SplitButtonExample = ({
  variant = "default",
  size = "default",
  rounded = false,
  buttonContent = "Save",
  disabled = false,
  isLoading = false,
  loadingText,
  leftIcon,
  dropdownIcon,
  ...props
}: {
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost";
  size?: "default" | "sm";
  rounded?: boolean;
  buttonContent?: string;
  disabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  leftIcon?: React.ComponentType<{ className?: string }>;
  dropdownIcon?: React.ComponentType<{ className?: string }>;
  [key: string]: unknown;
}) => {
  const handleButtonClick = () => {
    console.log("Main button clicked:", buttonContent);
  };

  const handleMenuItemClick = (action: string) => {
    console.log("Menu item clicked:", action);
  };

  return (
    <SplitButton
      variant={variant}
      size={size}
      rounded={rounded}
      buttonContent={buttonContent}
      disabled={disabled}
      isLoading={isLoading}
      loadingText={loadingText}
      leftIcon={leftIcon}
      dropdownIcon={dropdownIcon}
      onButtonClick={handleButtonClick}
      {...props}
    >
      <MenuLabel>Quick Actions</MenuLabel>
      <MenuItem onClick={() => handleMenuItemClick("Save as Draft")}>
        <MenuIconWrapper>
          <Save className="size-4" />
        </MenuIconWrapper>
        Save as Draft
      </MenuItem>
      <MenuItem onClick={() => handleMenuItemClick("Save as Template")}>
        <MenuIconWrapper>
          <Save className="size-4" />
        </MenuIconWrapper>
        Save as Template
      </MenuItem>
      <MenuSeparator />
      <MenuItem onClick={() => handleMenuItemClick("Export")}>
        <MenuIconWrapper>
          <Download className="size-4" />
        </MenuIconWrapper>
        Export
      </MenuItem>
      <MenuItem onClick={() => handleMenuItemClick("Preview")}>
        Preview
      </MenuItem>
    </SplitButton>
  );
};
