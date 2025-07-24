import React from "react";
import { Avatar } from "./avatar";

// Default avatar with initials
export const DefaultExample = () => <Avatar initials="DH" alt="John Doe" />;

// Avatar with image
export const WithImageExample = () => (
  <Avatar
    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face"
    alt="Profile picture"
  />
);

// Square avatar
export const SquareExample = () => (
  <Avatar
    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
    square
    alt="Square avatar"
  />
);

// Avatar with different initials
export const InitialsExample = () => (
  <div className="flex items-center gap-4">
    <Avatar initials="AB" alt="Alice Brown" />
    <Avatar initials="CD" alt="Charlie Davis" />
    <Avatar initials="EF" alt="Emma Fisher" />
  </div>
);

// Avatar group
export const GroupExample = () => (
  <div className="flex -space-x-2">
    <Avatar
      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face"
      alt="User 1"
      className="ring-2 ring-white dark:ring-zinc-950"
    />
    <Avatar
      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
      alt="User 2"
      className="ring-2 ring-white dark:ring-zinc-950"
    />
    <Avatar
      src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face"
      alt="User 3"
      className="ring-2 ring-white dark:ring-zinc-950"
    />
    <Avatar
      initials="+5"
      alt="5 more users"
      className="ring-2 ring-white dark:ring-zinc-950"
    />
  </div>
);

// Avatar with loading state
export const LoadingExample = () => <Avatar src="" alt="Loading avatar" />;

// Different sizes (if supported by component)
export const SizesExample = () => (
  <div className="flex items-center gap-4">
    <Avatar initials="SM" alt="Small" className="h-8 w-8 text-xs" />
    <Avatar initials="MD" alt="Medium" className="h-10 w-10" />
    <Avatar initials="LG" alt="Large" className="h-12 w-12 text-lg" />
    <Avatar initials="XL" alt="Extra Large" className="h-16 w-16 text-xl" />
  </div>
);

// Avatar with custom styling
export const CustomStyleExample = () => (
  <Avatar
    initials="CS"
    alt="Custom style"
    className="bg-gradient-to-r from-purple-400 to-pink-600 text-white"
  />
);
