import request from './request'


export function getnewList(params) {
  return request({
    url: '/sys/api/get_newlist',
    method: 'get',
    params
  })
}
export function getnewDetail(params) {
  return request({
    url: '/sys/api/get_newdetail',
    method: 'get',
    params
  })
}