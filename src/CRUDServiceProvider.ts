import { Object, parseObj } from "./utils";

export function saveRecord(entidade: string, input: Object, output: string) {
    return {
        serviceName: "CRUDServiceProvider.saveRecord",
        requestBody: {
            dataSet: {
                rootEntity: entidade,
                includePresentationFields: "N",
                dataRow: {
                    localFields: {
                        ...parseObj(input)
                    }
                }, entity: {
                    fieldset: {
                        list: output
                    }
                }
            }
        }
    }
}