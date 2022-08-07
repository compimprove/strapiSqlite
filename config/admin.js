module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b39a1811c4d7ccd3ae1ed564d93c7392'),
  },
});
