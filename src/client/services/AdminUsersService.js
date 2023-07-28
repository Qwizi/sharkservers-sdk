"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUsersService = void 0;
class AdminUsersService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Admin Get Users
     * Admin route to get users list
     * :param admin_user:
     * :param users_service:
     * :param params:
     * :return Page[UserOutWithEmail]:
     * @param page
     * @param size
     * @returns Page_User_ZJK_ Successful Response
     * @throws ApiError
     */
    adminGetUsers(page = 1, size = 50) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/admin/users',
            query: {
                'page': page,
                'size': size,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Admin Create User
     * Admin create user
     * :param user_data:
     * :param user:
     * :return UserOutWithEmail:
     * @param requestBody
     * @returns User_ZJK Successful Response
     * @throws ApiError
     */
    adminCreateUser(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/admin/users',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Admin Get User
     * Admin route to get user
     * :param admin_users:
     * :param user:
     * :return UserOutWithEmail:
     * @param userId
     * @returns User_ZJK Successful Response
     * @throws ApiError
     */
    adminGetUser(userId) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/admin/users/{user_id}',
            path: {
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Admin Update User
     * @param userId
     * @param requestBody
     * @returns User_ZJK Successful Response
     * @throws ApiError
     */
    adminUpdateUser(userId, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/admin/users/{user_id}',
            path: {
                'user_id': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Admin Delete User
     * Admin delete user
     * :param users_service:
     * :param validate_user:
     * :param user_id:
     * :param admin_user:
     * :return dict:
     * @param userId
     * @returns any Successful Response
     * @throws ApiError
     */
    adminDeleteUser(userId) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/admin/users/{user_id}',
            path: {
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Admin Ban User
     * Admin ban user
     * :param ban_data:
     * :param ban_service:
     * :param user:
     * :return dict:
     * @param userId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    adminBanUser(userId, requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/admin/users/{user_id}/ban',
            path: {
                'user_id': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Admin Unban User
     * Admin unban user
     * :param ban_service:
     * :param user:
     * :return dict:
     * @param userId
     * @returns any Successful Response
     * @throws ApiError
     */
    adminUnbanUser(userId) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/admin/users/{user_id}/unban',
            path: {
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
exports.AdminUsersService = AdminUsersService;
