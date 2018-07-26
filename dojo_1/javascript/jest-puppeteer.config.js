module.exports = {
    server: {
        command: 'node server.js',
        port: 4444,
    },
    launch: {
        dumpio: true,
        headless: process.env.HEADLESS !== 'false',
    },
};