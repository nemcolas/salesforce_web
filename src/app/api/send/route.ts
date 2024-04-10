import { type NextRequest } from "next/server"; // importe feito para tipar o request
import { transporter, getConfig } from "./utils"; // nosso pacote com as configurações e funções de envio de email

export async function POST(request: NextRequest) {
  const { send, nome } = await request.json();
  console.log(nome);
  const info = await transporter.sendMail(getConfig(send, nome));

  return Response.json({ status: "enviado" });
}
