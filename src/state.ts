type Jugada = "piedra" | "papel" | "tijera";


export const state = {
    data: {
        currentGame: {
            computerPlay: "",
            myPlay: "",
        },
        history: [{}],
    },

    win() {
        if (!!sessionStorage.getItem("vos")) {
            const value = sessionStorage.getItem("vos");
            return sessionStorage.setItem(
                "vos",
                JSON.stringify(Number(value) + 1)
            );
        }
        sessionStorage.setItem("vos", "1");
    },
    lost() {
        if (!!sessionStorage.getItem("maquina")) {
            const value = sessionStorage.getItem("maquina");
            sessionStorage.setItem(
                "maquina",
                JSON.stringify(Number(value) + 1)
            );
        } else {
            sessionStorage.setItem("maquina", "1");
        }
    },


    historyVos(){
        const value = JSON.parse(sessionStorage.getItem("vos"))
        return value
    },
    historyMaquina(){
        const value = JSON.parse(sessionStorage.getItem("maquina"))
        return value

    },

    whoWins(myPlay: Jugada, computerPlay: any) {
        if (myPlay === "papel" && computerPlay === "piedra") {
            return "gane";
        }
        if (myPlay === "piedra" && computerPlay === "tijera") {
            return "gane";
        }
        if (myPlay === "tijera" && computerPlay === "papel") {
            return "gane";
        }
        if (myPlay === computerPlay) {
            return "empate";
        } else {
            return "perdi";
        }
    },
};
