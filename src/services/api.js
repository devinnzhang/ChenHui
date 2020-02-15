import { stringify } from 'qs';
import request from '@/utils/request';


export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'update',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    body: params,
  });
}

export async function fakeChartData() {
  return request('/api/fake_chart_data');
}

export async function queryTags() {
  return request('/api/tags');
}

export async function queryBasicProfile() {
  return request('/api/profile/basic');
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function removeFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'delete',
    },
  });
}

export async function addFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'post',
    },
  });
}

export async function updateFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'update',
    },
  });
}

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices() {
  return request('/api/notices');
}

export async function getFakeCaptcha(mobile) {
  return request(`/api/captcha?mobile=${mobile}`);
}


//业务资产

export async function getDomainModelLevel() {//逻辑层次
  return request(`/doamin/getDomainModelLevel`);
}
export async function getDomainBusiness() {//业务分类
  return request(`/domain/getDomainBusiness`);
}
export async function getDomainBusinessApp() {//业务应用
  return request(`/domain/getDomainBusinessApp`);
}

export async function getApplicationDetail(params) {
  return request(`/app/getAppList?${stringify(params)}`);
}

export async function getAssetsDetail(params) {
  return request(`/business/getTableInfoList?${stringify(params)}`);
}

export async function getDataDomain() {//数据域下拉列表
  return request(`/modelLevel/getDataDomain`);
}

export async function getLogicLevelData(params) {//逻辑分层table
  return request(`/modelLevel/getTableInfoList?${stringify(params)}`);
}

//业务指标体系
export async function getTreeData() {
  return request(`/dataIndex/tree`);
}

export async function queryNodeContent(params) {
  return request(`/dataIndex/queryNodeContent?${stringify(params)}`);
}

export async function saveNodeContent(params) {
  return request(`/dataIndex/saveIndexContent`, {
    method: 'POST',
    body: params,
  });
  // return request(`/dataIndex/saveIndexContent?${stringify(params)}`);
}

export async function operateNode(params) {
  return request(`/dataIndex/operateNode`, {
    method: 'POST',
    body: params,
  })
}


//业务接入
export async function getDataAccessDateList(params) {//逻辑分层table
  return request(`/dataAccess/date/list?${stringify(params)}`);
}

export async function getDataAccessOverview(params) {//逻辑分层table
  return request(`/dataAccess/overview?${stringify(params)}`);
}

export async function getDataAccessDetailList(params) {//逻辑分层table
  return request(`/dataAccess/page/list?${stringify(params)}`);
}

//首页
export async function getAllList(params) {
  return request(`/home/search`, {
    method: 'POST',
    body: params,
  });
}

export async function getHintList(keywords) {
  return request(`/home/queryHintList?keyword=${keywords}`);
}

//表详情页
export async function getTbInfo(params) {
  return request(`/tbDataDict/getTbInfo?${stringify(params)}`);
}

export async function getFieldsInfo(params) {
  return request(`/tbDataDict/getFieldsInfo?${stringify(params)}`);
}

export async function getDimensionList(params) {
  return request(`/tbDataDict/selectLocalDimensionList?${stringify(params)}`);
}

export async function updateLocalDimension(params) {
  return request(`/tbDataDict/updateLocalDimension`, {
    method: 'POST',
    body: params,
  });
}

export async function updateTableComment(params) {//修改表描述
  return request('/tbDataDict/updateTableComment', {
    method: 'POST',
    body: params,
  });
}

export async function updateTablePublic(params) {//修改表是否公开
  return request('/tbDataDict/configInfo/update', {
    method: 'POST',
    body: params,
  });
}

export async function getExampleData(params) {//样例数据
  return request(`/tbDataDict/getExampleData?${stringify(params)}`);
}

export async function updateFieldsComment(params) {//修改字段
  return request('/tbDataDict/updateFieldsComment', {
    method: 'POST',
    body: params,
  });
}

export async function collectTb(params) {//收藏
  return request('/userProfile/collectTb', {
    method: 'POST',
    body: params,
  });
}

export async function unCollectTb(params) {//去收藏
  return request('/userProfile/unCollectTb', {
    method: 'POST',
    body: params,
  });
}

export async function getTbStorageGraph(params) {//存储信息table
  return request(`/tbDataDict/getTbStorageGraph?${stringify(params)}`);
}

export async function getTbStorageInfoList(params) {//存储信息table
  return request(`/tbDataDict/getTbStorageInfoList?${stringify(params)}`);
}

export async function getTbRunInfoList(params) {//运行信息table
  return request(`/tbDataDict/getTbRunInfoList?${stringify(params)}`);
}
export async function getTbRunGraph(params) {//运行信息图
  return request(`/tbDataDict/getTbRunGraph?${stringify(params)}`);
}

export async function getBloodGraph(params) {//血缘图
  return request(`/bloodGraph/getBloodGraph?${stringify(params)}`);
}

export async function getBloodRelation(params) {//血缘树图
  return request(`/bloodGraph/getBloodRelation?${stringify(params)}`);
}

export async function getLogListData(params) {//日志列表
  return request(`/tbDataDict/getTbAlterLog?${stringify(params)}`);
}



//db数据字典
export async function getDbList(params) {
  return request(`/dbDataDict/getDbList?${stringify(params)}`);
}

export async function getTableListByDbName(params) {
  return request(`/dbDataDict/getTableListByDbName?${stringify(params)}`);
}

export async function getDbGraph(params) {
  return request(`/dbDataDict/getDbGraph?${stringify(params)}`);
}

//数据地图
export async function getDataMapOverview(params) {
  return request(`/dataGraph/overview?${stringify(params)}`);
}

export async function getDataMapTableList() {
  return request(`/dataGraph/statistic/list`);
}

export async function getDataMapOptionList() {
  return request(`/dataGraph/customized/tableList`);
}

export async function saveSlected(params) {
  return request('/dataGraph/customized/save', {
    method: 'POST',
    body: params,
  });
}

export async function getDateList() {
  return request(`/dataGraph/overview/dateList`);
}

export async function uploadExcelForUpdateFC(params) {
  return request('/tbDataDict/uploadExcelForUpdateFC', {
    method: 'POST',
    body: params.file
  });
}

//数据报表

// 库存储排名
export async function getDbRankData() {
  return request(`/storage/dbRank`);
}

//库空间对比
export async function dbCompareList(params) {
  return request('/storage/dbCmpList', {
    method: 'POST',
    body: params
  });
}

// 表存储排名
export async function getTbRankData() {
  return request(`/storage/tbRank`);
}

//表空间对比
export async function tbCompareList(params) {
  return request('/storage/tbCmpList', {
    method: 'POST',
    body: params
  });
}


//表生命周期
export async function getLifeCycleData(params) {
  return request('/lifeCycle/list',{
    method:'POST',
    body:params
  })
}

export async function updateLifeCycleData(params) {
  return request('/lifeCycle/update',{
    method:'POST',
    body:params
  })
}







