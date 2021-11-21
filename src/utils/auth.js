import * as local from './storage.js'
import { TIME_STAMP, TIME_OUT } from '@/commmon/common.js'
// 设置token时间
export const setTimeStamp = () => {
  // 保存一个 时间 ，保存到本地存储里
  local.setItem(TIME_STAMP, Date.now())
}
const setTimeStamp1 = () => {
  return local.getItem(TIME_STAMP)
}
// token 时间是否超时
export const isCheckTimeOut = () => {
  // 现在的时间 - 保存的时间 > 2 小时

  const currentTime = Date.now()
  /* eslint-disable-next-line */
  const time_stamp = setTimeStamp1()

  // 返回true 等于不过期  false等于过期
  /* eslint-disable-next-line */
  return currentTime - time_stamp <= TIME_OUT
}
