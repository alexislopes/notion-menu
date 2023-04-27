// uno.config.ts
import transformerDirectives from '@unocss/transformer-directives'
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  transformers: [
    transformerDirectives(),
  ],
  presets: [presetUno()]
})