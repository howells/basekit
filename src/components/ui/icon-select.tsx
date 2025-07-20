"use client";

import { Combobox, ComboboxOption } from "@/components/ui/combobox";
import { cx } from "@/lib/utils";
import {
  AlertCircle,
  Archive,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Battery,
  Bell,
  Bookmark,
  Calendar,
  Camera,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clock,
  Cloud,
  CloudRain,
  Copy,
  Download,
  Droplets,
  Edit,
  ExternalLink,
  Eye,
  EyeOff,
  Filter,
  Flag,
  Grid,
  Heart,
  HelpCircle,
  Home,
  Info,
  Key,
  List,
  Lock,
  Mail,
  MapPin,
  Maximize,
  Menu,
  Minimize,
  Minus,
  Moon,
  MoreHorizontal,
  MoreVertical,
  Move,
  Pause,
  Phone,
  Play,
  Plus,
  RefreshCw,
  Repeat,
  RotateCcw,
  Save,
  Search,
  Settings,
  Share,
  Shield,
  Shuffle,
  SkipBack,
  SkipForward,
  SortAsc,
  SortDesc,
  Star,
  Sun,
  Tag,
  Thermometer,
  Trash2,
  Unlock,
  Upload,
  User,
  Volume2,
  VolumeX,
  Wifi,
  Wind,
  X,
  Zap,
} from "lucide-react";
import React from "react";

// Type for Lucide icon components
type LucideIcon = React.ComponentType<{ size?: number; className?: string }>;

// Manually curated list of commonly used icons
const iconMap: Record<string, LucideIcon> = {
  Check,
  X,
  Star,
  Heart,
  Plus,
  Minus,
  Search,
  Home,
  User,
  Settings,
  Mail,
  Phone,
  Calendar,
  Clock,
  MapPin,
  Camera,
  Edit,
  Trash2,
  Download,
  Upload,
  Share,
  Copy,
  Save,
  Archive,
  Bookmark,
  Flag,
  Tag,
  Bell,
  AlertCircle,
  Info,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  ExternalLink,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Shield,
  Key,
  Zap,
  Wifi,
  Battery,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  RefreshCw,
  RotateCcw,
  MoreHorizontal,
  MoreVertical,
  Menu,
  Grid,
  List,
  Filter,
  SortAsc,
  SortDesc,
  Maximize,
  Minimize,
  Move,
  Sun,
  Moon,
  Cloud,
  CloudRain,
  Thermometer,
  Droplets,
  Wind,
};

// Convert icon map to combobox options with icons
const iconOptions: ComboboxOption[] = Object.entries(iconMap).map(
  ([name, IconComponent]) => ({
    value: name,
    label: name,
    leftIcon: IconComponent,
  })
);

export interface IconSelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function IconSelect({
  value,
  onValueChange,
  placeholder = "Select an icon...",
  disabled = false,
  className,
}: IconSelectProps) {
  return (
    <Combobox
      options={iconOptions}
      value={value || ""}
      onValueChange={onValueChange}
      placeholder={placeholder}
      searchPlaceholder="Search icons..."
      emptyMessage="No icons found."
      disabled={disabled}
      className={className}
      width="w-full"
      buttonClassName="justify-start"
    />
  );
}

// Hook for easier usage
export function useIconSelect(initialValue?: string) {
  const [value, setValue] = React.useState(initialValue || "");

  return {
    value,
    setValue,
    IconComponent: value ? iconMap[value] : null,
  };
}

// Utility to get icon component by name
export function getIconByName(name: string): LucideIcon | null {
  return iconMap[name] || null;
}

// Export all available icon names for reference
export const availableIcons = Object.keys(iconMap);
