"use client";

import { ChannelSlider } from "@patternmode/channel";
import { Swatch, SWATCH_SIZES } from "@patternmode/swatch";
import { useState } from "react";

const LIGHTNESS_COLORS = ["#faf5e9", "#b6a180", "#191a17"] as const;
const LIGHTNESS = `linear-gradient(to right in srgb, ${LIGHTNESS_COLORS.join(", ")})`;

/** Crop the same ramp to the selected interval, keeping its middle colour stop. */
const rangeBackground = ([start, end]: readonly [number, number]) => {
  if (start === end) {
    const [from, to] = start <= 50 ? LIGHTNESS_COLORS : LIGHTNESS_COLORS.slice(1);
    const progress = start <= 50 ? start * 2 : (start - 50) * 2;
    return `color-mix(in srgb, ${from}, ${to} ${progress}%)`;
  }
  const stops = LIGHTNESS_COLORS.map(
    (color, index) => `${color} ${((index * 50 - start) / (end - start)) * 100}%`,
  );
  return `linear-gradient(to right in srgb, ${stops.join(", ")})`;
};
const WARMTH = "linear-gradient(to right, #a6bdd5, #d9cbb6, #d99460)";
const contrast = (value: number) => (value < 55 ? "#1d1d1b" : "rgba(255,255,255,0.85)");

export const ChannelDemo = () => {
  const [lightness, setLightness] = useState(45);
  const [warmth, setWarmth] = useState(50);
  const [range, setRange] = useState<readonly [number, number]>([20, 75]);
  const [committed, setCommitted] = useState("No committed changes yet");
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="channel-demo">
      <section className="channel-demo-studio">
        <div className="channel-demo-heading">
          <div>
            <h2>Colour studio</h2>
            <p>Glass controls, sized to sit beside Swatch.</p>
          </div>
          <button
            type="button"
            onClick={() => {
              setLightness(45);
              setWarmth(50);
              setRange([20, 75]);
              setCommitted("Reset");
            }}
          >
            Reset
          </button>
        </div>
        <div className="channel-demo-row">
          <Swatch
            size="xl"
            color={`hsl(35 25% ${100 - lightness}%)`}
            aria-label="Lightness preview"
          />
          <ChannelSlider
            label="Lightness"
            size="xl"
            background={LIGHTNESS}
            value={lightness}
            onValueChange={setLightness}
            onValueCommitted={(value) => {
              setCommitted(`Lightness: ${value}`);
            }}
            getThumbColor={contrast}
            labelStart="Lighter"
            labelEnd="Darker"
            disabled={disabled}
          />
        </div>
        <div className="channel-demo-row">
          <Swatch
            size="xl"
            color={`hsl(${210 - warmth * 1.8} 35% 70%)`}
            aria-label="Warmth preview"
          />
          <ChannelSlider
            label="Warmth"
            size="xl"
            background={WARMTH}
            value={warmth}
            onValueChange={setWarmth}
            onValueCommitted={(value) => {
              setCommitted(`Warmth: ${value}`);
            }}
            labelStart="Cooler"
            labelEnd="Warmer"
            disabled={disabled}
          />
        </div>
        <div className="channel-demo-row">
          <Swatch
            size="xl"
            background={rangeBackground(range)}
            aria-label="Lightness range preview"
          />
          <ChannelSlider
            label="Lightness range"
            size="xl"
            background={LIGHTNESS}
            value={range}
            onValueChange={setRange}
            onValueCommitted={(value) => {
              setCommitted(`Range: ${value.join("–")}`);
            }}
            getThumbColor={contrast}
            labelStart="Range start"
            labelEnd="Range end"
            disabled={disabled}
          />
        </div>
        <div className="channel-demo-status">
          <output aria-live="polite">{committed}</output>
          <label>
            <input
              type="checkbox"
              checked={disabled}
              onChange={(event) => {
                setDisabled(event.target.checked);
              }}
            />{" "}
            Disabled
          </label>
        </div>
      </section>
      <section>
        <h2>The Swatch size scale</h2>
        <p>Each channel is exactly as tall as its neighbouring Swatch. Width remains flexible.</p>
        <div className="channel-demo-sizes">
          {SWATCH_SIZES.map((size) => (
            <div className="channel-demo-size-row" key={size}>
              <code>{size}</code>
              <Swatch size={size} color="#b6a180" />
              <ChannelSlider
                label={`${size} size`}
                size={size}
                background={LIGHTNESS}
                defaultValue={45}
                getThumbColor={contrast}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
