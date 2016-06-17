import xhr from 'xhr';
import extend from 'lodash.assign';
import headers from './headers';

export default (attrs) => {
  const attributes = extend({}, attrs, {
    headers: headers(),
  });

  xhr(attributes);
};
