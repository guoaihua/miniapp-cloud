// 云函数入口文件
const cloud = require('wx-server-sdk')
const addUser = require('./addUser/index')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  return await addUser.main(event, context, wxContext);
}