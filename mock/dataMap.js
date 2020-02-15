function getbusinessClassification() {
  return [
    {
      title: '业务应用',
      type: 1,
      data: [
        {
          title: '理财通',
          dbCount: 100,
          tbCount: 5000,
          rtbCount: 10,
        },
        {
          title: '微信',
          dbCount: 100,
          tbCount: 5000,
          rtbCount: 10,
        },
        {
          title: '手Q',
          dbCount: 100,
          tbCount: 5000,
          rtbCount: 10,
        },
        {
          title: '自选股',
          dbCount: 100,
          tbCount: 5000,
          rtbCount: 10,
        },
        {
          title: '自选股',
          dbCount: 100,
          tbCount: 5000,
          rtbCount: 10,
        },
      ],
    },
    {
      title: '逻辑层次',
      type: 2,
      data: [
        {
          title: '理财通',
          dbCount: 100,
          tbCount: 5000,
          rtbCount: 10,
        },
        {
          title: '微信',
          dbCount: 100,
          tbCount: 5000,
          rtbCount: 10,
        },
        {
          title: '手Q',
          dbCount: 100,
          tbCount: 5000,
          rtbCount: 10,
        },
        {
          title: '自选股',
          dbCount: 100,
          tbCount: 5000,
          rtbCount: 10,
        },
        {
          title: '自选股',
          dbCount: 100,
          tbCount: 5000,
          rtbCount: 10,
        },
      ],
    },
  ];
}

function getApplicationDetailList() {
  let list = [];
  for (let i = 0; i < 10; i++) {
    list.push({
      applicationName: 'IP流量',
      dbName: '库名',
      tableName: 'tableName',
      serviceName: 'serviceName',
      sub: '业务子类',
      tableDesc: '描述',
    });
  }
  return list;
}

function getAssetsDetailList() {
  let list = [];
  for (let i = 0; i < 10; i++) {
    list.push({
      dbName: '库名',
      tableName: 'tableName',
      serviceName: 'serviceName',
      sub: '业务子类',
      dataLayer: 'DAL',
      tableDesc: '描述',
      createTime: '20181119',
    });
  }
  return list;
}

function getDataAccess() {
  let list = [];
  for (let i = 0; i < 6; i++) {
    list.push({
      title: '库名',
      data: [
        {
          name: 'xxx',
          unit: 100,
        },
        {
          name: 'xxx',
          unit: 100,
        },
        {
          name: 'xxx',
          unit: 100,
        },
        {
          name: 'xxx',
          unit: 100,
        },
      ],
    });
  }
  return list;
}

export default {
  'GET /api/dataMap/dataAssets/businessClassification': getbusinessClassification(),
  'GET /api/dataMap/dataAssets/businessClassification/applicationDetailList': getApplicationDetailList(),
  'GET /api/dataMap/dataAssets/businessClassification/assetsDetail': getAssetsDetailList(),
  'GET /api/dataMap/dataAssets/businessClassification/dataAccess': getDataAccess(),
};
