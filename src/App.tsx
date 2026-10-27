const WHATSAPP_URL =
  'https://chat.whatsapp.com/DJ7TBE6PvwUImcUR5UUSaz?s=cl&p=a&mlu=4&ilr=4'

const navigation = [
  'Home',
  'Jobs',
  'Scholarship',
  'Passport',
  'Other Opportunities',
  'Contact',
]

const opportunities = [
  {
    title: 'Jobs',
    description: 'Stay connected to job opportunity updates.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 7V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8V7m5 4.5v6.7a1.8 1.8 0 0 1-1.8 1.8H5.8A1.8 1.8 0 0 1 4 18.2v-6.7M3 9.2A2.2 2.2 0 0 1 5.2 7h13.6A2.2 2.2 0 0 1 21 9.2v1.3a2 2 0 0 1-1.3 1.9A22.6 22.6 0 0 1 12 14a22.6 22.6 0 0 1-7.7-1.6A2 2 0 0 1 3 10.5V9.2Z" />
        <path d="M12 12.5v3" />
      </svg>
    ),
  },
  {
    title: 'Scholarships',
    description: 'Find education and scholarship updates.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m3 9 9-5 9 5-9 5-9-5Z" />
        <path d="M7 12v4.5c2.7 2 7.3 2 10 0V12M21 9v6" />
      </svg>
    ),
  },
  {
    title: 'Passport Applications',
    description: 'Get helpful passport application information.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <circle cx="12" cy="11" r="3.5" />
        <path d="M8.5 11h7M12 7.5c1.2 1.2 1.2 5.8 0 7M9 17h6" />
      </svg>
    ),
  },
  {
    title: 'Other Opportunities',
    description: 'Explore more opportunities shared with the community.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 18h6M10 22h4M8.6 14.5A7 7 0 1 1 15.4 14.5c-1 .8-1.4 1.5-1.4 2.5h-4c0-1-.4-1.7-1.4-2.5Z" />
        <path d="M12 2V.8M4.9 4.9 4 4m15.1.9L20 4M3 12H1.8M22.2 12H21" />
      </svg>
    ),
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.7Z" />
      <path d="M8.2 7.8c.2-.5.5-.5.8-.5h.4c.1 0 .3 0 .5.4l.7 1.7c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4 0 .7.7 1.3 1.7 2.3 3 2.9.3.2.5.1.7-.1l.8-1c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .2-.2 1.3-.8 1.8-.5.5-1.3.8-2.1.7-1.2-.2-2.8-.8-4.6-2.4-2-1.8-3.2-4.1-3.3-5.3-.1-.6.1-1.1.4-1.5.4-.4.8-.6 1.3-.6Z" />
    </svg>
  )
}

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f8f7f2] text-[#0b1d35]">
      <header className="relative z-20 border-b border-white/10 bg-[#07182e] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 sm:px-8 lg:px-10">
          <a
            className="group flex shrink-0 items-center gap-3"
            href={WHATSAPP_URL}
            aria-label="Apply with Intore — join WhatsApp group"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-[#d8a928] text-lg font-extrabold text-[#07182e] shadow-[0_8px_24px_rgba(216,169,40,.22)] transition-transform group-hover:-rotate-3 group-hover:scale-105">
              AI
            </span>
            <span className="text-[17px] font-bold tracking-[-0.02em] sm:text-lg">
              Apply with <span className="text-[#e4b937]">Intore</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navigation.map((item) => (
              <a
                key={item}
                href={WHATSAPP_URL}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/8 hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            className="hidden items-center gap-2 rounded-xl border border-[#e4b937]/60 px-4 py-2.5 text-sm font-bold text-[#f3cf67] transition-all hover:border-[#e4b937] hover:bg-[#e4b937] hover:text-[#07182e] sm:flex"
          >
            Join group <ArrowIcon />
          </a>
        </div>

        <nav
          className="scrollbar-none flex gap-1 overflow-x-auto border-t border-white/8 px-4 py-2 lg:hidden"
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <a
              key={item}
              href={WHATSAPP_URL}
              className="shrink-0 rounded-lg px-3 py-2 text-xs font-semibold text-slate-300 transition-colors hover:bg-white/8 hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="relative bg-[#07182e] text-white">
          <div className="hero-grid absolute inset-0 opacity-30" />
          <div className="glow absolute -right-40 top-0 size-[32rem] rounded-full" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-16 sm:px-8 sm:pb-28 sm:pt-20 lg:grid-cols-[1.12fr_.88fr] lg:items-center lg:px-10 lg:py-28">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d8a928]/35 bg-[#d8a928]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#f2ca58]">
                <span className="size-1.5 rounded-full bg-[#e4b937] shadow-[0_0_0_4px_rgba(228,185,55,.13)]" />
                Your next opportunity starts here
              </div>
              <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Find Opportunities.
                <span className="mt-1 block text-[#e2b438]">Apply with Intore.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Get information about jobs, scholarships, passport applications, and
                other opportunities.
              </p>
              <a
                href={WHATSAPP_URL}
                className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-[#d8a928] px-6 py-4 text-sm font-extrabold text-[#07182e] shadow-[0_14px_38px_rgba(216,169,40,.22)] transition-all hover:-translate-y-1 hover:bg-[#edc34b] hover:shadow-[0_18px_46px_rgba(216,169,40,.3)] sm:text-base"
              >
                <span className="whatsapp-icon"><WhatsAppIcon /></span>
                Join WhatsApp Group
                <span className="arrow transition-transform group-hover:translate-x-1"><ArrowIcon /></span>
              </a>
            </div>

            <a
              href={WHATSAPP_URL}
              className="group relative mx-auto w-full max-w-md rounded-[2rem] border border-white/12 bg-white/[.07] p-4 shadow-2xl backdrop-blur-sm transition-transform hover:-translate-y-1 lg:rotate-2 lg:hover:rotate-0"
              aria-label="Join the Apply with Intore WhatsApp community"
            >
              <div className="rounded-[1.5rem] bg-white p-7 text-[#0b1d35] sm:p-9">
                <div className="mb-10 flex items-center justify-between">
                  <span className="grid size-14 place-items-center rounded-2xl bg-[#e8f7ee] text-[#168b4c]">
                    <span className="whatsapp-card-icon"><WhatsAppIcon /></span>
                  </span>
                  <span className="rounded-full bg-[#fff7dc] px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#937015]">
                    Community
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-500">Apply with Intore</p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.035em]">
                  Opportunities, shared simply.
                </h2>
                <div className="mt-9 flex items-center justify-between border-t border-slate-100 pt-6">
                  <span className="text-sm font-bold">Join the group</span>
                  <span className="card-arrow grid size-10 place-items-center rounded-full bg-[#07182e] text-white transition-transform group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mb-11 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#9a7212]">
                Explore opportunities
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
                Information that moves you forward.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-600">
              Join our WhatsApp group to stay connected to the latest updates.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {opportunities.map((opportunity) => (
              <a
                key={opportunity.title}
                href={WHATSAPP_URL}
                className="opportunity-card group flex min-h-64 flex-col rounded-2xl border border-[#dfe3e8] bg-white p-6 shadow-[0_8px_28px_rgba(11,29,53,.055)] transition-all hover:-translate-y-1.5 hover:border-[#d8a928]/70 hover:shadow-[0_18px_40px_rgba(11,29,53,.1)]"
              >
                <span className="opportunity-icon grid size-12 place-items-center rounded-xl bg-[#eef1f4] text-[#0b1d35] transition-colors group-hover:bg-[#d8a928]">
                  {opportunity.icon}
                </span>
                <h3 className="mt-8 text-xl font-extrabold tracking-[-0.025em]">
                  {opportunity.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{opportunity.description}</p>
                <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-extrabold text-[#8c6710]">
                  Learn more <span className="arrow"><ArrowIcon /></span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10">
          <a
            href={WHATSAPP_URL}
            className="cta-panel group relative flex flex-col items-start justify-between gap-8 overflow-hidden rounded-[2rem] bg-[#d8a928] px-7 py-10 text-[#07182e] shadow-[0_22px_55px_rgba(11,29,53,.13)] transition-transform hover:-translate-y-1 sm:px-11 sm:py-12 lg:flex-row lg:items-center"
          >
            <div className="relative z-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em]">Stay informed</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
                Don’t miss your next opportunity.
              </h2>
            </div>
            <span className="relative z-10 inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#07182e] px-5 py-3.5 text-sm font-extrabold text-white">
              Join WhatsApp Group
              <span className="arrow transition-transform group-hover:translate-x-1"><ArrowIcon /></span>
            </span>
          </a>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p className="font-bold text-[#0b1d35]">Apply with Intore</p>
          <p>Opportunities, shared simply.</p>
        </div>
      </footer>
    </div>
  )
}
