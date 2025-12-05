/*
  Warnings:

  - You are about to drop the column `image` on the `articles` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `portfolio_images` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `teams` table. All the data in the column will be lost.
  - Added the required column `image_id` to the `articles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `articles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_id` to the `portfolio_images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `portfolio_images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_id` to the `teams` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `teams` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `articles` DROP COLUMN `image`,
    ADD COLUMN `image_id` VARCHAR(255) NOT NULL,
    ADD COLUMN `image_url` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `portfolio_images` DROP COLUMN `image`,
    ADD COLUMN `image_id` VARCHAR(255) NOT NULL,
    ADD COLUMN `image_url` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `teams` DROP COLUMN `image`,
    ADD COLUMN `image_id` VARCHAR(255) NOT NULL,
    ADD COLUMN `image_url` VARCHAR(255) NOT NULL;
