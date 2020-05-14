import Modal from './Modal.vue';
import store from '@/store';

Modal.install = (Vue, /*opt = {}*/) => {

    Vue.prototype.$modal = (options) => {
        store.dispatch('modal/open', options)
    }

    Vue.prototype.$modal.close = () => {
        store.dispatch('modal/close')
    }

}

export default Modal;