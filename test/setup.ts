import "@testing-library/jest-dom"
import { config, RouterLinkStub } from "@vue/test-utils"

config.global.mocks.$t = (key: string) => key
config.global.mocks.$d = (date: string) => new Date(date).toISOString()
config.global.mocks.$n = (number: number) => number
config.global.mocks.localePath = (path: string) => path
config.global.stubs["nuxt-link"] = RouterLinkStub
config.global.stubs["nuxt-img"] = true

Element.prototype.scrollTo = () => {}
;(Element.prototype as HTMLDialogElement).showModal = () => {}
;(Element.prototype as HTMLDialogElement).show = () => {}
;(Element.prototype as HTMLDialogElement).close = () => {}

global.focus = () => {}
