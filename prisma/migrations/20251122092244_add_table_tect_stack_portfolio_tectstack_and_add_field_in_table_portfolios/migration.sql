/*
  Warnings:

  - Added the required column `client_name` to the `portfolios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnail_id` to the `portfolios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnail_url` to the `portfolios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `portfolios` ADD COLUMN `client_name` VARCHAR(30) NOT NULL,
    ADD COLUMN `thumbnail_id` VARCHAR(255) NOT NULL,
    ADD COLUMN `thumbnail_url` VARCHAR(255) NOT NULL;

-- CreateTable
CREATE TABLE `techstack` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `portfolio_techstack` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `portfolioId` INTEGER NOT NULL,
    `techstackId` INTEGER NOT NULL,

    UNIQUE INDEX `portfolio_techstack_portfolioId_techstackId_key`(`portfolioId`, `techstackId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `portfolio_techstack` ADD CONSTRAINT `fk_portfolio_techstack` FOREIGN KEY (`portfolioId`) REFERENCES `portfolios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `portfolio_techstack` ADD CONSTRAINT `fk_tectstack_portfolio` FOREIGN KEY (`techstackId`) REFERENCES `techstack`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
