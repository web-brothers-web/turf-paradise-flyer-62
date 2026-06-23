import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const WA = "https://wa.me/919003010138";
const IG = "https://www.instagram.com/turf_paradise_mq/";
const MAP = "https://maps.app.goo.gl/BAY4C7Tfw8TcuUhf6";
const EMAIL = "abcdef12@gmail.com";

const waLink = (text: string) => `${WA}?text=${encodeURIComponent(text)}`;

type Slot = { time: string; sport: "Cricket" | "Football"; status: "AVAILABLE" | "BOOKED" };
const SLOTS: Slot[] = [
  { time: "5:00 PM", sport: "Cricket", status: "AVAILABLE" },
  { time: "6:00 PM", sport: "Football", status: "BOOKED" },
  { time: "7:00 PM", sport: "Cricket", status: "AVAILABLE" },
  { time: "8:00 PM", sport: "Football", status: "AVAILABLE" },
  { time: "9:00 PM", sport: "Cricket", status: "BOOKED" },
  { time: "10:00 PM", sport: "Football", status: "AVAILABLE" },
];

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return <div className={`placeholder-img ${className}`}>{label}</div>;
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "#home"],
    ["Sports", "#sports"],
    ["Today's Slots", "#slots"],
    ["Gallery", "#gallery"],
    ["Find Us", "#find"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-stencil bg-cement-grain">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#home" className="font-stencil text-[15px] leading-tight md:text-lg" style={{ fontFamily: "var(--font-stencil)" }}>
          MEGA'S M QUBE<br /><span style={{ color: "var(--ball-red)" }}>TURF PARADISE</span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="font-display text-lg uppercase tracking-wider hover:text-ball-red" style={{ fontFamily: "var(--font-display)" }}>
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={WA} target="_blank" rel="noreferrer" className="btn-stamp text-sm md:text-base">
            Book Now →
          </a>
          <button
            aria-label="Toggle menu"
            className="lg:hidden border-[3px] border-stencil bg-cement px-3 py-2"
            onClick={() => setOpen(!open)}
          >
            <span className="block h-0.5 w-5 bg-stencil mb-1" />
            <span className="block h-0.5 w-5 bg-stencil mb-1" />
            <span className="block h-0.5 w-5 bg-stencil" />
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t-[3px] border-stencil bg-cement px-4 py-3 lg:hidden">
          {links.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="block py-2 font-display text-lg uppercase" style={{ fontFamily: "var(--font-display)" }}>
              {l}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b-[3px] border-stencil bg-cement-grain">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-8 md:py-20">
        <div>
          <span className="hand-note text-xl">// floodlights on tonight</span>
          <h1 className="mt-3 text-[64px] leading-[0.9] md:text-[110px]" style={{ fontFamily: "var(--font-stencil)" }}>
            TWO GAMES.<br />
            ONE GROUND.<br />
            <span style={{ color: "var(--ball-red)" }}>ZERO EXCUSES.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg md:text-xl">
            Box cricket and football, under the lights, on real turf. Round up the squad. We'll handle the ground.
          </p>
          <div className="mt-8 flex flex-wrap gap-5">
            <a href={waLink("Hey! I want to book a slot at Turf Paradise.")} target="_blank" rel="noreferrer" className="btn-stamp">
              Book on WhatsApp
            </a>
            <a href="#slots" className="btn-stamp-outline">See Today's Slots</a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
            <span className="inline-block border-[2.5px] border-stencil bg-stencil px-2 py-1 font-display uppercase tracking-wider text-cement" style={{ fontFamily: "var(--font-display)" }}>Open Daily</span>
            <span className="hand-note text-lg">Open now — walk in or ping us</span>
          </div>
        </div>
        <div className="relative">
          <Placeholder label="Turf Action Shot — Add Hero Image" className="aspect-[4/5] w-full" />
          <div className="absolute -bottom-5 -left-5 rotate-[-6deg] border-[3px] border-stencil bg-net-orange px-4 py-2 font-display uppercase tracking-wider" style={{ fontFamily: "var(--font-display)" }}>
            Floodlit · 5-a-side · Box
          </div>
        </div>
      </div>
    </section>
  );
}

function Sports() {
  return (
    <section id="sports" className="border-b-[3px] border-stencil px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="heading-stencil text-5xl md:text-7xl">01 · Pick Your Game.</h2>
        <p className="mt-3 max-w-xl text-lg">Two sports, one turf. Bring your crew, we'll prep the ground.</p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <article className="relative border-[3px] border-stencil bg-cement p-6 shadow-[8px_8px_0_var(--stencil)]" style={{ borderLeftWidth: 10, borderLeftColor: "var(--ball-red)" }}>
            <Placeholder label="Box Cricket Photo" className="aspect-video w-full" />
            <h3 className="mt-5 text-4xl md:text-5xl" style={{ fontFamily: "var(--font-display)", color: "var(--ball-red)" }}>BOX CRICKET</h3>
            <p className="mt-2 text-base">Tape ball, leather, gully rules — bring your style. Caged sides, real bounce, no lost balls in the bushes.</p>
            <a href={waLink("Hey! I want to book Box Cricket at Turf Paradise.")} target="_blank" rel="noreferrer" className="mt-5 inline-block btn-stamp text-sm">
              Book This →
            </a>
          </article>
          <article className="relative border-[3px] border-stencil bg-cement p-6 shadow-[8px_8px_0_var(--stencil)]" style={{ borderLeftWidth: 10, borderLeftColor: "var(--sky-blue)" }}>
            <Placeholder label="Football Photo" className="aspect-video w-full" />
            <h3 className="mt-5 text-4xl md:text-5xl" style={{ fontFamily: "var(--font-display)", color: "var(--sky-blue)" }}>FOOTBALL</h3>
            <p className="mt-2 text-base">5-a-side, proper nets, fresh lines. Tight pitch, fast game, ten minutes of fury at a time.</p>
            <a href={waLink("Hey! I want to book Football at Turf Paradise.")} target="_blank" rel="noreferrer" className="mt-5 inline-block btn-stamp text-sm">
              Book This →
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

function Matchday() {
  const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-3", "rotate-1"];
  return (
    <section id="slots" className="border-b-[3px] border-stencil bg-stencil px-4 py-16 text-cement md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-5xl md:text-7xl" style={{ fontFamily: "var(--font-stencil)", color: "var(--cement)", textShadow: "3px 3px 0 var(--ball-red)" }}>
          02 · Tonight's Slots.
        </h2>
        <p className="mt-3 max-w-xl text-lg text-cement/80">Pinned to the gate. Tap an available stub to book on WhatsApp.</p>
        <p className="mt-2 hand-note text-base" style={{ color: "var(--net-orange)" }}>
          // slots shown are sample placeholders — swap for live booking data later
        </p>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {SLOTS.map((s, i) => {
            const available = s.status === "AVAILABLE";
            const stub = (
              <div className={`ticket-stub ${rotations[i % rotations.length]} ${available ? "hover:scale-[1.02]" : "opacity-70"} transition-transform`}>
                <div className="flex items-baseline justify-between border-b-2 border-dashed border-stencil pb-2">
                  <span className="text-3xl" style={{ fontFamily: "var(--font-display)" }}>{s.time}</span>
                  <span className="font-display text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-display)" }}>Slot #{i + 1}</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-widest opacity-70">Sport</div>
                    <div className="text-2xl" style={{ fontFamily: "var(--font-display)", color: s.sport === "Cricket" ? "var(--ball-red)" : "var(--sky-blue)" }}>
                      {s.sport === "Cricket" ? "🏏 Box Cricket" : "⚽ Football"}
                    </div>
                  </div>
                  <div className="ink-stamp" style={{ color: available ? "var(--ball-red)" : "var(--stencil)" }}>
                    {s.status}
                  </div>
                </div>
              </div>
            );
            return available ? (
              <a
                key={i}
                href={waLink(`Hey! I want to book ${s.sport} at ${s.time} today.`)}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                {stub}
              </a>
            ) : (
              <div key={i}>{stub}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyPlay() {
  const perks = [
    { icon: "💡", t: "Floodlights" },
    { icon: "🅿️", t: "Parking" },
    { icon: "🚻", t: "Washroom" },
    { icon: "💧", t: "Drinking Water" },
    { icon: "🪑", t: "Seating" },
    { icon: "🏏", t: "Equipment Rental" },
  ];
  return (
    <section className="border-b-[3px] border-stencil px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="heading-stencil text-5xl md:text-7xl">03 · What You Get.</h2>
        <p className="mt-3 max-w-xl text-lg">No frills, no fluff. The stuff that actually matters when you show up to play.</p>
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {perks.map((p) => (
            <div key={p.t} className="border-[3px] border-stencil bg-cement p-5 text-center shadow-[5px_5px_0_var(--stencil)]">
              <div className="text-4xl">{p.icon}</div>
              <div className="mt-3 text-lg uppercase" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>{p.t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="border-b-[3px] border-stencil bg-cement-grain px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="heading-stencil text-5xl md:text-7xl">04 · From The Ground.</h2>
        <p className="mt-3 max-w-xl text-lg">Pinned photos from match nights. Add real shots when you have them.</p>
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={`tape-corner ${i % 2 ? "rotate-2" : "-rotate-2"}`}>
              <Placeholder label="Add turf photo here" className="aspect-square w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnquiryForm() {
  const [f, setF] = useState({ name: "", phone: "", sport: "Box Cricket", date: "", message: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Booking enquiry —
Name: ${f.name}
Phone: ${f.phone}
Sport: ${f.sport}
Date: ${f.date}
Note: ${f.message}`;
    window.open(waLink(text), "_blank");
  };
  const input = "w-full border-[3px] border-stencil bg-cement px-3 py-2 font-body focus:outline-none";
  return (
    <form onSubmit={onSubmit} className="border-[3px] border-stencil bg-cement p-6 shadow-[8px_8px_0_var(--ball-red)]">
      <h3 className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>Drop A Line</h3>
      <p className="mt-1 text-sm">Fill it in, hit send — opens WhatsApp with your message ready to go.</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-display)" }}>Name</span>
          <input required value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} className={input} />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-display)" }}>Phone</span>
          <input required value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} className={input} />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-display)" }}>Preferred Sport</span>
          <select value={f.sport} onChange={(e) => setF({ ...f, sport: e.target.value })} className={input}>
            <option>Box Cricket</option>
            <option>Football</option>
          </select>
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-display)" }}>Preferred Date</span>
          <input type="date" required value={f.date} onChange={(e) => setF({ ...f, date: e.target.value })} className={input} />
        </label>
        <label className="block md:col-span-2">
          <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-display)" }}>Message</span>
          <textarea rows={3} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} className={input} />
        </label>
      </div>
      <button type="submit" className="btn-stamp mt-6">Send via WhatsApp →</button>
    </form>
  );
}

function FindUs() {
  return (
    <section id="find" className="border-b-[3px] border-stencil px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <div>
          <h2 className="heading-stencil text-5xl md:text-7xl">05 · Walk In Or Map It.</h2>
          <p className="mt-4 text-lg">
            Pull up to the gate, ask for the turf. Or punch the map and let your phone do the talking.
          </p>
          <p className="mt-2 hand-note text-lg">// landmark / locality — add your line here</p>
          <a href={MAP} target="_blank" rel="noreferrer" className="btn-stamp mt-6">
            Get Directions →
          </a>
          <div className="mt-8 space-y-2 text-base">
            <div><span className="font-display uppercase tracking-widest" style={{ fontFamily: "var(--font-display)" }}>WhatsApp:</span> <a className="underline" href={WA}>+91 90030 10138</a></div>
            <div><span className="font-display uppercase tracking-widest" style={{ fontFamily: "var(--font-display)" }}>Email:</span> <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
            <div><span className="font-display uppercase tracking-widest" style={{ fontFamily: "var(--font-display)" }}>Instagram:</span> <a className="underline" href={IG} target="_blank" rel="noreferrer">@turf_paradise_mq</a></div>
          </div>
        </div>
        <div id="contact">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer className="bg-stencil px-4 py-14 text-cement md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <div className="text-2xl" style={{ fontFamily: "var(--font-stencil)" }}>
            MEGA'S M QUBE<br /><span style={{ color: "var(--net-orange)" }}>TURF PARADISE</span>
          </div>
          <p className="mt-3 max-w-xs text-cement/80">Box cricket. Football. Floodlit turf. Pull up.</p>
        </div>
        <div>
          <div className="text-sm uppercase tracking-widest text-cement/60" style={{ fontFamily: "var(--font-display)" }}>Reach Out</div>
          <ul className="mt-3 space-y-2">
            <li><a className="underline" href={WA} target="_blank" rel="noreferrer">WhatsApp · +91 90030 10138</a></li>
            <li><a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><a className="underline" href={IG} target="_blank" rel="noreferrer">Instagram · @turf_paradise_mq</a></li>
            <li><a className="underline" href={MAP} target="_blank" rel="noreferrer">Google Maps · Get Directions</a></li>
          </ul>
        </div>
        <div className="md:text-right">
          <a href={WA} target="_blank" rel="noreferrer" className="btn-stamp">Book on WhatsApp</a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-cement/20 pt-5 text-sm text-cement/60">
        © {year} Mega's M Qube Turf Paradise. All rights reserved.
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-cement-grain">
      <Nav />
      <Hero />
      <Sports />
      <Matchday />
      <WhyPlay />
      <Gallery />
      <FindUs />
      <Footer />
    </main>
  );
}
