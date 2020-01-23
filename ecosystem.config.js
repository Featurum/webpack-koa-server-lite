module.exports = {
    apps : [{
        name: 'Node Main Server',
        script: 'dist/app.js',
        exec_mode: 'cluster_mode',
        autorestart: true,
        watch: true,
        env: {
            NODE_ENV: 'development'
        },
        env_production: {
            NODE_ENV: 'production'
        }
    }]
};
