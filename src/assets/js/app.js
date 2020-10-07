import $ from 'jquery';
import 'what-input';
import 'foundation-sites/js/foundation.core';


// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');
require('imagekit-javascript');
require('./playground');
require('./footer');
require('./scroll');
require('./extra');
require('lodash');
require('mailgo/dist/mailgo.min.js');
require('./marquee');
require('./about');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();