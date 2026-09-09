# Typography review — 9 September 2026

Question: how should Patternmode adopt Cursor dashboard's lightness while keeping
Inter and providing a reusable style system for other applications?

Independent read-only review through the Claude CLI, medium effort. The lane
probe returned `lane-ok`, and model metadata identified `claude-fable-5-1`.
The review completed successfully with no permission denials.

## Verdict and decision

Fable recommended a regular 400-weight body base in the existing theme, explicit
application recipes for headings and controls, real Inter loading in the
catalogue, and one canonical style guide. Accepted. No new package, typography
token namespace, or blanket component overrides.

## Verified findings

- The catalogue named Inter without loading it; Chrome reported the rendered
  face as `.SF NS`. The registry's font item already supplies Inter Variable.
- The portable theme had font features and smoothing but no body scale.
- The catalogue used 450 body weight and 500 headings. The preview used a large
  semibold hero and tracked uppercase section labels, demonstrating a different
  hierarchy from the proposed catalogue.
- README and the theme README described installation without a concise shared
  composition guide. The guide now lives in `docs/style.md`.
- The catalogue still has legacy colour names. Those remain app-local and are
  not offered as portable recipes; colour-token migration is outside this change.

## Corrections to the review

- Fable described stock CardTitle as `text-sm font-medium`. This checkout uses
  `leading-none font-semibold` and inherits its size. App-level `className`
  overrides are still the appropriate fix.
- A proposed base-layer heading rule would not override a stock component's
  higher-layer utilities, as the review suggested. It would affect unstyled
  headings, which is enough reason to keep these recipes explicit.
- A body-base update can affect all inheriting text, not just prose. Adoption
  guidance calls out that migration impact.

## Implementation scope

The catalogue loads Inter Variable and demonstrates regular titles and lighter
body text. The registry body base is 14px/21px at 400. The preview demonstrates
explicit title and control recipes. README, AGENTS, and the theme README point
to the canonical style guide. Existing installed consumers require deliberate
adoption; this work does not migrate or publish changes to them.

## Contrast refinement

Fable flagged small muted text for contrast verification. The existing
`#77756d` measured 4.45:1 on `#fbfbf9` and 4.23:1 on `#f6f5f1`. The light-mode
muted foreground is now `#727068`: 4.79:1 and 4.55:1 respectively, with the
same warm hue. The registry uses its OKLCH equivalent. Dark values are unchanged.

## Validation

- Registry rebuilt and installed through the real shadcn preview sync.
- Chrome confirmed a custom Inter font in the catalogue, 20/28px page titles,
  16/24px card titles, and 400 weight. Narrow catalogue layout had no horizontal
  overflow.
- Inspected the registry preview in light and dark. Computed styles confirmed
  the 14/21px body base and explicit 13/18px, 400-weight buttons.
- Preview typecheck and changed-file formatting/lint passed; lint retained its
  existing long-function warning in the preview page. No component behaviour
  changed, and no broad test suite was run.

## Visual feedback

After viewing the implementation, Daniel preferred page and card titles at the
14px body size, differentiated by darker colour rather than larger type. This
supersedes the initial 20px/16px title recommendation. The catalogue, preview, and
canonical guide now use this flatter hierarchy. The catalogue intro uses balanced
text wrapping.
