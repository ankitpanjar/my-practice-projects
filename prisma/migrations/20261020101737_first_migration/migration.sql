-- CreateTable
CREATE TABLE `user_credentials` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NULL,
    `refresh_token` VARCHAR(500) NOT NULL,

    UNIQUE INDEX `user_credentials_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_info` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `credential_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `is_primary` BOOLEAN NOT NULL DEFAULT false,
    `mobile_number_code` VARCHAR(191) NULL,
    `mobile_number` VARCHAR(191) NULL,
    `image` MEDIUMTEXT NULL,

    UNIQUE INDEX `user_info_credential_id_key`(`credential_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_info` ADD CONSTRAINT `user_info_credential_id_fkey` FOREIGN KEY (`credential_id`) REFERENCES `user_credentials`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
