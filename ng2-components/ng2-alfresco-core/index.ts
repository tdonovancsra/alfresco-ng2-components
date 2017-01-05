/*!
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

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from 'ng2-translate/ng2-translate';

import {
    AuthService,
    ContentService,
    SettingsService,
    StorageService,
    AlfrescoApiService,
    AlfrescoTranslateLoader,
    AlfrescoTranslateService,
    RenditionsService,
    AuthGuard,
    AuthGuardEcm,
    AuthGuardBpm,
    LogService,

    /** @deprecated */ AlfrescoSettingsService,
    /** @deprecated */ AlfrescoTranslationService,
    /** @deprecated */ AlfrescoAuthenticationService,
    /** @deprecated */ AlfrescoContentService
} from './src/services/index';

import { MATERIAL_DESIGN_DIRECTIVES } from './src/components/material/index';
import { CONTEXT_MENU_PROVIDERS, CONTEXT_MENU_DIRECTIVES } from './src/components/context-menu/index';

export * from './src/services/index';
export * from './src/components/index';
export * from './src/utils/index';

export const ALFRESCO_CORE_PROVIDERS: any[] = [
    LogService,
    AuthService,
    ContentService,
    SettingsService,
    StorageService,
    AlfrescoApiService,
    AlfrescoTranslateLoader,
    AlfrescoTranslateService,
    RenditionsService,
    AuthGuard,
    AuthGuardEcm,
    AuthGuardBpm,
    ...CONTEXT_MENU_PROVIDERS,

    /** @deprecated */ AlfrescoAuthenticationService,
    /** @deprecated */ AlfrescoContentService,
    /** @deprecated */ AlfrescoSettingsService,
    /** @deprecated */ AlfrescoTranslationService
];

export function createTranslateLoader(http: Http) {
    return new AlfrescoTranslateLoader(http);
}

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        })
    ],
    declarations: [
        ...MATERIAL_DESIGN_DIRECTIVES,
        ...CONTEXT_MENU_DIRECTIVES
    ],
    providers: [
        ...ALFRESCO_CORE_PROVIDERS
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        TranslateModule,
        ...MATERIAL_DESIGN_DIRECTIVES,
        ...CONTEXT_MENU_DIRECTIVES
    ]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                ...ALFRESCO_CORE_PROVIDERS
            ]
        };
    }
}
