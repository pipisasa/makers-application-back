import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

import AdminBro, { AdminBroOptions } from 'admin-bro';
import { AdminModule } from '@admin-bro/nestjs';
import * as SequelizeAdapter from '@admin-bro/sequelize';
import { User } from '@app/db/user/user.entity';
import configuration from '@app/config';
import { GoogleSheetsModule } from '@app/google-sheets';
import { DatabaseModule } from '@app/db';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';
import { AdminModuleForService } from './_admin.module';

AdminBro.registerAdapter(SequelizeAdapter);

@Module({
  controllers: [AdminController],
  providers: [
    AdminService,
  ],
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'public'),
    // }),
    GoogleSheetsModule,
    DatabaseModule,
    AdminModule.createAdminAsync({
      imports: [
        AdminModuleForService,
      ],
      inject: [
        AdminService,
      ],
      useFactory: (
        adminService: AdminService,
      ): { adminBroOptions: AdminBroOptions; auth?: any } => ({
        adminBroOptions: {
          rootPath: '/admin',
          resources: [User],
          dashboard: {
            handler: async (req) => {
              const res: any = {
                sheetId: configuration().google.sheets.application,
              };
              if (req?.query?.type === 'GET_SHEET_ID') {
                return res;
              }
              if (req?.query?.type === 'SAVE_TO_SHEETS') {
                res.data = await adminService.saveToSheets();
                return res;
              }
              return Promise.resolve({ message: 'SEND TYPE' });
            },
            component: AdminBro.bundle('./Dashboard'),
          },
          branding: {
            companyName: 'Makers Application Admin Panel',
            favicon: '/favicon.png',
            softwareBrothers: false,
            logo: '/logo.svg',
          },
        },
        // auth: {
        //   authenticate: async (email: string, password: string) => {
        //     if (email === 'demo@demo.com' && password === 'demo')
        //       return Promise.resolve({ email });
        //     return null;
        //   },
        //   cookieName: 'adminBroCookie',
        //   cookiePassword: 'demo',
        // },
      }),
    }),
  ],
})
export class AdminBroModule {}
