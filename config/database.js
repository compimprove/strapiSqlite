const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', 'sqlite_db/data.db')),
    },
    useNullAsDefault: true,
  },
});
