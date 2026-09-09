# Patternmode style

Use this guide when asked to “use Patternmode style” or “use the Patternmode style
system”. It defines how to compose an interface with the theme. The component
catalogue supplies interactions; adopting the style does not require using every
Patternmode component.

## Start here

Install the theme into a shadcn/Tailwind application:

```sh
npx shadcn add https://patternmode.com/r/theme.json
```

The registry supplies light and dark colour tokens, Inter Variable with true
italics and optical sizing, font features, radii, shadows, and a 14px/21px,
400-weight body base. Apply `font-sans` to the app shell. Verify the rendered font
is Inter Variable; declaring `Inter` without loading it is not sufficient.

The recipes below are application choices. The theme does not resize headings or
override stock component styles. Pass these classes through `className` in the
application; keep installed shadcn components upgradeable.

## Typography

Regular Inter, normal tracking, tone, and space establish the hierarchy.
Page and card titles normally share the 14px body size: use `text-foreground`
for titles and `text-muted-foreground` for descriptions, with both at weight 400. The default scale is for application interfaces, not a
ceiling for editorial pages or long-form reading.

| Role                               | Size / line height | Weight | Tailwind recipe                                       |
| ---------------------------------- | ------------------ | ------ | ----------------------------------------------------- |
| Page title                         | 14 / 21px          | 400    | `text-sm leading-[1.5] font-normal tracking-normal`   |
| Section, card, dialog title        | 14 / 21px          | 400    | `text-sm leading-[1.5] font-normal tracking-normal`   |
| Body, descriptions                 | 14 / 21px          | 400    | `text-sm leading-[1.5] font-normal`                   |
| Controls, navigation, field labels | 13 / 18px          | 400    | `text-[13px] leading-[18px] font-normal`              |
| Metadata, supporting labels        | 12 / 16px          | 400    | `text-xs leading-4 font-normal text-muted-foreground` |
| Emphasis, selected label           | Inherit            | 500    | `font-medium`                                         |

Use `text-balance` for short introductory copy to avoid orphaned final words.
For multi-line descriptions, `leading-relaxed` (1.625) is welcome. Keep paragraph
measures around 45–65 characters. Use `font-mono` for code and technical values;
use `tabular-nums` when numbers need to align. Ordinary labels stay in Inter and
sentence case. Avoid tracked uppercase eyebrows as the default section treatment.

Do not reduce opacity across a whole text container to make it feel lighter.
Use the semantic foreground colours. Preserve meaningful emphasis and a visible
selected state; 400 is a baseline, not a prohibition on stronger text.

Compact text must retain generous hit areas. On touch devices, inputs, selects,
and textareas use at least 16px text to avoid iOS focus zoom. Use semantic heading
levels independently of their visual size.

## Colour and surfaces

Use the installed tokens, including their dark-mode values. Do not copy the
catalogue's legacy app-local CSS names or substitute a new palette.

| Purpose            | Classes                                        |
| ------------------ | ---------------------------------------------- |
| Page               | `bg-background text-foreground`                |
| Raised surface     | `bg-card text-card-foreground`                 |
| Supporting copy    | `text-muted-foreground`                        |
| Quiet inset        | `bg-muted`                                     |
| Divider            | `border-border`                                |
| Primary action     | `bg-primary text-primary-foreground`           |
| Focus              | `ring-ring`                                    |
| Destructive action | `bg-destructive` with an accessible foreground |

The palette is warm paper, near-black ink, and restrained pine accents. Begin
with flat surfaces and faint dividers. Use the theme's 8px radius (`rounded-lg`)
for ordinary panels, and small ink-tinted shadows only where elevation helps.
Colour is a role, not decoration. Check contrast on the surface actually used;
small muted text needs particular care on tinted insets.

## Space and interaction

Give related labels and descriptions 4–8px, related controls 8–12px, panel content
16–24px padding, and sections 32–48px separation as starting points. Adapt these
to the content and viewport. Preserve whitespace before adding boxes and rules.

Use shadcn, Base UI, ReUI, or AI Elements for the patterns they already serve.
Reach for Patternmode for its focused interactions. Keep component mechanisms
host-themed; don't bake this visual treatment into every reusable package.
Motion should explain state or spatial relationships, respect reduced motion,
and use shared motion presets when available.

## Example

```tsx
<main className="mx-auto max-w-3xl px-6 py-12 font-sans">
  <h1 className="text-sm leading-[1.5] font-normal tracking-normal">Workspace</h1>
  <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
    Manage the people and projects in your workspace.
  </p>
  <Card className="mt-8 rounded-lg shadow-none">
    <CardHeader>
      <CardTitle className="text-sm leading-[1.5] font-normal">Members</CardTitle>
      <CardDescription className="text-sm leading-[1.5]">
        Choose who can view and edit projects.
      </CardDescription>
    </CardHeader>
    <CardFooter>
      <Button className="text-[13px] leading-[18px] font-normal">Invite member</Button>
    </CardFooter>
  </Card>
</main>
```

## Adoption and verification

Theme source lives in `packages/theme/registry`; the catalogue demonstrates the
typography in `apps/web`, and `apps/preview` exercises the installed registry with
stock shadcn components. Neither app's entire CSS file is a portable stylesheet.

Registry installs are consumer-owned copies. Existing apps change only when they
adopt the new source. Review the CSS diff on reinstall: the 14px/21px body base
changes any text inheriting the old default. Explicit component sizes and weights
still win. Apply the role recipes separately; reinstalling the theme does not
restyle existing headings, buttons, or labels.

Inspect real text at desktop and narrow widths, in light and dark where supported.
Confirm Inter actually renders, descriptions wrap comfortably, controls retain
focus and usable hit areas, and utility overrides still work.
