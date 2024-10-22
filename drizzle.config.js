/** @type { import ("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",  // Keeping it as .tsx for React
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://neondb_owner:MRWe5QXKu1FH@ep-fancy-brook-a5jq5vxl.us-east-2.aws.neon.tech/AI-Content-Generator?sslmode=require',  // Corrected the key to `connectionString`
  },
};
