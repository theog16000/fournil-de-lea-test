"use client";

import { useState } from "react";
import { getFirstName } from "@/lib/first-name";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
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
        setError("Impossible d'envoyer le message pour le moment.");
      }
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="mt-6 rounded-lg bg-amber-100 p-4">
        <p>Merci {getFirstName(name)}, votre message est bien parti.</p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setName("");
            setEmail("");
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