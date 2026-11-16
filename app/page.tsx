const NAME = "Beka";
const PHONE = "267-895-9776";
const INSTAGRAM = "f8_mq4";
const TELEGRAM = "m1sql";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 p-6 font-sans text-white">
      {/* soft glow blobs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-fuchsia-600/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />

      <div className="motion-safe:animate-fade-up relative w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-xl">
        <div className="motion-safe:animate-fade-up [animation-delay:150ms] mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 p-1">
          <img src="/pfp.jpg" alt={NAME} className="h-full w-full rounded-full border-2 border-zinc-950 object-cover" />
        </div>

        <h1 className="motion-safe:animate-fade-up [animation-delay:250ms] text-2xl font-semibold tracking-tight">{NAME}</h1>
        <p className="motion-safe:animate-fade-up [animation-delay:300ms] mt-1 text-sm text-zinc-400">Get in touch 👋</p>

        <div className="mt-8 flex flex-col gap-3">
          <a
            href={`tel:+1${PHONE.replace(/\D/g, "")}`}
            className="motion-safe:animate-fade-up [animation-delay:400ms] flex items-center justify-center gap-3 rounded-2xl bg-white px-5 py-4 font-medium text-zinc-900 transition hover:scale-[1.02] hover:bg-zinc-100"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1z" />
            </svg>
            {PHONE}
          </a>

          <a
            href={`https://instagram.com/${INSTAGRAM}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 motion-safe:animate-fade-up [animation-delay:500ms] via-pink-500 to-purple-600 px-5 py-4 font-medium transition hover:scale-[1.02] hover:brightness-110"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
            @{INSTAGRAM}
          </a>

          <a
            href={`https://t.me/${TELEGRAM}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-sky-400 motion-safe:animate-fade-up [animation-delay:600ms] to-blue-600 px-5 py-4 font-medium transition hover:scale-[1.02] hover:brightness-110"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M21.9 4.3 18.7 19.4c-.24 1.07-.87 1.33-1.77.83l-4.9-3.6-2.36 2.27c-.26.26-.48.48-.98.48l.35-4.98 9.07-8.2c.4-.35-.08-.55-.61-.2L6.3 13.07l-4.83-1.5c-1.05-.33-1.07-1.05.22-1.55L20.6 2.74c.88-.33 1.65.2 1.3 1.56z" />
            </svg>
            @{TELEGRAM}
          </a>
        </div>
      </div>
    </main>
  );
}
