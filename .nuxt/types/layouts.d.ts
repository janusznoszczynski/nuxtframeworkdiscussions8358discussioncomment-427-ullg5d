import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/home/projects/nuxtframeworkdiscussions8358discussioncomment-427-ullg5d/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}