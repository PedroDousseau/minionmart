import handler from "../../../libs/handler-lib";
import sgMail from "@sendgrid/mail";

export const main = handler(async (event, context) => {
    const data = JSON.parse(event.body);

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    let outputHtml = '<div style="text-align:left"><strong>Informações do pedido:</strong><br/><br/>';
    data.order.items.forEach((item) => {
        outputHtml += `<p>- ${item.amount}x ${item.product.name}</p>`;
    });
    outputHtml += "<br/><br/><p>Seu pedido foi reservado com sucesso! Assim que os itens chegarem na loja, você poderá vir buscá-los.</p></div>";


    const msg = {
        to: data.emails, // Parsed from request body
        from: process.env.emailSender,
        subject: 'Pedido realizado em Minion Shop!',
        html: outputHtml, //Parsed from request body
    };

    return sgMail.send(msg)
    .then(() => {
        return data.order.items;
    })
    .catch((err) => {
        return {
            error: err.message
        };
    });
});

