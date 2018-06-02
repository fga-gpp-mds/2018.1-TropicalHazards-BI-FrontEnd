// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from "vue"
import App from "./App"
import VueResource from "vue-resource"
import Vuelidate from "vuelidate"

import router from "./router"
import store from "./store"
import VModal from "vue-js-modal"
import Raven from "raven-js"
import RavenVue from "raven-js/plugins/vue"

import "./../node_modules/jquery/dist/jquery.min.js"
import "./../node_modules/materialize-css/dist/css/materialize.min.css"
import "./../node_modules/materialize-css/dist/js/materialize.min.js"

Vue.use(Vuelidate)
Vue.use(VueResource)
Vue.use(VModal, { dialog: true, dynamic: true })
Vue.config.productionTip = false

Vue.http.options.root = process.env.API_HOST

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>",
    store
})

if (process.env.NODE_ENV == "production") {
    Raven
        .config(process.env.RAVEN_URL)
        .addPlugin(RavenVue, Vue)
        .install()
}
