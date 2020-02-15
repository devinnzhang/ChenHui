import {
    getAllList,
    getHintList
  } from '@/services/api';
  
  export default {
    namespace: 'xxxxx',
  
    state: {
      list: [],
      hintList: []
    },
  
    effects: {
      *getList({ payload }, { call, put }) {
       
        const response = yield call(getAllList, payload);
        yield put({
          type: 'setList',
          response,
        });
      },
      
      *getHintList({ payload }, { call, put }) {
        const response = yield call(getHintList, payload.keyWords);
        if(response && response.data && response.data.length){
          yield put({
            type: 'setHintList',
            response,
          });
        }
      }
    },
  
    reducers: {
      setList(state, { response }) {
        return {
          ...state,
          list: response,
        };
      },
      setHintList(state, { response }) {
        return {
          ...state,
          hintList: response.data,
        };
      },
    }
  };
  