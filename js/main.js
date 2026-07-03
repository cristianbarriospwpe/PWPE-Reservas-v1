// ================= RESERVA POUSADA DEMO =================

const btnEnviarReserva = document.getElementById("btnEnviarReserva");

if (btnEnviarReserva) {

    btnEnviarReserva.addEventListener("click", function () {

        const nome = document.getElementById("nomeReserva").value;
        const whatsapp = document.getElementById("whatsappReserva").value;
        const entrada = document.getElementById("entradaReserva").value;
        const saida = document.getElementById("saidaReserva").value;
        const hospedes = document.getElementById("hospedesReserva").value;
        const acomodacao = document.getElementById("acomodacaoReserva").value;
        const observacoes = document.getElementById("observacoesReserva").value;

        const numeroWhatsApp = "5522992231382";

const mensagem = [
    "Olá, gostaria de consultar uma reserva na Pousada Mar Azul.",
    "",
    "Dados da reserva:",
    "",
    `- Nome: ${nome}`,
    `- WhatsApp: ${whatsapp}`,
    `- Entrada: ${entrada}`,
    `- Saída: ${saida}`,
    `- Hóspedes: ${hospedes}`,
    `- Acomodação: ${acomodacao}`,
    "",
    `- Observações: ${observacoes || "Nenhuma observação"}`
].join("\n");

const mensagemCodificada = encodeURIComponent(mensagem);

const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

        window.open(linkWhatsApp, "_blank");

    });

}

// ================= CALENDARIO MODERNO =================

if (typeof flatpickr !== "undefined") {

    flatpickr(".datepicker", {
        locale: "pt",
        dateFormat: "d/m/Y",
        minDate: "today",
        disableMobile: true
    });

}