import { serial, text, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput', {
  id: serial('id').primaryKey(),
  formData: varchar('formData').notNull(),
  aiResponse: text('aiResponse'),
  templateSlug: varchar('templateSlug'),
  createdBy: varchar('createdBy').notNull(), // Ensure this column matches with the code
  createdAt: varchar('createdAt'),
});
