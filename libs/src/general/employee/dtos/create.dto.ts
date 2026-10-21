import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";


export class CreateNewEmployeeDto {

   @ApiProperty({description: 'first name , middle name , last name',type: String,required: true,example: 'Ankit kumar singh'})
   @IsString()
   name! : string;

  @ApiProperty({description: 'Enter Email',type: String,required: true,example: 'ankit@employee.com'})
   @IsEmail()
   email! : string;

  @ApiProperty({description: 'Enter password',type: String,required: true,example: 'Ankit@123'})
   @IsString()
   password! : string;

   @ApiProperty({description: 'Enter mobile number code',type: String,required: false,example: '91'})
   @IsString()
   @IsOptional()
   mobile_number_code? :string

    @ApiProperty({description: 'Enter mobile number',type: String,required: false,example: '876677777'})
   @IsString()
   @IsOptional()
   mobile_number?: string

  @ApiProperty({description: 'Enter designation id',type: Number,required: false,example: 'null'})
   @IsNumber()
   @IsOptional()
   designation_id?: number


   @ApiProperty({description: 'Enter course id',type: Number,required: false,example: 'null'})
   @IsNumber()
   @IsOptional()
   course_id? : number

  @ApiProperty({description: 'Enter image url',type: String,required: false,example: 'www.image.com'})
   @IsString()
   @IsOptional()
   image_url? : string
}