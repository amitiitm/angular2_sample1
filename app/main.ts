import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import {HTTP_PROVIDERS} from '@angular/http'
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';

bootstrap(AppComponent,[HTTP_PROVIDERS]);
