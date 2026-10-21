import { CreateNewEmployeeDto } from '@app/shared/general/employee/dtos/create.dto';
import { EmployeeService } from '@app/shared/general/employee/employee.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService){}
    

    @Post('create')
    createNewEmployeeData(@Body() createUserDto: CreateNewEmployeeDto){
        return this.employeeService.createNewEmpoyee(createUserDto)
    }
}
