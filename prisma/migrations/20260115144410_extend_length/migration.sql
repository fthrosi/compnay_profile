-- AlterTable
ALTER TABLE `articles` MODIFY `title` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `category_articles` MODIFY `name` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `category_portfolios` MODIFY `name` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `portfolios` MODIFY `name` VARCHAR(255) NOT NULL,
    MODIFY `client_name` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `roles` MODIFY `name` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `techstack` MODIFY `name` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `name` VARCHAR(255) NOT NULL;
