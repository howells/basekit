import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { ChannelSlider } from "./index";

describe("ChannelSlider server output", () => {
  it("renders the gradient and size before hydration", () => {
    const html = renderToStaticMarkup(
      <ChannelSlider
        label="Lightness"
        background="linear-gradient(white, black)"
        size="xl"
        defaultValue={30}
      />,
    );
    expect(html).toContain("--patternmode-channel-size:3rem");
    expect(html).toContain("--patternmode-channel-background:linear-gradient(white, black)");
    expect(html).toContain('aria-label="Lightness"');
  });

  it("names both range inputs and preserves their initial values without browser APIs", () => {
    const html = renderToStaticMarkup(
      <ChannelSlider
        label="Lightness"
        thumbLabels={["Minimum lightness", "Maximum lightness"]}
        background="#eee"
        defaultValue={[15, 80] as const}
      />,
    );
    expect(html).toContain('aria-label="Minimum lightness"');
    expect(html).toContain('aria-label="Maximum lightness"');
    expect(html).toContain('value="15"');
    expect(html).toContain('value="80"');
  });
});
