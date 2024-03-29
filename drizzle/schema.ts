import { mysqlTable, mysqlSchema, AnyMySqlColumn, foreignKey, primaryKey, bigint, varchar, index } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const authOtp = mysqlTable("auth_otp", {
	id: bigint("id", { mode: "number" }).autoincrement().notNull(),
	phone: varchar("phone", { length: 256 }),
	userId: bigint("user_id", { mode: "number" }).references(() => users.id),
},
(table) => {
	return {
		authOtpId: primaryKey({ columns: [table.id], name: "auth_otp_id"}),
	}
});

export const users = mysqlTable("users", {
	id: bigint("id", { mode: "number" }).autoincrement().notNull(),
	fullName: varchar("full_name", { length: 256 }),
},
(table) => {
	return {
		nameIdx: index("name_idx").on(table.fullName),
		usersId: primaryKey({ columns: [table.id], name: "users_id"}),
	}
});