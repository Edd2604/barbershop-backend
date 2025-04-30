import { ServiceCategory } from '@prisma/client';
export declare class CreateServiceDto {
    name: string;
    description: string;
    price: number;
    img: string;
    category: ServiceCategory;
    isActive: boolean;
}
