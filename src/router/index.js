import Vue from "vue";
import Router from "vue-router";
import ON from "@/components/on";
import PayLoad from "@/components/Payload";
import Render from "@/components/render";
import Vmodel from "@/components/Vmodel";
import InlineTemplate from "@/components/inlineTemplate";
import Father from "@/components/father";
import Slot from "@/components/slotPlusSlotScope";
import Ref from "@/components/$ref";
import Main from "@/components/Main";
// Ref演示部分
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      // chunkName
      // name: "Main",
      // redirect: "/ref",
      // 1.默认路由的ref，React-Router里面的IndexRouter或者采用空的子路由
      component: Main,
      children: [
        {
          path: "",
          // name: "default",
          component: resolve => require(["@/components/$ref.vue"], resolve)
        },
        {
          path: "ref",
          // name: "ref",
          component: resolve => require(["@/components/$ref.vue"], resolve)
        },

        {
          path: "on",
          // name: "on",
          component: resolve => require(["@/components/on.vue"], resolve)
        },
        {
          path: "payload",
          // name: "payload",
          component: PayLoad
        },
        {
          path: "render",
          // name: "render",
          component: Render
        },
        {
          path: "inlineTmp",
          // name: "inlineTmp",
          component: InlineTemplate
        },
        {
          path: "model",
          // name: "model",
          component: Vmodel
        },
        {
          path: "father",
          // name: "father",
          component: Father
        },
        {
          path: "slot",
          // name: "slot",
          component: resolve =>
            require(["@/components/slotPlusSlotScope.vue"], resolve)
        }
        // 我希望在访问ref路由的时候实例化我的Ref组件,这里不是懒加载的，而是在实例化的时候所有的组件都被挂载了？
      ]
    }
  ]
});
