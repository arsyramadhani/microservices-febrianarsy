const redisClient = require('redis').createClient;
const redis = redisClient(6379, 'localhost');

redis.on("connect", () => {
    console.log('connected to Redis');
});

module.exports = redis