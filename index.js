/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-fbq',

  contentFor: function(type, config) {
    if (type === 'head-footer' && config.fbq && config.fbq.enabled && config.fbq.ids) {
      let initIds = '';
      config.fbq.ids.forEach(id => {
        initIds += 'fbq("init", "' + id + '");'
      });
      return '<script type="text/javascript">!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");' + initIds + '</script>'
    }
  }
};
