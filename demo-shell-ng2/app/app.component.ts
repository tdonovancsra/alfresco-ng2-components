/**
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Authentication} from 'ng2-alfresco-login/ng2-alfresco-login';
import {MDL} from 'ng2-alfresco-core/material';
import {FilesComponent} from './components/files/files.component';
import {Login} from 'ng2-alfresco-login/ng2-alfresco-login';
import {AuthRouterOutlet} from './components/router/AuthRouterOutlet';
import {UploaderComponent} from './components/uploader/uploader.component';
import {AlfrescoSettingsService} from 'ng2-alfresco-core/services';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

declare var document: any;

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, AuthRouterOutlet, MDL],
    pipes: [TranslatePipe]
})
@RouteConfig([
    {path: '/home', name: 'Home', component: FilesComponent},
    {path: '/', name: 'Files', component: FilesComponent, useAsDefault: true},
    {path: '/uploader', name: 'Uploader', component: UploaderComponent},
    {path: '/login', name: 'Login', component: Login}
])
export class AppComponent {
    translate: TranslateService;

    constructor(public auth:Authentication,
                public router:Router,
                translate: TranslateService,
                alfrescoSettingsService:AlfrescoSettingsService) {
        alfrescoSettingsService.host = 'http://192.168.99.100:8080';

        this.translationInit(translate);
    }

    isActive(instruction:any[]):boolean {
        return this.router.isRouteActive(this.router.generate(instruction));
    }

    isLoggedIn():boolean {
        return this.auth.isLoggedIn();
    }

    onLogout(event) {
        event.preventDefault();
        this.auth.logout()
            .subscribe(
                () => this.router.navigate(['Login'])
            );
    }

    changeLanguage(lang:string) {
        this.translate.use(lang);
    }

    translationInit(translate: TranslateService) {
        this.translate = translate;
        let userLang = navigator.language.split('-')[0]; // use navigator lang if available
        userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';

        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('en');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use(userLang);
    }

    hideDrawer() {
        // todo: workaround for drawer closing
        document.querySelector('.mdl-layout').MaterialLayout.toggleDrawer();
    }
}
