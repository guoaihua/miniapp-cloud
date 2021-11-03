const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
const $ = db.command.aggregate

// 聚合记录云函数入口函数
exports.main = async (event, context, wxContent) => {
  // 返回数据库聚合结果
  console.log(wxContent)
  await db.collection('userInfos').add({
    // data 字段表示需新增的 JSON 数据
    data: {
      user:  wxContent.OPENID || 'ada'
    }
  })

  return {
    success: true
  }
}