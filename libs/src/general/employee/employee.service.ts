import { ConflictException, Injectable } from '@nestjs/common';
import { CreateNewEmployeeDto } from './dtos/create.dto';
import { handleGlobalCommonError } from '../common/handle.common';
import { PrismaService } from '@app/shared/prisma';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EmployeeService {
    constructor(private readonly prismaService: PrismaService){}

    async createNewEmpoyee(createUserDto:CreateNewEmployeeDto){
     try {
      const trimmedUserName = createUserDto.email.trim()
      await this.validateUserEmail(trimmedUserName)
      if(createUserDto.designation_id){
         await this.validateDesignationId(createUserDto.designation_id)
      }
      if(createUserDto.course_id){
         await this.validateCourseId(createUserDto.course_id)
      }
      const saltValue = await bcrypt.genSalt(10)

      const hashedPassword = await bcrypt.hash(createUserDto.password, saltValue)
      return await this.prismaService.$transaction(async (prisma)=>{
        const credentialData= await prisma.user_credentials.create({data:{
            username:createUserDto.email,
            password: hashedPassword
         }})

         const userInfoData= await prisma.user_info.create({
            data:{
               credential_id: credentialData.id,
               name: createUserDto.name,
               mobile_number_code: createUserDto.mobile_number_code,
               mobile_number: createUserDto.mobile_number,
               image: createUserDto.image_url,
               designation_id: createUserDto.designation_id,
               course_id: createUserDto.course_id
            },
            select:{
               id: true,
            }
         })
         return {id: userInfoData.id, email:credentialData.username }
      })

        
     } catch (error) {
        handleGlobalCommonError(error)
     }
    }

    async validateDesignationId(designationId:number){
      try {
         const designationData= await this.prismaService.designation.findUnique({
            where:{id: designationId},
            select:{name:true}
         })
         if(!designationData) throw new ConflictException('Designation does not exist.')
         return {designationName: designationData.name}
      } catch (error) {
         throw error;
      }
    }

    async validateCourseId(courseId:number){
      try {
         const courseData = await this.prismaService.course.findUnique({
          where:{id: courseId},
         select: {name: true, code: true}})
          if(!courseData!) throw new ConflictException('Course does not exist.')
         return { courseName: courseData.name, courseCode : courseData.code}
      } catch (error) {
         throw error;
      }
    }

    private async validateUserEmail(username:string){
      try {
         const emailValidate = await this.prismaService.user_credentials.findUnique({where:{
            username
         }})
         if(emailValidate) throw new ConflictException('Email already exists.')
         return true
         
      } catch (error) {
         throw error
      }
    }
}
