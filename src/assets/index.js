import { createWebHistory, createRouter } from 'vue-router'
import SearchMain from "../pages/SearchMain";
import ResultList from "../pages/ResultList";
import ResultList1 from "../pages/ResultList1";
import ResultDtl from "../pages/ResultDtl";

const routes = [
    { path: "/", name: 'searchMain', component: SearchMain },
    { path: "/resultList/", name: 'resultList', component: ResultList, props: true},    
    { path: "/resultList1/", name: 'resultList1', component: ResultList1, props: true},   
    { path: "/resultDtl", name: 'resultDtl', component: ResultDtl, props: true },
]// path 별 페이지 component 추가

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;