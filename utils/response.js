'use strict';

class Response {

    static BAD_REQUEST(msg) {
        return { code: 401, msg: msg };
    }

    static SUCCESS(msg, data) {
        return { code: 200, msg: msg, data: data };
    }

    static SERVER_ERROR(msg, error) {
        return { code: 500, msg: msg, error: error }
    }

    static CUSTOM(code, msg, data) {
        return { code: code, msg: msg, data: data };
    }
}

module.exports = Response;