import { ApiHideProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ServiceCategory } from '@prisma/client';

export class CreateServiceDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @Type(() => Number)
  @IsNumber()
  price: number;

  @ApiHideProperty()
  @IsString()
  @IsOptional()
  img: string;

  @IsEnum(ServiceCategory)
  category: ServiceCategory;

  @Type(() => Boolean)
  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}
