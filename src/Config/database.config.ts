import "dotenv-flow/config";

const _default = process.env.DB_CONNECTION || "sqlite";

const connections = {

    sqlite: {
        "driver": "sqlite",
        "url": process.env.DB_URL,
        "database": process.env.DB_DATABASE,
        "prefix": "",
        "foreign_key_constraints": process.env.DB_FOREIGN_KEYS || true,
        "busy_timeout": null,
        "journal_mode": null,
        "synchronous": null,
    },

    mysql: {
        "driver": "mysql",
        "url": process.env.DB_URL,
        "host": process.env.DB_HOST || "127.0.0.1",
        "port": process.env.DB_PORT || "3306",
        "database": process.env.DB_DATABASE || "",
        "username": process.env.DB_USERNAME || "root",
        "password": process.env.DB_PASSWORD ||  "",
        "unix_socket": process.env.DB_SOCKET || "",
        "charset": process.env.DB_CHARSET || "utf8mb4",
        "collation": process.env.DB_COLLATION || "utf8mb4_unicode_ci",
        "prefix": "",
        "prefix_indexes": true,
        "strict": true,
        "engine": null,
        "options": [],
    },

    mariadb: {
        "driver": "mariadb",
        "url": process.env.DB_URL,
        "host": process.env.DB_HOST || "127.0.0.1",
        "port": process.env.DB_PORT || "3306",
        "database": process.env.DB_DATABASE || "",
        "username": process.env.DB_USERNAME || "root",
        "password": process.env.DB_PASSWORD ||  "",
        "unix_socket": process.env.DB_SOCKET || "",
        "charset": process.env.DB_CHARSET || "utf8mb4",
        "collation": process.env.DB_COLLATION || "utf8mb4_unicode_ci",
        "prefix": "",
        "prefix_indexes": true,
        "strict": true,
        "engine": null,
        "options": [],
    },
    
    mssql: {
        "driver": "sqlsrv",
        "url": process.env.DB_URL,
        "host": process.env.DB_HOST || "localhost",
        "port": process.env.DB_PORT || "1433",
        "database": process.env.DB_DATABASE || "laravel",
        "username": process.env.DB_USERNAME || "root",
        "password": process.env.DB_PASSWORD || "",
        "charset": process.env.DB_CHARSET || "utf8",
        "prefix": "",
        "prefix_indexes": true,
        // "encrypt": process.env.DB_ENCRYPT || "yes",
        // "trust_server_certificate": process.env.DB_TRUST_SERVER_CERTIFICATE || false,
    },
    
    pgsql: {
        "driver": "pgsql",
        "url": process.env.DB_URL,
        "host": process.env.DB_HOST || "127.0.0.1",
        "port": process.env.DB_PORT || "5432",
        "database": process.env.DB_DATABASE || "laravel",
        "username": process.env.DB_USERNAME || "root",
        "password": process.env.DB_PASSWORD || "",
        "charset": process.env.DB_CHARSET || "utf8",
        "prefix": "",
        "prefix_indexes": true,
        "search_path": "public",
        "sslmode": "prefer",
    },

    oracle: {
        "driver": "oracle",
        "url": process.env.DB_URL,
        "host": process.env.DB_HOST || "localhost",
        "port": process.env.DB_PORT || "1521",
        "database": process.env.DB_DATABASE || "",
        "username": process.env.DB_USERNAME || "system",
        "password": process.env.DB_PASSWORD || "",
        "prefix": "",
    },

    mongodb: {
        "driver": "mongodb",
        "url": process.env.DB_URL,
        "host": process.env.DB_HOST || "localhost",
        "port": process.env.DB_PORT || "27017",
        "database": process.env.DB_DATABASE || "",
        "username": process.env.DB_USERNAME || "",
        "password": process.env.DB_PASSWORD || "",
        "options": {
            "authSource": process.env.DB_AUTH_SOURCE || "admin",
            "ssl": process.env.DB_SSL || false,
        },
    },

    couchdb: {
        "driver": "couchdb",
        "url": process.env.DB_URL,
        "host": process.env.DB_HOST || "localhost",
        "port": process.env.DB_PORT || "5984",
        "database": process.env.DB_DATABASE || "",
        "username": process.env.DB_USERNAME || "",
        "password": process.env.DB_PASSWORD || "",
        "prefix": "",
    },
    
};

const migrations = {
    "table": "migrations",
    "update_date_on_publish": true,
};

const redis = {

        client: process.env.REDIS_CLIENT || 'phpredis',

        options: {
            'cluster': process.env.REDIS_CLUSTER || 'redis',
            'prefix': process.env.REDIS_PREFIX || [( process.env.APP_NAME || "laravel" ), "_", "_database_"].join(),
        },

        default: {
            'url': process.env.REDIS_URL,
            'host': process.env.REDIS_HOST || '127.0.0.1',
            'username': process.env.REDIS_USERNAME,
            'password': process.env.REDIS_PASSWORD,
            'port': process.env.REDIS_PORT || '6379',
            'database': process.env.REDIS_DB || '0',
        },

        cache: {
            'url': process.env.REDIS_URL,
            'host': process.env.REDIS_HOST || '127.0.0.1',
            'username': process.env.REDIS_USERNAME,
            'password': process.env.REDIS_PASSWORD,
            'port': process.env.REDIS_PORT || '6379',
            'database': process.env.REDIS_CACHE_DB || '1',
        },

};


export {
    _default,
    connections,
    migrations,
    redis
}