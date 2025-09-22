import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from "unocss"

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetWebFonts({
      fonts: {
        sans: "DM Sans",
        serif: "DM Serif Display",
        mono: "DM Mono",
      },
    }),
  ],
  // Custom CSS rules can be added here
  rules: [
    ["bg-vp-alt", { "background-color": "var(--vp-c-bg-alt)" }],
    ["bg-vp-soft", { "background-color": "var(--vp-c-bg-soft)" }],
    ["text-vp-1", { color: "var(--vp-c-text-1)" }],
    ["text-vp-2", { color: "var(--vp-c-text-2)" }],
  ],
  shortcuts: [
    ["cell", "flex flex-col rounded p-4 bg-vp-alt h-full"],
    ["cell-header", "flex items-center mb-2"],
    ["cell-title", "text-xl font-bold"],
    ["cell-content", "flex-1 mb-2"],
    ["cell-footer", "text-sm mt-auto"],
    ["cell-icon", "ml-auto"],
    ["cell-link", "cell text-inherit! no-underline!"],
  ],
})
