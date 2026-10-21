import { Module } from '@nestjs/common';
import {  EmployeeServiceModule } from './employee/employee.module';

@Module({
  imports: [EmployeeServiceModule]
})
export class GeneralServiceModule {}
