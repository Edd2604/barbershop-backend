import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServicesService } from 'src/services/services.service';
import { UsersService } from 'src/users/users.service';
import { AppointmentQueryDto } from './dto/appointment-query.dto';
import { AppointmentStatus } from '@prisma/client';
export declare class AppointmentsService {
    private readonly db;
    private readonly servicesService;
    private readonly usersService;
    constructor(db: PrismaService, servicesService: ServicesService, usersService: UsersService);
    create(createAppointmentDto: CreateAppointmentDto): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }>;
    findAll({ limit, page, from_date, status, to_date, }: AppointmentQueryDto): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }[]>;
    findOne(id: number): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }>;
    update(id: number, updateAppointmentDto: UpdateAppointmentDto): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
    findAppointmentsByDay(date: Date): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }[]>;
    findAppointmentsToday(): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }[]>;
    findAppointmentsByBarber(id: number, date?: Date): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }[]>;
    findAppointmentsByCustomer(id: number, date?: Date): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }[]>;
    updateStatus(id: number, status: AppointmentStatus): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }>;
}
