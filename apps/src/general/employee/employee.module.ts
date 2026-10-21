import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeServiceModule } from '@app/shared/general/employee/employee.module';

@Module({
  imports:[EmployeeServiceModule],
  controllers: [EmployeeController]
})
export class EmployeeModule {}
