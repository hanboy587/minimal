const WORKER_LEVEL : number = 1;
const USER_LEVEL : number = 2;
const ADMIN_LEVEL : number = 3;
const GADMIN_LEVEL : number = 4;


type AUTHType = {
    [index: string] : number;
    ROLE_WORKER : number;
    ROLE_USER : number;
    ROLE_ADMIN : number;
  }

export const AUTH : AUTHType = {
    "ROLE_WORKER" : WORKER_LEVEL,
    "ROLE_USER" : USER_LEVEL,
    "ROLE_ADMIN" : ADMIN_LEVEL,
};

export const ROLE_WORKER : number = WORKER_LEVEL;
export const ROLE_USER : number = USER_LEVEL;
export const ROLE_ADMIN : number = ADMIN_LEVEL;
export const ROLE_GADMIN : number = GADMIN_LEVEL;