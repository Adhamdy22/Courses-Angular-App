import { createAction, props } from "@ngrx/store";

export const login = createAction('[Login Page] login',props<{email:string;password:string}>());
