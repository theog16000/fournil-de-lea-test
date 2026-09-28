"use client";

import { useState } from "react";
import { getFirstName } from "@/lib/first-name";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="mt-6 rounded-lg bg-amber-100 p-4">
        Merci {getFirstName(name)}, votre message est bien parti.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
      <label className="grid gap-1 text-sm">
        Nom
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded border border-amber-300 p-2"
        />
      </label>
      <label className="grid gap-1 text-sm">
        Email
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded border border-amber-300 p-2"
        />
      </label>
      <label className="grid gap-1 text-sm">
        Message
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded border border-amber-300 p-2"
        />
      </label>
      <button
        type="submit"
        className="rounded bg-amber-700 px-4 py-2 font-semibold text-white"
      >
        Envoyer
      </button>
    </form>
  );
}
