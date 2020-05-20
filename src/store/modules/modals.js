const state = {
    modal_list: []
}

function getModalByIndex(index) {
    return state.modal_list[index] || null;
}

function getIndexById(id) {
    return state.modal_list.findIndex(m => m.id === id);
}

const mutations = {
    ADD_MODAL(state, modal) {
        state.modal_list.push(modal);
    },

    DELETE_MODAL(state, index) {
        state.modal_list.splice(index, 1);
    },

    CLEAR_ALL_MODAL(state) {
        state.modal_list = [];
    },

    SET_COMPONENT(state, index, component) {
        const modal = getModalByIndex(index);

        if (modal) {
            modal.component = component;
        }
    },

    SET_DATA(state, index, data) {
        const modal = getModalByIndex(index);

        if (modal) {
            modal.data = data;
        }
    },

    SET_TITLE(state, index, title) {
        const modal = getModalByIndex(index);

        if (modal) {
            modal.title = title;
        }
    },

    SET_VISIBLE(state, index, visible) {
        const modal = getModalByIndex(index);

        if (modal) {
            modal.visible = visible;
        }
    },
    
    SET_ACTIONS(state, index, actions){
        const modal = getModalByIndex(index);

        if (modal) {
            modal.actions = actions;
        }
    }
}

const actions = {
    open({
        commit
    }, modal) {
        commit('ADD_MODAL', modal);
    },

    close({
        commit
    }, modalId) {
        const index = getIndexById(modalId, state);

        if (index >= 0) {
            commit('SET_COMPONENT', index, null);
            commit('SET_TITLE', index, '');
            commit('SET_ACTIONS', index, []);
            commit('SET_DATA', index, null);
            commit('SET_VISIBLE', index, false);
            commit('DELETE_MODAL', index);
        }
    },

    closeAll({ commit }) {
        commit('CLEAR_ALL_MODAL');
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}