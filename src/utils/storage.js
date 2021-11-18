// 存储数据
// 设置数据
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    return (value = JSON.stringify(value))
  }
  window.localStorage.setItem(key, value)
}

// 获取数据
export const getItem = (key) => {
  const value = window.localStorage.getItem(key)
  try {
    // value是一个对象的字符串
    return JSON.parse(value)
  } catch (err) {
    //  他不是一个对象的字符串
    return value
  }
}

// 删除单个数据
export const deleteItem = (key) => {
  window.localStorage.removeItem(key)
}

// 删除全部数据
export const clearItem = () => {
  window.localStorage.deleteItem()
}
