import { BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, NotAcceptableException, NotFoundException, UnauthorizedException } from "@nestjs/common";


export function handleGlobalCommonError(error:any){
    if (
    error instanceof ConflictException ||
    error instanceof NotFoundException ||
    error instanceof NotAcceptableException ||
    error instanceof UnauthorizedException ||
    error instanceof ForbiddenException ||
    error instanceof BadRequestException ||
    error instanceof RangeError
  ) {
    throw error;
  } else {
    throw new InternalServerErrorException(error.message);
  }
}