export function login(nomusu: string, interno: string, keepconnected: "S" | "N") {
    return {
        serviceName: "MobileLoginSP.login",
        requestBody: {
            NOMUSU: {
                $: nomusu
            },
            INTERNO: {
                $: interno
            },
            KEEPCONNECTED: {
                $: keepconnected
            }
        }
    }
}

export function logout() {
    return {
        serviceName: "MobileLoginSP.logout",
        status: "1",
        pendingPrinting: "false",
    }
}

console.log(logout())