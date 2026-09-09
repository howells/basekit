# @patternmode/deck

Composable Deck primitives for React.

```tsx
import { Deck } from "@patternmode/deck";
import "@patternmode/deck/styles.css";

export function Example() {
  return (
    <Deck mode="cycle" visibleCount={3} onAdvance={({ direction }) => console.log(direction)}>
      <Deck.Card key="one">One</Deck.Card>
      <Deck.Card key="two">Two</Deck.Card>
      <Deck.Card key="three">Three</Deck.Card>
      <Deck.Empty>No cards left</Deck.Empty>
    </Deck>
  );
}
```

Use `mode="cycle"` for a repeating Deck, or `mode="finite"` when advanced Cards should exhaust into `Deck.Empty`.

## Cards that arrive later

Deck watches its children. A `Deck.Card` that appears after the first render,
because a fetch resolved or an agent streamed one more result, rises up into the
stack from beneath instead of popping in. Cards present at first render and
cards the deck has already shown never animate in. Pass `enter="none"` to place
late cards instantly.

```tsx
<Deck mode="finite" enter="rise">
  {results.map((result) => (
    <Deck.Card key={result.id}>{result.title}</Deck.Card>
  ))}
  <Deck.Empty>Waiting for more</Deck.Empty>
</Deck>
```

## Optimized images

Deck renders card children unchanged. If your cards contain images, compose the
image component your app already uses. In Next.js, put `next/image` `Image`
inside each `Deck.Card`:

```tsx
import { Deck } from "@patternmode/deck";
import Image from "next/image";

export function ImageDeck({ items }: { items: { alt: string; id: string; src: string }[] }) {
  return (
    <Deck aria-label="Project images" mode="cycle">
      {items.map((item, index) => (
        <Deck.Card key={item.id}>
          <Image
            alt={item.alt}
            fill
            fetchPriority={index === 0 ? "high" : "auto"}
            loading={index === 0 ? "eager" : "lazy"}
            sizes="(max-width: 640px) 78vw, 420px"
            src={item.src}
          />
        </Deck.Card>
      ))}
    </Deck>
  );
}
```
