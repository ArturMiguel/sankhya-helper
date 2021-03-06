import { parseObj, Object } from "./utils";

export function incluirNota(cabecalho: Object, itens: Object[], informarPreco: boolean) {
    return {
        serviceName: "CACSP.incluirNota",
        requestBody: {
            nota: {
                cabecalho: {
                    NUNOTA: {},
                    ...parseObj(cabecalho)
                },
                itens: {
                    INFORMARPRECO: informarPreco ? "True" : "N",
                    item: itens.map((item: Object) => ({
                        ...parseObj(item),
                        NUNOTA: {}
                    }))
                }
            }
        }
    }
}

export function incluirAlterarItemNota(nunota: number | string, item: Object) {
    const _nunota = nunota.toString();
    return {
        serviceName: "CACSP.incluirAlterarItemNota",
        requestBody: {
            nota: {
                NUNOTA: _nunota,
                itens: {
                    item: {
                        ...parseObj(item)
                    }
                }
            }
        }
    }
}

export function excluirItemNota(nunota: number | string, sequencia: number | string) {
    return {
        serviceName: "CACSP.excluirItemNota",
        requestBody: {
            nota: {
                itens: {
                    item: {
                        NUNOTA: {
                            $: nunota.toString()
                        },
                        SEQUENCIA: {
                            $: sequencia.toString()
                        }
                    }
                }
            }
        }
    }
}

export function cancelarNota(nunota: number | string, justificativa: string, validarProcessosWmsEmAndamento: boolean) {
    return {
        serviceName: "CACSP.cancelarNota",
        requestBody: {
            notasCanceladas: {
                nunota: [
                    {
                        $: nunota.toString()
                    }
                ],
                justificativa,
                validarProcessosWmsEmAndamento: validarProcessosWmsEmAndamento ? "true" : "false"
            }
        }
    }
}