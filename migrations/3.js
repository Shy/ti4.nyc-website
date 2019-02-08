module.exports = function runMigration(migration) {
    const table = migration.editContentType("table");
    table
        .deleteField("winner");
  return;
};
