import { stringify } from 'qs';
import request from '@/utils/request';

//查询所有业务类型
export async function queryAllBizList(params) {
  return request(`/dictType/queryAllBizList`);
}

//查询所有逻辑层次
export async function queryAllModelLevelList(params) {
  return request(`/dictType/queryAllModelLevelList`);
}


//我创建的表
export async function queryOwnerableTbList(params) {
  //return request(`/api/rule?${stringify(params)}`);
  return request('/userProfile/queryOwnerableTbList', {
    method: 'POST',
    body: {
      ...params
    },
  });
}

//我收藏的表
export async function queryMyCollectTbList(params) {
  return request('/userProfile/queryMyCollectTbList', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

//收藏
export async function collectTb(params) {
  return request('/userProfile/collectTb', {
    method: 'POST',
    body: {
      ...params
    },
  });
}

//去收藏
export async function unCollectTb(params) {
  return request('/userProfile/unCollectTb', {
    method: 'POST',
    body: {
      ...params
    },
  });
}