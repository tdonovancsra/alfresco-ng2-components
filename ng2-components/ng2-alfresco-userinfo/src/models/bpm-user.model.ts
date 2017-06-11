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

export class BpmUserModel {
    public apps: any;
    public capabilities: string;
    public company: string;
    public created: string;
    public email: string;
    public externalId: string;
    public firstName: string;
    public lastName: string;
    public fullname: string;
    public fullNameDisplay: string;
    public groups: any;
    public id: string;
    public lastUpdate: string;
    public latestSyncTimeStamp: string;
    public password: string;
    public pictureId: string;
    public status: string;
    public tenantId: string;
    public tenantName: string;
    public tenantPictureId: string;
    public type: string;

    constructor(obj?: any) {
        this.apps = obj && obj.apps || null;
        this.capabilities = obj && obj.capabilities || false;
        this.company = obj && obj.company || null;
        this.created = obj && obj.created || null;
        this.email = obj && obj.email || null;
        this.externalId = obj && obj.externalId || null;
        this.firstName = obj && obj.firstName;
        this.lastName = obj && obj.lastName;
        this.fullname = obj && obj.fullname;
        this.fullNameDisplay = obj ? this.formatValue(obj.firstName).trim() + ' ' + this.formatValue(obj.lastName).trim() : null;
        this.groups = obj && obj.groups || null;
        this.id = obj && obj.id || null;
        this.lastUpdate = obj && obj.lastUpdate;
        this.latestSyncTimeStamp = obj && obj.latestSyncTimeStamp;
        this.password = obj && obj.password;
        this.pictureId = obj && obj.pictureId;
        this.status = obj && obj.status;
        this.tenantId = obj && obj.tenantId;
        this.tenantName = obj && obj.tenantName;
        this.tenantPictureId = obj && obj.tenantPictureId;
        this.type = obj && obj.type;
    }

    private formatValue(value: string): string {
        return value && value !== 'null' ? value : 'N/A';
    }
}
