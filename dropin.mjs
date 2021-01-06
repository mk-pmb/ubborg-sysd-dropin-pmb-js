// -*- coding: utf-8, tab-width: 2 -*-

import mustBe from 'typechecks-pmb/must-be';


function expandUnitNameToPath(un) {
  if (un.startsWith('/')) { return un; }
  const prefix = (/^(\w+):/.exec(un) || false);
  return ('/' + (prefix[1] || 'lib') + '/systemd/system/'
    + un.slice((prefix[0] || '').length));
}


function mustEndWith(s, e) { return (s.endsWith(e) ? s : s + e); }


function dropIn(unitName, confBaseName, content) {
  mustBe.nest('unitName', unitName);
  mustBe.nest('confBaseName', confBaseName);
  mustBe('nul | dictObj', 'content', content);
  const sp = {
    pathPre: mustEndWith(expandUnitNameToPath(unitName), '.d') + '/',
    path: confBaseName,
    pathSuf: '.conf',
    mimeType: (content && 'static_ini'),
    ...(content && { content }),
  };
  return sp;
}


export default dropIn;
