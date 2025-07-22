/**
 * Inspector Components
 * 
 * A side panel component system for displaying detailed information, properties,
 * or controls related to selected content. Similar to sidebar components but
 * specifically designed for inspection and detail views.
 * 
 * Features:
 * - Fixed-width side panel layout
 * - Structured header, body, and section organization
 * - Scrollable content area
 * - Responsive border and background styling
 * - Dark mode support
 * - Flexible content organization
 * 
 * @example
 * ```tsx
 * // Basic inspector panel
 * <Inspector>
 *   <InspectorHeader>
 *     <h2>Properties</h2>
 *     <button>Close</button>
 *   </InspectorHeader>
 *   <InspectorBody>
 *     <InspectorSection>
 *       <InspectorGroup>
 *         <label>Width</label>
 *         <input type="number" value={width} />
 *       </InspectorGroup>
 *       <InspectorGroup>
 *         <label>Height</label>
 *         <input type="number" value={height} />
 *       </InspectorGroup>
 *     </InspectorSection>
 *   </InspectorBody>
 * </Inspector>
 * 
 * // Design tool inspector
 * <Inspector>
 *   <InspectorHeader>
 *     <div className="flex items-center gap-2">
 *       <PaintBrush className="w-4 h-4" />
 *       <span>Element Inspector</span>
 *     </div>
 *   </InspectorHeader>
 *   <InspectorBody>
 *     <InspectorSection>
 *       <h3>Layout</h3>
 *       <InspectorGroup>
 *         <label>Display</label>
 *         <select value={display}>
 *           <option value="block">Block</option>
 *           <option value="flex">Flex</option>
 *         </select>
 *       </InspectorGroup>
 *     </InspectorSection>
 *     
 *     <InspectorSection>
 *       <h3>Typography</h3>
 *       <InspectorGroup>
 *         <label>Font Size</label>
 *         <input type="range" min="12" max="48" value={fontSize} />
 *       </InspectorGroup>
 *     </InspectorSection>
 *   </InspectorBody>
 * </Inspector>
 * 
 * // File properties inspector
 * <Inspector>
 *   <InspectorHeader>
 *     <h2>File Details</h2>
 *   </InspectorHeader>
 *   <InspectorBody>
 *     <InspectorSection>
 *       <InspectorGroup>
 *         <dt>Name</dt>
 *         <dd>document.pdf</dd>
 *       </InspectorGroup>
 *       <InspectorGroup>
 *         <dt>Size</dt>
 *         <dd>2.4 MB</dd>
 *       </InspectorGroup>
 *       <InspectorGroup>
 *         <dt>Modified</dt>
 *         <dd>Oct 15, 2023</dd>
 *       </InspectorGroup>
 *     </InspectorSection>
 *   </InspectorBody>
 * </Inspector>
 * ```
 */

import { cx } from "@/lib/utils";
import React from "react";

/**
 * Root inspector component providing the main panel container.
 * 
 * Creates a fixed-width side panel with proper borders and background styling.
 * Typically positioned on the right side of the interface for detailed views
 * and property editing.
 *
 * @param className - Additional CSS classes
 * @param props - Additional HTML aside element props
 *
 * @component
 * @example
 * ```tsx
 * // Basic inspector
 * <Inspector>
 *   <InspectorHeader>Inspector Title</InspectorHeader>
 *   <InspectorBody>Inspector content here</InspectorBody>
 * </Inspector>
 * 
 * // Custom styling
 * <Inspector className="w-96 border-blue-200">
 *   <InspectorHeader>Custom Inspector</InspectorHeader>
 *   <InspectorBody>Content</InspectorBody>
 * </Inspector>
 * ```
 */
export function Inspector({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"aside">) {
  return (
    <aside
      className={cx(
        // Base layout
        "flex h-full w-80 flex-shrink-0 flex-col",
        // Border and background
        "border-l border-zinc-200 bg-zinc-50/50",
        "dark:border-zinc-800 dark:bg-zinc-900/50",
        className
      )}
      {...props}
    />
  );
}

/**
 * Inspector header component for titles and controls.
 * 
 * Provides a fixed header area at the top of the inspector panel.
 * Typically contains titles, close buttons, or other header controls
 * with proper spacing and border separation.
 *
 * @param className - Additional CSS classes
 * @param props - Additional HTML div element props
 *
 * @component
 * @example
 * ```tsx
 * // Simple header
 * <InspectorHeader>
 *   <h2>Properties</h2>
 * </InspectorHeader>
 * 
 * // Header with controls
 * <InspectorHeader>
 *   <div className="flex items-center justify-between">
 *     <h2>Element Inspector</h2>
 *     <button>✕</button>
 *   </div>
 * </InspectorHeader>
 * 
 * // Header with icon
 * <InspectorHeader>
 *   <div className="flex items-center gap-2">
 *     <Settings className="w-4 h-4" />
 *     <span>Settings</span>
 *   </div>
 * </InspectorHeader>
 * ```
 */
export function InspectorHeader({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cx(
        // Base layout
        "flex flex-shrink-0 items-center justify-between px-6 py-4",
        // Border
        "border-b border-zinc-200 dark:border-zinc-800",
        className
      )}
      {...props}
    />
  );
}

/**
 * Inspector body component for main scrollable content.
 * 
 * Provides the main content area of the inspector with automatic scrolling
 * when content overflows. Contains inspector sections and groups with
 * appropriate padding and spacing.
 *
 * @param className - Additional CSS classes
 * @param props - Additional HTML div element props
 *
 * @component
 * @example
 * ```tsx
 * // Basic body
 * <InspectorBody>
 *   <InspectorSection>
 *     Content sections here
 *   </InspectorSection>
 * </InspectorBody>
 * 
 * // Body with custom padding
 * <InspectorBody className="px-4 py-2">
 *   Custom padded content
 * </InspectorBody>
 * 
 * // Scrollable content
 * <InspectorBody>
 *   {longListOfItems.map(item => (
 *     <InspectorSection key={item.id}>
 *       {item.content}
 *     </InspectorSection>
 *   ))}
 * </InspectorBody>
 * ```
 */
export function InspectorBody({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cx(
        // Base layout - scrollable content area
        "flex-1 overflow-y-auto px-6 py-4",
        className
      )}
      {...props}
    />
  );
}

/**
 * Inspector section component for organizing related content.
 * 
 * Groups related inspector content with consistent vertical spacing.
 * Typically contains multiple inspector groups or related form controls
 * with semantic organization.
 *
 * @param className - Additional CSS classes
 * @param props - Additional HTML div element props
 *
 * @component
 * @example
 * ```tsx
 * // Basic section
 * <InspectorSection>
 *   <h3>Layout Properties</h3>
 *   <InspectorGroup>
 *     <label>Width</label>
 *     <input type="number" />
 *   </InspectorGroup>
 * </InspectorSection>
 * 
 * // Multiple sections
 * <InspectorBody>
 *   <InspectorSection>
 *     <h3>Dimensions</h3>
 *     <!-- dimension controls -->
 *   </InspectorSection>
 *   <InspectorSection>
 *     <h3>Appearance</h3>
 *     <!-- appearance controls -->
 *   </InspectorSection>
 * </InspectorBody>
 * 
 * // Section with custom spacing
 * <InspectorSection className="space-y-4">
 *   Content with larger spacing
 * </InspectorSection>
 * ```
 */
export function InspectorSection({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cx(
        // Base layout
        "space-y-6",
        className
      )}
      {...props}
    />
  );
}

/**
 * Inspector group component for form control groupings.
 * 
 * Provides tight spacing for related form elements like labels and inputs.
 * Used within inspector sections to create logical groupings of controls
 * with consistent vertical rhythm.
 *
 * @param className - Additional CSS classes
 * @param props - Additional HTML div element props
 *
 * @component
 * @example
 * ```tsx
 * // Basic form group
 * <InspectorGroup>
 *   <label>Button Text</label>
 *   <input type="text" value={buttonText} />
 * </InspectorGroup>
 * 
 * // Multiple groups
 * <InspectorSection>
 *   <InspectorGroup>
 *     <label>Width</label>
 *     <input type="number" value={width} />
 *   </InspectorGroup>
 *   <InspectorGroup>
 *     <label>Height</label>
 *     <input type="number" value={height} />
 *   </InspectorGroup>
 * </InspectorSection>
 * 
 * // Group with description list
 * <InspectorGroup>
 *   <dt className="font-medium">File Size</dt>
 *   <dd className="text-sm text-gray-600">2.4 MB</dd>
 * </InspectorGroup>
 * 
 * // Group with complex controls
 * <InspectorGroup>
 *   <label>Color</label>
 *   <div className="flex items-center gap-2">
 *     <input type="color" value={color} />
 *     <input type="text" value={color} placeholder="#000000" />
 *   </div>
 * </InspectorGroup>
 * ```
 */
export function InspectorGroup({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cx(
        // Base layout for form groups
        "space-y-2",
        className
      )}
      {...props}
    />
  );
}
