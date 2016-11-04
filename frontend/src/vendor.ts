// angular2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/router';

import 'rxjs';
import 'bootstrap-loader';
import 'font-awesome-sass-loader';
import 'admin-lte';
import 'admin-lte/plugins/jQueryUI/jquery-ui.min.js';
import 'admin-lte/plugins/fullcalendar/fullcalendar.min.js';
import 'lodash';

if (ENV === 'production') {
  // prod
} else {
  // dev
  require('angular2-hmr');
}
