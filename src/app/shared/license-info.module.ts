import { LiscenseUserAssignee } from './license-user-assigned.module';
export class LicenseInfo
{
     constructor(public startDate?: Date,public expireDate?:Date,public noUsers?: Number,public usersLicenses?: LiscenseUserAssignee[]){}
}
