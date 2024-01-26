const addDays = require('date-fns/addDays')
const myfun = days => {
  const result = addDays(new Date(22, 7, 2020), days)
  return '${result.getDate()}-${result.getMonth()+1}-${result.getFullYear()}'
}
module.exports = myfun
