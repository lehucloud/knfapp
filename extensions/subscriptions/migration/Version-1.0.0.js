const { execute, insert } = require('@evershop/postgres-query-builder');

// eslint-disable-next-line no-multi-assign
module.exports = exports = async (connection) => {
//   await execute(
//     connection,
//     `CREATE TABLE "attribute" (
//     "attribute_id" INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) PRIMARY KEY,
//     "uuid" UUID NOT NULL DEFAULT gen_random_uuid (),
//     "attribute_code" varchar NOT NULL,
//     "attribute_name" varchar NOT NULL,
//     "type" varchar NOT NULL,
//     "is_required" boolean NOT NULL DEFAULT FALSE,
//     "display_on_frontend" boolean NOT NULL DEFAULT FALSE,
//     "sort_order" INT NOT NULL DEFAULT 0,
//     "is_filterable" boolean NOT NULL DEFAULT FALSE,
//     CONSTRAINT "ATTRIBUTE_CODE_UNIQUE" UNIQUE ("attribute_code"),
//     CONSTRAINT "ATTRIBUTE_CODE_UUID_UNIQUE" UNIQUE ("uuid")
// )`
//   );

//   await execute(
//     connection,
//     `CREATE TABLE "attribute_option" (
//     "attribute_option_id" INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) PRIMARY KEY,
//     "uuid" UUID NOT NULL DEFAULT gen_random_uuid (),
//     "attribute_id" INT NOT NULL,
//     "attribute_code" varchar NOT NULL,
//     "option_text" varchar NOT NULL,
//     CONSTRAINT "ATTRIBUTE_OPTION_UUID_UNIQUE" UNIQUE ("uuid"),
//     CONSTRAINT "FK_ATTRIBUTE_OPTION" FOREIGN KEY ("attribute_id") REFERENCES "attribute" ("attribute_id") ON DELETE CASCADE
//   )`
//   );

};
