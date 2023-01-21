import { IState } from "../../Interfaces/Interfaces";

export const dataSelector = (state: IState) => state.data;

export const loadingSelector = (state: IState) => state.loading;
