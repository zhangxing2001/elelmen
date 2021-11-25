import axios from 'axios'
import { colorMap, colorTables } from '@/commmon/common'
import color from 'css-color-function' // 基于主色生成不同程度情景色
import rebHex from 'rgb-hex' // 转化16禁止
// 生成最终的样式
export const generateNewStyle = async (primary) => {
  if (!primary) return
  // 1获取所有的样式  相当于请求这个地址 ---> https://unpkg.com/element-plus@1.2.0-beta.3/dist/index.css
  const originalStyle = await getOriginalStyle()
  // 2分析原始样式 找出需要替换的颜色 做标记
  let newStyle = setStyleTemplate(originalStyle)
  // console.log(newStyle)
  // 3根据主色生成对应的情景色
  const newColor = generateColors(primary)
  // console.log(newColor)
  Object.keys(newColor).forEach((key) => {
    newStyle = newStyle.replace(
      new RegExp('(:|\\s+)' + key, 'g'),
      '$1' + newColor[key]
    )
  })
  return newStyle
}
const getOriginalStyle = async () => {
  const version = require('element-plus/package.json').version
  const url = `https://unpkg.com/element-plus@${version}/dist/index.css`
  const { data } = await axios.get(url)
  return data
}

const setStyleTemplate = (Style) => {
  Object.keys(colorMap).forEach((key) => {
    const value = colorMap[key]
    Style = Style.replace(new RegExp(key, 'gi'), value)
  })
  return Style
}
export const generateColors = (primary) => {
  const colors = {
    primary: primary
  }
  Object.keys(colorTables).forEach((key) => {
    //  将主色应用到color 函数中
    const value = colorTables[key].replace(new RegExp(/primary/g), primary)
    colors[key] = '#' + rebHex(color.convert(value))
  })
  return colors
}
// 将生成的样式写入到head标签中
export const writeStyleToHearTag = (newStyle) => {
  // 根据主色生成对应的情景色
  const style = document.createElement('style')
  style.innerHTML = newStyle
  document.head.appendChild(style)
}
