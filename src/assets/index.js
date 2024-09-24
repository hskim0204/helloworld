import { createWebHistory, createRouter } from "vue-router";
import SearchMain from "../pages/SearchMain";
import ResultList from "../pages/ResultList";
import ResultList1 from "../pages/ResultList1";
import ResultDtl from "../pages/ResultDtl";
import ListWrite from "../pages/ListWrite";

const routes = [
  { path: "/", name: "searchMain", component: SearchMain },
  {
    path: "/resultList/",
    name: "resultList",
    component: ResultList,
    props: true,
  },
  {
    path: "/resultList1/",
    name: "resultList1",
    component: ResultList1,
    props: true,
  },
  { path: "/resultDtl", name: "resultDtl", component: ResultDtl, props: true },
  {
    path: "/listWrite/:deptNo:dName:loc",
    name: "listWrite1",
    component: ListWrite,
  },
  {
    path: "/listWrite",
    name: "listWrite",
    component: ListWrite,
  },
]; // path 별 페이지 component 추가

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
