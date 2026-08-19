module.exports = {
 // Application process manager configurations
 apps: [
  {
   name: 'dolphin',
   script: 'npm',
   args: 'run dev',
   instances: 1, // '0 = max', -1 = all available minus 1 left to for OS
   exec_mode: 'cluster', // or 'fork'
   watch: false,
   env: {
    NODE_ENV: 'production'
   }
  }
 ],

 // Remote Deployment configurations
 deploy: {
  production: {
   user: 'ec2-user',
   host: '54.243.180.252',
   ref: 'origin/main',
   repo: 'git@github.com:manthanwar/JS-SVG-Client.git',
   path: '/home/ec2-user/GitHub/JS-SVG-Client',
   'pre-deploy-local': '',
   'post-deploy':
    'npm install && pm2 reload ecosystem.config.js --env production',
   'pre-setup': ''
  }
 }
};
