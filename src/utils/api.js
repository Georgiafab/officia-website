import request from "./request";

export function getnewList(params) {
  return request({
    url: "/sys/api/get_newlist",
    method: "get",
    params,
  });
}
export function getnewDetail(params) {
  return request({
    url: "/sys/api/get_newdetail",
    method: "get",
    params,
  });
}

export function getBrandList(params) {
  return request({
    url: "/sys/api/get_brand_list",
    method: "get",
    params,
  });
}

export function getClassifyList(params) {
  return request({
    url: "/sys/api/get_classfiy_list",
    method: "get",
    params,
  });
}

export function getProductList(params) {
  return request({
    url: "/sys/api/get_product_list",
    method: "get",
    params,
  });
}

export function getCompanyDetail(params) {
  return request({
    url: "/sys/api/get_company_detail",
    method: "get",
    params,
  });
}

export function getBannerList(params) {
  return request({
    url: "/sys/api/get_banner_list",
    method: "get",
    params,
  });
}
