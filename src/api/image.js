/**
 * 素材请求相关模块
 */

import request from '@/utils/request'

/**
 * 上传图片素材
 */
export const uploadImage = data => {
  return request({
    method: 'POST',
    url: '/image/uploadImage',
    // 正常的文件上传接口要求 Content-Type 设置为 multipart/form-data
    // 一般文件上传的接口都要求把请求头中的 Content-Type 设置为 multipart/form-data，但是我们使用 axios 上传文件的话不需要手动设置，你只要给 data 一个 FormData 对象即可。
    // new FormData()
    data
  })
}

/**
 * 获取图片素材列表
 */
export const getImages = params => {
  return request({
    method: 'GET',
    url: '/image/getImages',
    params
  })
}

/**
 * 收藏/取消收藏素材
 */
export const collectImage = (imageId, collect, username) => {
  return request({
    method: 'PUT',
    url: '/image/collectImage',
    params: {
      imageId,
      collect,
      username
    }
  })
}

/**
 * 删除素材
 */
export const deleteImage = imageId => {
  return request({
    method: 'DELETE',
    url: `/image/deleteImage/${imageId}`
  })
}
