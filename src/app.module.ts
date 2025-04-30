import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { AppService } from './app.service';
import { ServicesModule } from './services/services.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { HaircutsModule } from './haircuts/haircuts.module';
import { PaymentsModule } from './payments/payments.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ServicesModule,
    AppointmentsModule,
    HaircutsModule,
    PaymentsModule,
    CloudinaryModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule,
  ],
  controllers: [AppController],
  providers: [PrismaService, AuthService, CloudinaryService, AppService],
})
export class AppModule {}
