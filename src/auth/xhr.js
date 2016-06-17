import xhr from 'xhr';
import extend from 'lodash.assign';
import headers from './headers';

export default (attrs, cb = () => {}) => {
  const attributes = extend({}, attrs, {
    headers: headers(),
  });

  xhr(attributes, cb);
};
