import "dotenv-flow/config";


const _default = process.env.CACHE_STORE || "database";

const storage = {
    array: {
        "driver": "array",
        "serialize": false,
    },
    
    database: {
        "driver": process.env.MSSQL_PORT || "database",
        "connection": process.env.DB_CACHE_CONNECTION,
        "table": process.env.DB_CACHE_TABLE || "cache",
        "lock_connection": process.env.DB_CACHE_LOCK_CONNECTION,
        "lock_table": process.env.DB_CACHE_LOCK_TABLE
    },
    
    file: {
        "driver": "file",
        "path": "framework/cache/data",
        "lock_path": "framework/cache/data"
    },
    
    memcached: {
        "driver":"memcached",
        "persistent_id": process.env.MEMCACHED_PERSISTENT_ID,
        "sasl":[
            process.env.MEMCACHED_USERNAME,
            process.env.MEMCACHED_PASSWORD
        ],
        "options":[
            // Memcached::OPT_CONNECT_TIMEOUT:2000,
        ],
        "servers":[
            {
                "host": process.env.MEMCACHED_HOST || "127.0.0.1",
                "port": process.env.MEMCACHED_PORT || 11211,
                "weight": 100,
            },
        ],
    },
    
    redis: {
        "driver": "redis",
        "connection": process.env.REDIS_CACHE_CONNECTION || "cache",
        "lock_connection": process.env.REDIS_CACHE_LOCK_CONNECTION || "default",
    },
    
    dynamodb: {
        "driver": "dynamodb",
        "key": process.env.AWS_ACCESS_KEY_ID,
        "secret": process.env.AWS_SECRET_ACCESS_KEY,
        "region": process.env.AWS_DEFAULT_REGION || "us-east-1",
        "table": process.env.DYNAMODB_CACHE_TABLE || "cache",
        "endpoint": process.env.DYNAMODB_ENDPOINT,
    },
    
    octane: {
        "driver": "octane",
    }
};

const prefix = process.env.CACHE_PREFIX || [( process.env.APP_NAME || "typescript-express" ), "_", "_cache_"].join();


export {
    _default,
    storage,
    prefix
}