/*
  Warnings:

  - Made the column `isSuper` on table `admins` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isDeleted` on table `admins` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "admins" ALTER COLUMN "isSuper" SET NOT NULL,
ALTER COLUMN "isDeleted" SET NOT NULL;
