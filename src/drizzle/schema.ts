import { relations } from "drizzle-orm";
import { index, text, timestamp, pgTable } from "drizzle-orm/pg-core";

const createdAt = timestamp("createdAt").notNull().defaultNow();
const updatedAt = timestamp("updatedAt").notNull().defaultNow().$onUpdate(() => new Date());

// Company Table
export const CompanyTable = pgTable(
  "companies",
  {
    id: text("id").primaryKey(), // User-entered ID
    companyName: text("companyName").notNull(),
    createdAt,
    updatedAt,
  },
  (t) => [index("companyNameIndex").on(t.companyName)]
);

// Truck Table
export const TruckTable = pgTable(
  "trucks",
  {
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    createdAt,
    updatedAt,
  }
);

// Orders Table
export const OrdersTable = pgTable(
  "orders",
  {
    id: text("id").primaryKey(),
    companyId: text("companyId").notNull().references(() => CompanyTable.id, { onDelete: "cascade" }),
    companyName: text("companyName").notNull(),
    description: text("description").notNull(),
    dateOfArrival: timestamp("dateOfArrival").notNull(),
    location: text("location").notNull(),
    createdAt,
    updatedAt,
  },
  (t) => [index("companyIdIndex").on(t.companyId)]
);

// Relations
export const companyRelations = relations(CompanyTable, ({ many }) => ({
  orders: many(OrdersTable),
}));

export const ordersRelations = relations(OrdersTable, ({ one }) => ({
  company: one(CompanyTable, {
    fields: [OrdersTable.companyId],
    references: [CompanyTable.id],
  }),
}));
