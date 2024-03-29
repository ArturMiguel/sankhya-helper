# sankhya-helper

[![NPM version](https://img.shields.io/npm/v/sankhya-helper.svg?style=flat)](https://npmjs.org/package/sankhya-helper)
[![NPM downloads](https://img.shields.io/npm/dt/sankhya-helper.svg?style=flat)](https://npmjs.org/package/sankhya-helper)
[![NPM downloads](https://img.shields.io/npm/l/sankhya-helper.svg?style=flat)](https://npmjs.org/package/sankhya-helper)

Utilitário para criar e formatar objetos JavaScript no padrão de JSON enviado na [API de integrações Sankhya](https://developer.sankhya.com.br/reference/api-de-integra%C3%A7%C3%B5es-sankhya).

# Nota para API Gateway

Em 2022 a Sankhya introduziu uma nova API de integração chamada "Gateway" que mudou a forma de integrar com os serviços HTTP da Sankhya e principalmente a autenticação. Você pode consultar o [FAQ](https://developer.sankhya.com.br/reference/faq-1) para saber o que mudou. Este pacote `sankhya-helper` foi criado em 2021 para a API antiga, que continua existindo e alguns serviços (fora autenticação) continuam compatíveis devido ao Gateway atual ter mantido o JSON request da API antiga, então ao usar o pacote para o Gateway recomendo checar na documentação se o JSON gerado pelo pacote continua compatível.

# Instalação

```
npm i sankhya-helper
```

# Uso

Todas as funções retornam um objeto JSON.

### MobileLoginSP.login

```js 
const MobileLoginSP = require("sankhya-helper/lib/MobileLoginSP");

MobileLoginSP.login(nomusu: string, interno: string, keepconnected: "S" | "N");
```

Exemplo:

```js
MobileLoginSP.login("usuario", "senha", "S");
/*{
   "serviceName":"MobileLoginSP.login",
   "requestBody":{
      "NOMUSU":{
         "$":"usuario"
      },
      "INTERNO":{
         "$":"senha"
      },
      "KEEPCONNECTED":{
         "$":"S"
      }
   }
}*/
```

### MobileLoginSP.logout

```js 
const MobileLoginSP = require("sankhya-helper/lib/MobileLoginSP");

MobileLoginSP.logout();
```

Exemplo:

```js
const body = MobileLoginSP.logout();
/*{
   "serviceName":"MobileLoginSP.logout",
   "status":"1",
   "pendingPrinting":"false"
}*/
```

### CACSP.incluirNota

```js 
const CACSP = require("sankhya-helper/lib/CACSP");

CACSP.incluirNota(cabecalho: Object, itens: Object[], informarPreco: boolean);
```

Exemplo:

> O campo "NUNOTA" é incluído pela função.

```js
const cabecalho = {
    "CODPARC": 2,
    "DTNEG": "01/02/2021",
    "CODTIPOPER": 18,
    "CODTIPVENDA": 11,
    "CODVEND": 2,
    "CODEMP": 1,
    "TIPMOV": "P"
}

const itens = [
    {
        "CODPROD": 13,
        "QTDNEG": 1,
        "CODLOCALORIG": 0,
        "CODVOL": "UN"
    }
]

CACSP.incluirNota(cabecalho, itens, false);
/*{
   "serviceName":"CACSP.incluirNota",
   "requestBody":{
      "nota":{
         "cabecalho":{
            "NUNOTA":{
               
            },
            "CODPARC":{
               "$":"2"
            },
            "DTNEG":{
               "$":"01/02/2021"
            },
            "CODTIPOPER":{
               "$":"18"
            },
            "CODTIPVENDA":{
               "$":"11"
            },
            "CODVEND":{
               "$":"2"
            },
            "CODEMP":{
               "$":"1"
            },
            "TIPMOV":{
               "$":"P"
            }
         },
         "itens":{
            "INFORMARPRECO":"N",
            "item":[
               {
                  "CODPROD":{
                     "$":"13"
                  },
                  "QTDNEG":{
                     "$":"1"
                  },
                  "CODLOCALORIG":{
                     "$":"0"
                  },
                  "CODVOL":{
                     "$":"UN"
                  },
                  "NUNOTA":{
                     
                  }
               }
            ]
         }
      }
   }
}*/
```

### CACSP.incluirAlterarItemNota

```js
const CACSP = require("sankhya-helper/lib/CACSP");

CACSP.incluirAlterarItemNota(nunota: number | string, item: Object);
``` 

Exemplo:

```js
const item = {
    "CODPROD": 129,
    "NUNOTA": 7468,
    "QTDNEG": 10,
    "VLRUNIT": 10,
    "VLRTOT": 432.38,
    "CODVOL": "UN",
    "VLRDESC": 0,
    "PERCDESC": 0,
    "SEQUENCIA": ""
}

CACSP.incluirAlterarItemNota(7468, item);
/*{
   "serviceName":"CACSP.incluirAlterarItemNota",
   "requestBody":{
      "nota":{
         "NUNOTA":"7468",
         "itens":{
            "item":{
               "CODPROD":{
                  "$":"129"
               },
               "NUNOTA":{
                  "$":"7468"
               },
               "QTDNEG":{
                  "$":"10"
               },
               "VLRUNIT":{
                  "$":"10"
               },
               "VLRTOT":{
                  "$":"432.38"
               },
               "CODVOL":{
                  "$":"UN"
               },
               "VLRDESC":{
                  "$":"0"
               },
               "PERCDESC":{
                  "$":"0"
               },
               "SEQUENCIA":{
                  "$":""
               }
            }
         }
      }
   }
}*/
```

### CACSP.excluirItemNota

```js
const CACSP = require("sankhya-helper/lib/CACSP");

CACSP.excluirItemNota(nunota: number | string, sequencia: number | string);
``` 

Exemplo:

```js
CACSP.excluirItemNota(7468, 4);
/*{
   "serviceName":"CACSP.excluirItemNota",
   "requestBody":{
      "nota":{
         "itens":{
            "item":{
               "NUNOTA":{
                  "$":"7468"
               },
               "SEQUENCIA":{
                  "$":"4"
               }
            }
         }
      }
   }
}*/
```

### CACSP.cancelarNota

```js
const CACSP = require("sankhya-helper/lib/CACSP");

CACSP.cancelarNota(nunota: number | string, justificativa: string, validarProcessosWmsEmAndamento: boolean);
``` 

Exemplo:

```js
CACSP.cancelarNota(3713703, "Lançamento indevido", true)
/*{
   "serviceName":"CACSP.cancelarNota",
   "requestBody":{
      "notasCanceladas":{
         "nunota":[
            {
               "$":"3713703"
            }
         ],
         "justificativa":"Lançamento indevido",
         "validarProcessosWmsEmAndamento":"true"
      }
   }
}*/
```

### CRUDServiceProvider.saveRecord

```js
const CRUDServiceProvider = require("sankhya-helper/lib/CRUDServiceProvider");

CRUDServiceProvider.saveRecord(entidade: string, input: Object, output: string);
```

Exemplo:

```js
const cidade = {
   NOMECID: "UBERLANDIA",
   UF: 2
}

CRUDServiceProvider.saveRecord("Cidade", cidade, "CODCID,NOMECID,UF");
/*{
   "serviceName":"CRUDServiceProvider.saveRecord",
   "requestBody":{
      "dataSet":{
         "rootEntity":"Cidade",
         "includePresentationFields":"N",
         "dataRow":{
            "localFields":{
               "NOMECID":{
                  "$":"Uberlândia"
               },
               "UF":{
                  "$":"2"
               }
            }
         },
         "entity":{
            "fieldset":{
               "list":"CODCID,NOMECID,UF"
            }
         }
      }
   }
}*/
```

# Licença

sankhya-helper é licenciado sob a licença MIT. [MIT](LICENSE)

sankhya-helper não é mantido pela Sankhya e sim por terceiros que criam soluções utilizando sua API de integração.
