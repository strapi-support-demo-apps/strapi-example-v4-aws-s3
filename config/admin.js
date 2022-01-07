module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9bf31a7217460d60ebd1a7014fe3c7c6'),
  },
});
