import ContactForm from "@/components/ContactForm";

const services = [
  {
    id: 1,
    name: "Pains au levain",
    text: "Farines locales, fermentation lente, cuits chaque matin avant l'ouverture.",
  },
  {
    id: 2,
    name: "Viennoiseries",
    text: "Croissants, pains au chocolat et brioches au beurre, faits maison.",
  },
  {
    id: 3,
    name: "Gateaux sur mesure",
    text: "Anniversaires, mariages, evenements d'entreprise : on prepare le gateau qui vous ressemble.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="flex items-center justify-between px-6 py-4 border-b border-amber-200">
        <span className="text-xl font-bold">Le Fournil de Léa</span>
        <nav className="flex gap-6 text-sm">
          <a href="#service">Nos specialites</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="grid gap-8 px-6 py-16 md:grid-cols-2 md:items-center max-w-5xl mx-auto">
        <div>
          <h1 className="text-4xl font-bold">
            Boulangerie artisanale a Wavre
          </h1>
          <p className="mt-4 text-lg">
            Depuis 2009, Léa et son equipe petrissent, faconnent et cuisent
            sur place. Venez sentir le pain chaud.
          </p>
        </div>
        <img src="/pain.svg" width={600} height={400} />
      </section>

      <section id="services" className="px-6 py-12 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold">Nos specialites</h1>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div className="rounded-lg border border-amber-200 p-5">
              <h3 className="font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 py-12 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold">Une question, une commande ?</h2>
        <p className="mt-2 text-sm">
          Ecrivez-nous, Léa vous repond sous 24 heures.
        </p>
        <ContactForm />
      </section>

      <footer className="border-t border-amber-200 px-6 py-6 text-sm flex justify-between">
        <span>© 2026 Le Fournil de Léa, Wavre</span>
        <a href="/mentions-legales">Mentions legales</a>
      </footer>
    </main>
  );
}
