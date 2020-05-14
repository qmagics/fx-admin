const state = {
    component: null,
    visible: false,
    data: null,
    title: '',
}

const mutations = {
    SET_COMPONENT(state, component) {
        state.component = component;
    },
    SET_DATA(state, data) {
        state.data = data;
    },
    SET_TITLE(state, title) {
        state.title = title;
    },
    SHOW_MODAL(state) {
        state.visible = true;
    },
    HIDE_MODAL(state) {
        state.visible = false;
    },
}

const actions = {
    open({
        commit
    }, {
        component,
        title,
        data
    }) {
        commit('SET_COMPONENT', component);
        commit('SET_DATA', data);
        commit('SET_TITLE', title || '');
        commit('SHOW_MODAL');
    },
    close({
        commit
    }) {
        commit('SET_COMPONENT', null);
        commit('SET_DATA', null);
        commit('HIDE_MODAL');
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}