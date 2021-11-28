import { parseObj, IObject } from "../utils";

export function incluirNota(cabecalho: IObject, itens: IObject[], informarPreco: boolean) {
    const _cabecalho = {
        NUNOTA: {},
        ...parseObj(cabecalho)
    };
    const _itens = itens.map((item: IObject) => ({
        ...parseObj(item),
        NUNOTA: {}
    }));
    const _informarPreco = informarPreco ? "True" : "N";

    return {
        "serviceName": "CACSP.incluirNota",
        "requestBody": {
            "nota": {
                "cabecalho": _cabecalho,
                "itens": {
                    "INFORMARPRECO": _informarPreco,
                    "item": _itens
                }
            }
        }
    }
}