CREATE TABLE `auth_otp` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`phone` varchar(256),
	`user_id` bigint,
	CONSTRAINT `auth_otp_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`full_name` varchar(256),
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `name_idx` ON `users` (`full_name`);--> statement-breakpoint
ALTER TABLE `auth_otp` ADD CONSTRAINT `auth_otp_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;