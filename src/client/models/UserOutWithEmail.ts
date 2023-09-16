/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Ban_ERT } from './Ban_ERT';
import type { Role_HFV } from './Role_HFV';

export type UserOutWithEmail = {
    created_at?: string;
    updated_at?: string;
    id?: number;
    username: string;
    email: string;
    is_activated?: boolean;
    is_superuser?: boolean;
    avatar?: string;
    roles?: Array<Role_HFV>;
    display_role?: Role_HFV;
    last_login?: string;
    last_online?: string;
    threads_count?: number;
    posts_count?: number;
    likes_count?: number;
    banned_user?: Array<Ban_ERT>;
    banned_by?: Array<Ban_ERT>;
};

