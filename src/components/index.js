/*
 * 描述: 封装组件库
 * 作者: Jack Chen
 * 日期: 2020-04-18
 */



import dynamicListArticle from './dynamicListArticle' // 稿件动态列表动画
import seamlessArticle from './seamlessArticle' // 稿件无缝滚动
import historyArticle from './historyArticle' // 发展历程


const components = {

  
  dynamicListArticle,
  seamlessArticle,
  historyArticle,
  
};

const install = (Vue = {}) => {
  if (install.installed) return;
  Object.keys(components).forEach(component => {
    Vue.component(components[component].name, components[component]);
  });

  install.installed = true;
};

install.installed = false;

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
  install.installed = true;
}

const Vcomp = {
  ...components,
  install
};


export default Vcomp
