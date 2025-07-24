/**
 * Icon Select Component
 *
 * A searchable icon picker component built on Combobox for selecting from
 * a curated collection of Lucide React icons. Provides visual icon previews,
 * search functionality, and easy integration with forms and settings.
 *
 * Features:
 * - Curated collection of 75+ commonly used icons
 * - Searchable dropdown with icon previews
 * - Type-safe icon selection
 * - Custom hook for state management
 * - Utility functions for icon retrieval
 * - Built on Combobox for consistent UX
 *
 * @example
 * ```tsx
 * // Basic icon select
 * <IconSelect
 *   value={selectedIcon}
 *   onValueChange={setSelectedIcon}
 *   placeholder="Choose an icon..."
 * />
 *
 * // With custom hook
 * function MyComponent() {
 *   const { value, setValue, IconComponent } = useIconSelect('Star');
 *
 *   return (
 *     <div>
 *       <IconSelect value={value} onValueChange={setValue} />
 *       {IconComponent && <IconComponent className="w-6 h-6" />}
 *     </div>
 *   );
 * }
 *
 * // Form integration
 * <form>
 *   <label htmlFor="icon">Button Icon</label>
 *   <IconSelect
 *     value={formData.icon}
 *     onValueChange={(icon) => setFormData({...formData, icon})}
 *     placeholder="Select button icon"
 *   />
 * </form>
 *
 * // Settings panel
 * <div className="space-y-4">
 *   <div>
 *     <label>Notification Icon</label>
 *     <IconSelect
 *       value={settings.notificationIcon}
 *       onValueChange={(icon) => updateSetting('notificationIcon', icon)}
 *     />
 *   </div>
 *
 *   <div>
 *     <label>Status Icon</label>
 *     <IconSelect
 *       value={settings.statusIcon}
 *       onValueChange={(icon) => updateSetting('statusIcon', icon)}
 *       disabled={!isAdmin}
 *     />
 *   </div>
 * </div>
 *
 * // Dynamic icon rendering
 * function IconDisplay({ iconName }: { iconName: string }) {
 *   const IconComponent = getIconByName(iconName);
 *
 *   return IconComponent ? (
 *     <IconComponent className="w-8 h-8 text-blue-500" />
 *   ) : (
 *     <div className="w-8 h-8 bg-gray-200 rounded" />
 *   );
 * }
 * ```
 */

"use client";

import { Combobox, ComboboxOption } from "@/components/ui/combobox";
import { config } from "@/lib/config";
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

/**
 * Type definition for Lucide React icon components.
 *
 * Defines the interface for Lucide icon components with common props.
 */
type LucideIcon = React.ComponentType<{
  /** Icon size in pixels */
  size?: number;
  /** CSS classes for styling */
  className?: string;
  /** Stroke width for consistent styling */
  strokeWidth?: number;
}>;

/**
 * Curated collection of commonly used Lucide React icons.
 *
 * Hand-picked selection of 75+ icons covering common use cases
 * including navigation, actions, status, media, and system icons.
 */
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

/**
 * Pre-formatted options for the combobox component.
 *
 * Converts the icon map into ComboboxOption format with icon previews.
 */
const iconOptions: ComboboxOption[] = Object.entries(iconMap).map(
  ([name, IconComponent]) => ({
    value: name,
    label: name,
    leftIcon: IconComponent,
  })
);

/**
 * Props for the IconSelect component.
 *
 * Configuration for icon selection behavior and appearance.
 */
export interface IconSelectProps {
  /** Currently selected icon name */
  value?: string;
  /** Callback when icon selection changes */
  onValueChange?: (value: string) => void;
  /** Placeholder text when no icon is selected */
  placeholder?: string;
  /** Whether the select is disabled */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Stroke width for icons (defaults to 1) */
  iconStrokeWidth?: number;
}

/**
 * Icon selection component with searchable dropdown interface.
 *
 * Provides a user-friendly icon picker built on the Combobox component.
 * Features visual icon previews, search functionality, and type-safe selection
 * from a curated collection of 75+ Lucide React icons.
 *
 * @param value - Currently selected icon name
 * @param onValueChange - Callback when icon selection changes
 * @param placeholder - Placeholder text when no icon is selected
 * @param disabled - Whether the select is disabled
 * @param className - Additional CSS classes
 *
 * @component
 * @example
 * ```tsx
 * // Basic icon select
 * <IconSelect
 *   value={selectedIcon}
 *   onValueChange={setSelectedIcon}
 *   placeholder="Choose an icon..."
 * />
 *
 * // Disabled state
 * <IconSelect
 *   value="Star"
 *   disabled
 *   placeholder="Icon locked"
 * />
 * ```
 */
export function IconSelect({
  value,
  onValueChange,
  placeholder = "Select an icon...",
  disabled = false,
  className,
  iconStrokeWidth = config.getIconStrokeWidth(),
}: IconSelectProps) {
  const renderItem = (option: ComboboxOption) => {
    const IconComponent = option.leftIcon;
    const isSelected = value === option.value;

    return (
      <>
        <div className="flex items-center gap-2 flex-1">
          {IconComponent && (
            <IconComponent
              className="size-4 shrink-0"
              strokeWidth={iconStrokeWidth}
            />
          )}
          <span className="truncate">{option.label}</span>
        </div>
        <Check
          className={cx(
            "ml-2 h-4 w-4 shrink-0",
            isSelected ? "opacity-100" : "opacity-0"
          )}
        />
      </>
    );
  };

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
      buttonClassName="justify-start"
      renderItem={renderItem}
      iconStrokeWidth={iconStrokeWidth}
    />
  );
}

/**
 * Custom hook for managing icon selection state.
 *
 * Provides convenient state management for icon selection with automatic
 * icon component resolution. Returns the current value, setter function,
 * and the resolved icon component for rendering.
 *
 * @param initialValue - Optional initial icon name
 * @returns Object with value, setValue, and IconComponent
 *
 * @hook
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { value, setValue, IconComponent } = useIconSelect('Star');
 *
 *   return (
 *     <div>
 *       <IconSelect value={value} onValueChange={setValue} />
 *       {IconComponent && (
 *         <IconComponent className="w-6 h-6 text-blue-500" />
 *       )}
 *     </div>
 *   );
 * }
 *
 * // With dynamic icon display
 * function IconPreview() {
 *   const { value, setValue, IconComponent } = useIconSelect();
 *
 *   return (
 *     <div className="space-y-4">
 *       <IconSelect value={value} onValueChange={setValue} />
 *       <div className="flex items-center gap-2">
 *         {IconComponent && <IconComponent className="w-8 h-8" />}
 *         <span>{value || 'No icon selected'}</span>
 *       </div>
 *     </div>
 *   );
 * }
 * ```
 */
export function useIconSelect(initialValue?: string) {
  const [value, setValue] = React.useState(initialValue || "");

  return {
    value,
    setValue,
    IconComponent: value ? iconMap[value] : null,
  };
}

/**
 * Utility function to retrieve an icon component by name.
 *
 * Looks up an icon component from the curated icon map by its string name.
 * Returns null if the icon name is not found in the available collection.
 *
 * @param name - The name of the icon to retrieve
 * @returns The icon component or null if not found
 *
 * @utility
 * @example
 * ```tsx
 * // Dynamic icon rendering
 * function IconDisplay({ iconName }: { iconName: string }) {
 *   const IconComponent = getIconByName(iconName);
 *
 *   return IconComponent ? (
 *     <IconComponent className="w-8 h-8 text-blue-500" />
 *   ) : (
 *     <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
 *       <span className="text-xs text-gray-500">?</span>
 *     </div>
 *   );
 * }
 *
 * // Conditional icon rendering
 * function NotificationIcon({ type }: { type: string }) {
 *   const iconName = type === 'success' ? 'Check' : 'AlertCircle';
 *   const IconComponent = getIconByName(iconName);
 *
 *   return IconComponent ? (
 *     <IconComponent className="w-5 h-5" />
 *   ) : null;
 * }
 *
 * // Safe icon lookup
 * const maybeIcon = getIconByName('NonExistentIcon'); // returns null
 * const validIcon = getIconByName('Star'); // returns Star component
 * ```
 */
export function getIconByName(name: string): LucideIcon | null {
  return iconMap[name] || null;
}

/**
 * Array of all available icon names in the collection.
 *
 * Provides a list of all icon names that can be used with the IconSelect
 * component and related utilities. Useful for validation, documentation,
 * and building icon galleries.
 *
 * @constant
 * @example
 * ```tsx
 * // Icon gallery
 * function IconGallery() {
 *   return (
 *     <div className="grid grid-cols-8 gap-4">
 *       {availableIcons.map((iconName) => {
 *         const IconComponent = getIconByName(iconName);
 *         return (
 *           <div key={iconName} className="flex flex-col items-center p-2">
 *             {IconComponent && <IconComponent className="w-6 h-6" />}
 *             <span className="text-xs mt-1">{iconName}</span>
 *           </div>
 *         );
 *       })}
 *     </div>
 *   );
 * }
 *
 * // Validation
 * function isValidIcon(iconName: string): boolean {
 *   return availableIcons.includes(iconName);
 * }
 *
 * // Random icon picker
 * function getRandomIcon(): string {
 *   const randomIndex = Math.floor(Math.random() * availableIcons.length);
 *   return availableIcons[randomIndex];
 * }
 * ```
 */
export const availableIcons = Object.keys(iconMap);
