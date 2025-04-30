/*
  Warnings:

  - The values [Purchase,Provider,Product,Movement,Sale] on the enum `Entity` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `Movement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Provider` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Purchase` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PurchaseItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sale` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SaleItem` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ServiceCategory" AS ENUM ('SERVICIOS_INDIVIDUALES', 'PAQUETES_DE_SERVICIOS', 'TINTURACIÓN');

-- AlterEnum
BEGIN;
CREATE TYPE "Entity_new" AS ENUM ('User', 'Barber', 'Appointment', 'Service', 'AppointmentPayment');
ALTER TABLE "AuditLog" ALTER COLUMN "entity" TYPE "Entity_new" USING ("entity"::text::"Entity_new");
ALTER TYPE "Entity" RENAME TO "Entity_old";
ALTER TYPE "Entity_new" RENAME TO "Entity";
DROP TYPE "Entity_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Movement" DROP CONSTRAINT "Movement_productId_fkey";

-- DropForeignKey
ALTER TABLE "Purchase" DROP CONSTRAINT "Purchase_adminId_fkey";

-- DropForeignKey
ALTER TABLE "Purchase" DROP CONSTRAINT "Purchase_providerId_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseItem" DROP CONSTRAINT "PurchaseItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseItem" DROP CONSTRAINT "PurchaseItem_purchaseId_fkey";

-- DropForeignKey
ALTER TABLE "Sale" DROP CONSTRAINT "Sale_customerId_fkey";

-- DropForeignKey
ALTER TABLE "SaleItem" DROP CONSTRAINT "SaleItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "SaleItem" DROP CONSTRAINT "SaleItem_saleId_fkey";

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "category" "ServiceCategory" NOT NULL;

-- DropTable
DROP TABLE "Movement";

-- DropTable
DROP TABLE "Product";

-- DropTable
DROP TABLE "Provider";

-- DropTable
DROP TABLE "Purchase";

-- DropTable
DROP TABLE "PurchaseItem";

-- DropTable
DROP TABLE "Sale";

-- DropTable
DROP TABLE "SaleItem";

-- DropEnum
DROP TYPE "MovementType";

-- DropEnum
DROP TYPE "ProductCategory";

-- DropEnum
DROP TYPE "ReceiptType";

-- CreateTable
CREATE TABLE "BeardType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "imgs" TEXT[],

    CONSTRAINT "BeardType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DyeType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "imgs" TEXT[],

    CONSTRAINT "DyeType_pkey" PRIMARY KEY ("id")
);
