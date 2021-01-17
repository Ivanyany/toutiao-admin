/**
 * 文章相关请求模块
 */
import request from '@/utils/request'

/**
 * 获取文章列表
 */
// export const getArticles = (params) => { // 可以简写为下一行
export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/article/getArticles',
    // Body 参数使用 data 设置
    // Query 参数使用 params 设置
    // Headers 参数使用 headers 设置
    // params: params // 两者相同时可省略后者
    params
  })
}

/**
 * 获取文章频道
 */
export const getArticleChannels = () => {
  return request({
    method: 'GET',
    url: '/channel/getChannels'
  })
}

/**
 * 删除文章
 */
export const deleteArticle = articleId => {
  return request({
    method: 'DELETE',
    // 接口文档中的写的路径参数需要在 url 中传递
    // 凡是看见接口路径中有的 :xxx 格式的字段，则需要传递路径参数
    url: `/article/deleteArticle/${articleId}`
  })
}

/**
 * 新建文章
 */
export const addArticle = (data, draft = false) => {
  return request({
    method: 'POST',
    url: '/article/addArticle',
    params: {
      draft // 是否存为草稿（true 为草稿）
    },
    data
  })
}

/**
 * 获取指定文章
 */
export const getArticle = articleId => {
  return request({
    method: 'GET',
    url: `/article/getArticleById/${articleId}`
  })
}

/**
 * 编辑文章
 */
export const updateArticle = (data, draft = false) => {
  return request({
    method: 'PUT',
    url: '/article/updateArticle',
    params: {
      draft // 是否存为草稿（true 为草稿）
    },
    data
  })
}

/**
 * 修改文章评论状态
 */
export const updateCommentStatus = (articleId, allowComment) => {
  return request({
    method: 'PUT',
    url: '/article/updateCommentsStatus',
    params: {
      articleId,
      allowComment
    }
  })
}
