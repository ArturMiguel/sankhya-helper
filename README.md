# sankhya-helper

[![NPM version](https://img.shields.io/npm/v/sankhya-helper.svg?style=flat)](https://npmjs.org/package/sankhya-helper)
[![NPM downloads](https://img.shields.io/npm/l/sankhya-helper.svg?style=flat)](https://npmjs.org/package/sankhya-helper)

Utilitário para criar entradas e formatar objetos JavaScript no padrão de JSON enviado na [API de integrações Sankhya](https://developer.sankhya.com.br/reference/api-de-integra%C3%A7%C3%B5es-sankhya).

# Instalação

```
npm i sankhya-helper
```

# Funcionalidades

## MobileLoginSP.login

[Referência na documentação Sankhya](https://developer.sankhya.com.br/reference/login#post_login)

Utilização:

```js 
const MobileLoginSP = require("sankhya-helper/lib/MobileLoginSP");

MobileLoginSP.login(nomusu: string, interno: string, keepconnected: "S" | "N");
```

Exemplo:

```js
const MobileLoginSP = require("sankhya-helper/lib/MobileLoginSP");

const body = MobileLoginSP.login("usuario", "senha", "S");
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

## MobileLoginSP.logout

[Referência na documentação Sankhya](https://developer.sankhya.com.br/reference/login#post_login)

```js 
const MobileLoginSP = require("sankhya-helper/lib/MobileLoginSP");

MobileLoginSP.logout();
```

Exemplo:

```js
const MobileLoginSP = require("sankhya-helper/lib/sankhyaRequest/MobileLoginSP");

const body = MobileLoginSP.logout();
/*{
   "serviceName":"MobileLoginSP.logout",
   "status":"1",
   "pendingPrinting":"false"
}*/
```

# Licença

sankhya-helper é licenciado sob a licença MIT. [MIT](LICENSE)

sankhya-helper não é mantido pela Sankhya e sim por terceiros que criam soluções utilizando sua API de integração.