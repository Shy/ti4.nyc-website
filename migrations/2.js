module.exports = function runMigration(migration) {
    const table = migration.editContentType("table");
    table
        .createField("winner")
        .name("winner")
        .type("Symbol")
        .required(false);
  return;
};
