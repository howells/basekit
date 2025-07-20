"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/inputs/select";
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
    <Select value={value} onValueChange={onValueChange} disabled={disabled}>
      <SelectTrigger className={className}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(iconMap).map(([name, IconComponent]) => (
          <SelectItem key={name} value={name}>
            <div className="flex items-center gap-2">
              <IconComponent className="size-4 shrink-0" />
              <span>{name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
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
