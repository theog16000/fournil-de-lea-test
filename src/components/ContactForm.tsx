"use client";

import { useState } from "react";
import { getFirstName } from "@/lib/first-name";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isCustomOrder, setIsCustomOrder] = useState(false);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          isCustomOrder,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue.");
      }

      setSent(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Impossible d'envoyer le message.");
      }
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="mt-6 rounded-lg bg-amber-100 p-4">
        <p>Merci {getFirstName(name)}, votre demande a bien été envoyée.</p>
        <p className="mt-1 text-xs text-amber-800">
          Un email de confirmation vient de vous être envoyé.
        </p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setName("");
            setEmail("");
            setPhone("");
            setIsCustomOrder(false);
            setMessage("");
          }}
          className="mt-3 text-xs font-semibold text-amber-900 underline"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
      {error && (
        <p className="rounded border border-red-300 bg-red-50 p-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <label className="grid gap-1 text-sm">
        Nom
        <input
          type="text"
          required
          disabled={loading}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded border border-amber-300 p-2 disabled:bg-stone-100"
        />
      </label>

      <label className="grid gap-1 text-sm">
        Email
        <input
          type="email"
          required
          disabled={loading}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded border border-amber-300 p-2 disabled:bg-stone-100"
        />
      </label>

      {/* Case à cocher pour basculer en commande sur mesure */}
      <label className="flex items-center gap-2 text-sm font-medium text-stone-800">
        <input
          type="checkbox"
          checked={isCustomOrder}
          onChange={(e) => setIsCustomOrder(e.target.checked)}
          disabled={loading}
          className="h-4 w-4 rounded border-amber-300 text-amber-600 focus:ring-amber-500"
        />
        Il s'agit d'une commande sur mesure (gâteau, événement...)
      </label>

      <label className="grid gap-1 text-sm">
        Téléphone {isCustomOrder ? "(obligatoire)" : "(facultatif)"}
        <input
          type="tel"
          required={isCustomOrder}
          disabled={loading}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Ex. 0470 12 34 56 ou +32 2 123 45 67"
          className="rounded border border-amber-300 p-2 disabled:bg-stone-100"
        />
      </label>

      <label className="grid gap-1 text-sm">
        Message
        <textarea
          rows={4}
          required
          disabled={loading}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded border border-amber-300 p-2 disabled:bg-stone-100"
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="rounded bg-amber-700 px-4 py-2 font-semibold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Envoi en cours..." : "Envoyer"}
      </button>
    </form>
  );
}