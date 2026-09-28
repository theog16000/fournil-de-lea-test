import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Format belge : fixe (9 chiffres au total avec le 0) ou mobile (10 chiffres avec le 0)
const BELGIAN_PHONE_REGEX = /^(?:\+32|0032|0)[1-9]\d{7,8}$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, isCustomOrder, message } = body;

    // 1. Validation de base
    if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
      return NextResponse.json({ error: "Données invalides." }, { status: 400 });
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    const cleanedPhone = typeof phone === "string" ? phone.replace(/[\s./-]/g, "") : "";

    if (trimmedName.length < 2 || trimmedName.length > 80) {
      return NextResponse.json({ error: "Nom invalide." }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(trimmedEmail) || trimmedEmail.length > 120) {
      return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
    }

    if (trimmedMessage.length < 10 || trimmedMessage.length > 2000) {
      return NextResponse.json({ error: "Message trop court ou trop long." }, { status: 400 });
    }

    // 2. Règle métier : téléphone obligatoire si commande sur mesure
    if (isCustomOrder && !cleanedPhone) {
      return NextResponse.json(
        { error: "Le numéro de téléphone est obligatoire pour les commandes sur mesure." },
        { status: 400 }
      );
    }

    // Si le téléphone est fourni, vérifier la validité belge
    if (cleanedPhone && !BELGIAN_PHONE_REGEX.test(cleanedPhone)) {
      return NextResponse.json(
        { error: "Veuillez fournir un numéro de téléphone belge valide (ex. 0470 12 34 56 ou +32 ...)." },
        { status: 400 }
      );
    }

    // 3. Envoi du mail immédiat (ex. Resend / Brevo)
    // await resend.emails.send({ ... })


    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}