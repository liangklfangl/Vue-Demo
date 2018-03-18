// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Main from "./components/Main";
import router from "./router";
import Layout from "./components/Layout";
Vue.config.productionTip = false;
// Vue注册一个child全局组件
// Vue.component("child", {
//   // template: "<div>This is child</div>",
//   template: "#anchored-heading-template",
//   // template指定一个id的情况
//   props: {
//     level: {
//       type: Number,
//       required: true
//     }
//   }
// });

// child组件接受slot
// Vue.component("child", {
//   render: function(createElement) {
//     var header = this.$slots.header;
//     var center = this.$slots.center;
//     var footer = this.$slots.footer;
//     //createElement第一个参数是标签名,第二个参数是值
//     return createElement("div", [
//       createElement("div", header),
//       createElement("div", center),
//       createElement("div", footer)
//     ]);
//   }
// });
// Vue.component("child", {
//   // 获取value的依赖
//   props: ["state"],
//   template: "<span>{{ state }}</span>"
// });

var eventBus = new Vue({});
// foo 组件
Vue.component("foo", {
  template:
    "<div><p>the count of foo is {{fooCount}}</p>" +
    '<button @click="addBar">add bar\'s count</button></div>',
  data: function() {
    return {
      fooCount: 0
    };
  },
  methods: {
    addBar: function() {
      // 触发事件
      eventBus.$emit("addBar");
    }
  },
  mounted: function() {
    eventBus.$on(
      "addFoo",
      function(num) {
        this.fooCount += num;
      }.bind(this)
    );
    // 这里必须将 this 绑定在组件实例上。如果不使用 bind , 也可以使用箭头函数。
  }
});
// bar 组件
Vue.component("bar", {
  template:
    "<div><p>the count of bar is {{barCount}}</p>" +
    '<button @click="addFoo">add foo\'s count</button></div>',
  data: function() {
    return {
      barCount: 0
    };
  },
  methods: {
    addFoo: function() {
      // 触发事件，同时传递一个参数
      eventBus.$emit("addFoo", 2);
    }
  },
  // 在 组件创建的钩子函数中 监听事件
  mounted: function() {
    eventBus.$on(
      "addBar",
      function() {
        this.barCount++;
      }.bind(this)
    );
  }
});
// 注册my-checkbox组件+inline-template
Vue.component("my-checkbox", {
  data() {
    return { checked: false, title: "Check me" };
  },
  methods: {
    check() {
      this.checked = !this.checked;
    }
  }
});

// 添加v-child组件
Vue.component("c-child", {
  props: ["target"],
  mounted() {
    this.target(function(t){
      console.log('子组件调用了父组件的this.target方法',t);
    });
  },
  template: "<div>我是c-child组件</div>"
});

new Vue({
  router,
  render: h => h(Layout)
  // data: function() {
  //   return { name: "qingtian" };
  // }
  // components: { Main },
  // 必须指定template或者render方法
  // template: "<Main/>"
}).$mount("#app");
