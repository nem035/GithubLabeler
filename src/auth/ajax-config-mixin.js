import headers from './headers';

export default {
  ajaxConfig() {
    return {
      headers: headers(),
    };
  },
};
