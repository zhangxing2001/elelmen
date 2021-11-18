import svgIcon from './svglcon.vue'
export default function initSvgIcon(app) {
  app.component('svg-icon', svgIcon)
}
const file = require.context('@/icon_svg/svg', false, /\.svg$/)
file.keys().map(file)
