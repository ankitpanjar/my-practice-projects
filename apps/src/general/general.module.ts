import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { GeneralServiceModule } from '@app/shared/general/general.module';

@Module({

  imports: [EmployeeModule,GeneralServiceModule]
})
export class GeneralModule {}
