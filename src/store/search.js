import { setI18Locale } from "../language";

// initial state
const state = () => ({
    seasrchValue: '',
    language: 'en',
});

const getters = {};

const actions = {
    searchTut({ commit }, value) {
        commit('setSearchValue', value)
    },
    setLang({ commit }, payload) {
        commit('SET_LANG', payload)
    }
};

const mutations = {
    setSearchValue(state, searchValue) {
        state.seasrchValue = searchValue;
    },
    SET_LANG(state, payload) {
        state.language = payload
        setI18Locale(payload)
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}