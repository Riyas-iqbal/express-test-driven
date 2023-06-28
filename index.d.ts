import { Express } from "express-serve-static-core";
/**
 * Total Roles available
 */
export enum Roles {
    ADMIN='admin',
    USER='user'
}

/**
 * User Type
 */

export type User = {
    id: string;
    name: string,
    role: Roles | 'ADMIN' | 'USER'
}

declare module "express-serve-static-core" {
  export interface Request {
    user?: User
  }
  export interface Response {
    user?: User
  }
}

