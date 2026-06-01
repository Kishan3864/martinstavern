// PM2 process definition for Martin's Tavern.
//
// Runs the production Next.js server. The PORT below must match the upstream
// port in the Nginx vhost. Change it if 3007 is already taken on your VPS.
module.exports = {
  apps: [
    {
      name: "martinstavern",
      cwd: __dirname,
      script: "./node_modules/next/dist/bin/next",
      args: "start",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_memory_restart: "400M",
      env: {
        NODE_ENV: "production",
        PORT: 3007,
      },
    },
  ],
};
