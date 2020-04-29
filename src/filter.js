// 全局过滤器
// 全局 filters

import Vue from 'vue'
import moment from 'moment'

// 地址拼接
Vue.filter('address', function(data) {
  return data.province + data.city + data.district
})
// 详情地址拼接
Vue.filter('addressDetail', function(data) {
  console.log(data)
  if (data.province) {
    return data.province + data.city + data.district + data.detailAddress
  } else {
    return ''
  }
})

// 时间转换
Vue.filter('timestr', function(value) {
  if (value) { return moment(value).format('YYYY-MM-DD HH:mm:ss') } else { return '' }
})

// 价格除 100 展示
Vue.filter('price', function(value) {
  return value / 100
})
// 礼品活动状态码
Vue.filter('activeStatus', function(value) {
  const mapObj = {
    '00': '未知状态',
    11: '待平台审核',
    12: '平台审核失败',
    21: '银行提交资料失败',
    22: '银行绑卡失败',
    30: '绑卡成功等待签约',
    31: '签约失败',
    32: '开通条码付失败',
    40: '开通成功'
  }
  return mapObj[value]
})
// 订单状态
Vue.filter('orderStatus', function(val) {
  const mapObj = {
    1: '待支付',
    2: '待发货',
    3: '待签收',
    4: '已完成',
    5: '已关闭',
    6: '已退款'
  }
  return mapObj[val]
})
// 付款方式
Vue.filter('payStatus', function(val) {
  const mapObj = {
    1: '微信支付',
    2: '支付宝支付',
    3: '余额支付'
  }
  return mapObj[val]
})
// 订单的付款状态
Vue.filter('orderPayStatus', function(val) {
  const mapObj = {
    1: '未付款',
    2: '已付款',
    3: '已付款',
    4: '已付款',
    5: '未付款',
    6: '已付款'
  }
  return mapObj[val]
})
// 商户类型
Vue.filter('detailType', function(val) {
  const mapObj = {
    1: '个体工商户',
    2: '企业商户',
    3: '小微商户'
  }
  return mapObj[val]
})
// 单据状态
Vue.filter('renderpayApproval', function(val) {
  const mapObj = {
    0: '待审批',
    1: '审批通过',
    2: '审批不通过'
  }
  return mapObj[val]
})
// 售后方式
Vue.filter('afterSaleStatus', function(val) {
  const mapObj = {
    0: '退款中',
    1: '退款成功',
    2: '退款失败',
    3: '退款申请中',
    4: '退款关闭'
  }
  return mapObj[val] || '无需售后'
})
// 商品规格拼接展示
Vue.filter('skuString', function(val) {
  const data = JSON.parse(val)
  let skuString = ''
  if (data.length > 0) {
    data.forEach(ele => {
      skuString = skuString + ' ' + ele.specValue
    })
  }
  return skuString
})

// 等级
Vue.filter('level', function(val) {
  const mapObj = {
    1: '陌生人',
    2: '普通用户',
    3: '金牌会员',
    4: '铂金会员',
    5: '荣耀会员'
  }
  return mapObj[val]
})

// 优惠券状态
Vue.filter('couponStatus', function(val) {
  const mapObj = {
    1: '未发布',
    2: '进行中',
    3: '已过期'
  }
  return mapObj[val]
})

// 数组转为字符串
Vue.filter('ArrartoString', function(val, type) {
  return val && val.join(type)
})
