"use client";

export { CardStack, Deck, DeckCard, DeckEmpty, DeckRoot } from "./deck";
export type { AdvanceDecision, AdvanceDecisionInput } from "./logic";
export {
  getAdvanceDecision,
  getNextDeckIndex,
  getVisibleDeckItems,
  getVisualDepth,
  resolveCardRotation,
} from "./logic";
export type {
  AdvanceDirection,
  DeckAdvanceEvent,
  DeckCardProps,
  DeckEmptyProps,
  DeckEnterMode,
  DeckItem,
  DeckMode,
  DeckRenderOverlayState,
  DeckRootProps,
} from "./types";
