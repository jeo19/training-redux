import { createAction } from 'redux-actions';
const CHANGE_INPUT = 'waiting/CHANGE_INPUT';
const CREATE = 'waiting/CREATE';
const ENTER = 'waiting/ENTER';
const LEAVE = 'waiting/LEAVE';
export const changeInput = createAction(CHANGE_INPUT, text => text);
export const create = createAction(CREATE, text => text);
export const enter = createAction(ENTER, id => id);
export const leave = createAction(LEAVE, id => id);
