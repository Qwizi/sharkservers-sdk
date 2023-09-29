/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Category_SCK } from './Category_SCK';
import type { Server_QIG } from './Server_QIG';
import type { ThreadMeta_CEX } from './ThreadMeta_CEX';
import type { User_BGU } from './User_BGU';

export type ThreadOut = {
    created_at?: string;
    updated_at?: string;
    id?: number;
    title: string;
    content: string;
    is_closed?: boolean;
    is_pinned?: boolean;
    status?: string;
    category?: Category_SCK;
    author?: User_BGU;
    meta_fields?: Array<ThreadMeta_CEX>;
    post_count?: number;
    server?: Server_QIG;
};

