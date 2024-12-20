import axios from 'axios'

const url = "https://localhost:7105/";

const commonRequest = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
        //Authorization: `Bearer ` + localStorage.getItem('token')
    },
});

const uploadRequest = axios.create({
   baseUrl: url,
   headers: {
        'Content-Type': 'Multipart/form-data',
        Authorization: `Bearer ` + localStorage.getItem('token')
   } 
});

const downloadRequest = axios.create({
    baseUrl: url,
    responseType: 'blob',
    headers: {
        Authorization: `Bearer ` + localStorage.getItem('token')
    }
})

commonRequest.interceptors.request.use(
    function (config) {
        // console.log(config);
        // Do something before request is sent
            return config;
        },
        function (error) {
            if (error.response){
                if (error.response.status == 400) {
                }
              } 
              if (!window.navigator.onLine) {
                alert("網路出了點問題，請重新連線後重整網頁");
                return;
              }
              return Promise.reject(error);
        }
);

export const apiGetName1 = () => commonRequest.get('/api/Post/Test');

export const apiGetName2 = (parameter) => commonRequest.get(`/api/controller/action?data=${parameter}`)

export const apiGetName3 = (para1, para2) => commonRequest.get(`/api/controller/action?p1=${para1}&p2=${para2}`)

export const apiPostName1 = (data) => commonRequest.post('api/controller/action', data)

export const apiPutName1 = (data) => userRequest.put(`api/controller/action`,data)

export const apiDownLoadName1 = (data) => downloadRequest.post('api/controller/action',data)

export const apiUploadName1 = (data) => uploadRequest.post('api/controller/action', data)
