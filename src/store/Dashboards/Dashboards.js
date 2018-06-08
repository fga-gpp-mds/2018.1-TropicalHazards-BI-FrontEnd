// import Project from "./Project.js" dedicir se vai ser usado
/* eslint-disable */
import Vue from 'vue'
const SET_DASHBOARDS = 'SET_DASHBOARDS'

const state = {
    dashboards: []
}

const getters = {
    getDashboards: state =>{
        return state.dashboards
    },
    getDashboardsLength: state =>{
        return state.dashboards.length
    }
}

const mutations = {
    [SET_DASHBOARDS](state, payload){
        // Vue.set(state, projects, payload) - EVENTO PARA GERAR REATIVIDADE MAYBE
        state.dashboards = payload
    }
}

const actions = {
    loadDashboards ({commit}){
        return new Promise((resolve, reject)=>{
            Vue.http.get("dashboards/", { headers: { "content-type": "application/json" } }).then(response => {
                commit(SET_DASHBOARDS, response.data)
                resolve()
            },
            error => {
                reject()
            })
        })
    }
}

export default {
    name: 'dashboards',
    state,
    mutations,
    getters,
    actions
}

