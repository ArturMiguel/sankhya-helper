import { cancelarNota, excluirItemNota, incluirAlterarItemNota, incluirNota } from "./sankhyaRequest/CACSP";
import { login, logout } from "./sankhyaRequest/MobileLoginSP";

export const sankhyaRequest = {
    MobileLoginSP: {
        login,
        logout
    },
    CACSP: {
        incluirNota,
        incluirAlterarItemNota,
        excluirItemNota,
        cancelarNota
    }
}