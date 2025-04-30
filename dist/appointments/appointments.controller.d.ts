import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { IUserSession } from 'src/common/interfaces/user-session.interface';
import { AppointmentQueryDto } from './dto/appointment-query.dto';
export declare class AppointmentsController {
    private readonly appointmentsService;
    constructor(appointmentsService: AppointmentsService);
    create(user: IUserSession, createAppointmentDto: CreateAppointmentDto): Promise<{
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
    findAll(params: AppointmentQueryDto): Promise<{
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
    findAllAppointementByDate(date: Date): Promise<{
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
    findAllAppointmentsToday(): Promise<{
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
    findAllAppointmentsByBarber(barberId: number): Promise<{
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
    findAllAppointmentsByUser(userId: number): Promise<{
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
    confirmAppointment(id: number): Promise<{
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
    startAppointment(id: number): Promise<{
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
    cancelAppointment(id: number): Promise<{
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
    completeAppointment(id: number): Promise<{
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
