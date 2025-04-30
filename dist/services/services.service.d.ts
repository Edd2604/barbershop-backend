import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class ServicesService {
    private readonly db;
    private readonly cloudinaryService;
    constructor(db: PrismaService, cloudinaryService: CloudinaryService);
    create(createServiceDto: CreateServiceDto, file?: Express.Multer.File): Promise<{
        description: string;
        name: string;
        isActive: boolean;
        img: string | null;
        id: number;
        isArchived: boolean;
        price: Prisma.Decimal;
        category: import(".prisma/client").$Enums.ServiceCategory;
    }>;
    findAll({ limit, page, query, status }: SearchStatusQueryDto): Prisma.PrismaPromise<{
        description: string;
        name: string;
        isActive: boolean;
        img: string | null;
        id: number;
        isArchived: boolean;
        price: Prisma.Decimal;
        category: import(".prisma/client").$Enums.ServiceCategory;
    }[]>;
    findOne(id: number): Promise<{
        description: string;
        name: string;
        isActive: boolean;
        img: string | null;
        id: number;
        isArchived: boolean;
        price: Prisma.Decimal;
        category: import(".prisma/client").$Enums.ServiceCategory;
    }>;
    update(id: number, updateServiceDto: UpdateServiceDto, file?: Express.Multer.File): Promise<{
        description: string;
        name: string;
        isActive: boolean;
        img: string | null;
        id: number;
        isArchived: boolean;
        price: Prisma.Decimal;
        category: import(".prisma/client").$Enums.ServiceCategory;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
