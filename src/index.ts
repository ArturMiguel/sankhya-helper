import { cancelarNota, excluirItemNota, incluirAlterarItemNota, incluirNota } from "./CACSP";
import { login, logout } from "./MobileLoginSP";

export const MobileLoginSP = {
    login,
    logout
}

export const CACSP = {
    incluirNota,
    incluirAlterarItemNota,
    excluirItemNota,
    cancelarNota
}