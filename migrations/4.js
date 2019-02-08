module.exports = function runMigration(migration) {
    const table = migration.editContentType("table");
    table
        .createField("winner")
        .name("winner")
        .type("Symbol")
        .required(false);

    migration.transformEntries({
        contentType: 'table',
        from: ['game'],
        to: ['winner'],
        transformEntryForLocale: function(fromFields, currentLocale) {
            var winner = "";
            fromFields.game[currentLocale].Players.forEach(function(player) {
                if (player['Score'] == 10) {
                    winner = player['Name'];
                }
            });
            console.log(winner);
            return { winner: winner };
        }
    });
    return;
};
