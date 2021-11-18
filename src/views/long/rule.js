export const passwordValidate = () => {
  return (rule, value, callback) => {
    if (value.length < 6) {
      callback(new Error('密码至少是6位'))
    } else {
      callback()
    }
  }
}
