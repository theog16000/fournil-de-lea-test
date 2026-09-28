import { NextResponse } from "next/server";

// Regex simple et efficace pour la validation de format email
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validation de présence et de type
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { error: "Tous les champs doivent être renseignés." },
    
      );
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || trimmedName.length < 2 || trimmedName.length > 80) {
      return NextResponse.json(
        { error: "Le nom doit comporter entre 2 et 80 caractères." },
      );
    }

    if (!trimmedEmail || !EMAIL_REGEX.test(trimmedEmail) || trimmedEmail.length > 120) {
      return NextResponse.json(
        { error: "Veuillez fournir une adresse email valide." },
        { status: 400 }
      );
    }

    if (!trimmedMessage || trimmedMessage.length < 10 || trimmedMessage.length > 2000) {
      return NextResponse.json(
        { error: "Le message doit comporter entre 10 et 2000 caractères." },
        { status: 400 }
      );
    };

    return NextResponse.json({
      success: true,
      message: "Votre message a bien été envoyé !",
    });

  } catch (error) {
    
    return NextResponse.json(
      { error: "Une erreur est survenu. Veuillez réessayer." },
      { status: 500 }
    );
  }
}