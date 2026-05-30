const navLinks = ["Method", "Results", "Coaching", "Testimonials"];

const stats = [
  { value: "+8KG", label: "Muscle Gain" },
  { value: "-12KG", label: "Fat Loss" },
  { value: "94%", label: "Client Retention" },
];

const transformations = [
  {
    image:
      "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?auto=format&fit=crop&w=900&q=85",
    result: "+8KG LEAN MASS / 16 WEEKS",
  },
  {
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=85",
    result: "-12KG FAT LOSS / 14 WEEKS",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=900&q=85",
    result: "RECOMPOSITION / 12 WEEKS",
  },
];

const methodSteps = [
  {
    number: "01",
    title: "Assessment",
    description: "Complete physique, nutrition and lifestyle audit.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Custom training and nutrition roadmap.",
  },
  {
    number: "03",
    title: "Execution",
    description: "Weekly coaching, tracking and accountability.",
  },
  {
    number: "04",
    title: "Optimization",
    description: "Continuous adjustments based on performance.",
  },
];

const testimonials = [
  {
    quote: "I finally stopped guessing and started progressing.",
    client: "Daniel, 29",
  },
  {
    quote: "The accountability changed everything.",
    client: "Michael, 34",
  },
  {
    quote: "Best investment I've made in myself.",
    client: "Jonathan, 27",
  },
];

const trustMetrics = [
  { value: "150+", label: "Clients Coached" },
  { value: "5+", label: "Years Experience" },
  { value: "94%", label: "Retention Rate" },
];

function Hero() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050505]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-8 lg:px-16">
          <a
            href="#top"
            className="flex items-center gap-3 text-xl font-black tracking-[0.18em]"
            aria-label="ELEVATE home"
          >
            <span className="h-2 w-2 rounded-full bg-[#B6FF00]" />
            ELEVATE
          </a>

          <div className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9CA3AF] transition hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>

          <a
            href="#apply"
            className="border border-[#B6FF00]/70 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-[#B6FF00] transition hover:bg-[#B6FF00] hover:text-black"
          >
            Apply Now
          </a>
        </div>
      </nav>

      <section
        id="top"
        className="relative flex min-h-screen items-center px-8 pt-20 lg:px-24"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_44%,rgba(182,255,0,0.1),transparent_30%),linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.96)_42%,rgba(5,5,5,0.78)_100%)]" />
        <div className="relative mx-auto grid w-full max-w-[1520px] items-center gap-16 py-28 lg:grid-cols-[0.78fr_1.22fr] xl:gap-24">
          <div className="max-w-xl">
            <p className="mb-8 text-xs font-black uppercase tracking-[0.36em] text-[#B6FF00]">
              Private Performance Coaching
            </p>

            <h1 className="max-w-[540px] text-4xl font-black uppercase leading-[0.94] tracking-[-0.052em] text-white md:text-5xl xl:text-6xl">
              Build a Stronger, Leaner Physique With Precision.
            </h1>

            <p className="mt-8 max-w-[620px] text-lg leading-8 text-[#9CA3AF]">
              Premium 1:1 coaching for men who want structure, accountability,
              and measurable physical transformation.
            </p>

            <div className="mt-12 flex flex-col gap-5 sm:flex-row">
              <a
                href="#apply"
                className="inline-flex items-center justify-center border border-[#D8FF79]/40 bg-[#B6FF00] px-9 py-4 text-sm font-black uppercase tracking-[0.16em] text-black shadow-[0_18px_50px_rgba(182,255,0,0.14)] transition hover:bg-white hover:shadow-[0_22px_60px_rgba(255,255,255,0.1)]"
              >
                Apply for Coaching
              </a>
              <a
                href="#method"
                className="inline-flex items-center justify-center border border-white/15 px-9 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:border-[#B6FF00] hover:text-[#B6FF00]"
              >
                View Method
              </a>
            </div>

            <div className="mt-7 flex items-center gap-3 text-xs text-[#9CA3AF]">
              <span className="font-black text-[#B6FF00]">✓</span>
              Limited coaching spots available this month.
            </div>
          </div>

          <div className="relative min-h-[805px] overflow-hidden border border-white/10 bg-[#101010] shadow-[0_44px_140px_rgba(0,0,0,0.6)]">
            <img
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1400&q=85"
              alt="Serious athlete training in a dark premium gym"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-70 grayscale"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.32)_0%,rgba(5,5,5,0.05)_45%,rgba(5,5,5,0.5)_100%),linear-gradient(180deg,rgba(5,5,5,0.12)_0%,rgba(5,5,5,0.2)_42%,rgba(5,5,5,0.92)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_28%,rgba(182,255,0,0.22),transparent_24%),radial-gradient(circle_at_38%_60%,rgba(255,255,255,0.12),transparent_20%)] mix-blend-screen" />
            <div className="absolute inset-6 border border-white/10" />
            <div className="absolute left-8 top-8 border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-md">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#B6FF00]">
                Editorial Fitness
              </p>
              <p className="mt-1 text-xs text-[#9CA3AF]">
                Dark gym atmosphere / serious athlete silhouette
              </p>
            </div>
            <div className="absolute bottom-8 right-8 border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-md">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#9CA3AF]">
                1:1 Coaching
              </p>
              <p className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">
                Precision Plan
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="results"
        className="relative border-t border-white/10 bg-[#050505] px-8 py-28 lg:px-24 lg:py-36"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(182,255,0,0.07),transparent_28%)]" />
        <div className="relative mx-auto max-w-[1440px]">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs font-black uppercase tracking-[0.34em] text-[#B6FF00]">
              Results
            </p>
            <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-white md:text-5xl lg:text-6xl">
              Real Results. Measurable Change.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#9CA3AF]">
              Transformation built through precise training, structured
              nutrition, and weekly accountability that keeps progress
              measurable.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group border border-white/10 bg-[#101010] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#B6FF00]/45 hover:bg-[#121409]"
              >
                <div className="mb-10 h-px w-14 bg-[#B6FF00]" />
                <p className="text-5xl font-black uppercase tracking-[-0.06em] text-white transition group-hover:text-[#B6FF00]">
                  {stat.value}
                </p>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-[#9CA3AF]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid gap-6 lg:grid-cols-3">
            {transformations.map((transformation, index) => (
              <article
                key={transformation.result}
                className="group overflow-hidden border border-white/10 bg-[#101010] transition duration-300 hover:-translate-y-1 hover:border-[#B6FF00]/40"
              >
                <div className="relative min-h-[420px] overflow-hidden bg-[#0B0B0B]">
                  <img
                    src={transformation.image}
                    alt={`Client transformation ${index + 1}`}
                    className="absolute inset-0 h-full w-full object-cover opacity-70 grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.05)_0%,rgba(5,5,5,0.28)_45%,rgba(5,5,5,0.92)_100%)]" />
                  <div className="absolute left-5 top-5 border border-white/10 bg-black/55 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white backdrop-blur-md">
                    Before
                  </div>
                  <div className="absolute right-5 top-5 border border-[#B6FF00]/40 bg-[#B6FF00] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-black">
                    After
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-[#B6FF00]">
                    Client Result
                  </p>
                  <p className="mt-3 text-2xl font-black uppercase tracking-[-0.04em] text-white">
                    {transformation.result}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="method"
        className="relative border-t border-white/10 bg-[#0B0B0B] px-8 py-28 lg:px-24 lg:py-36"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(182,255,0,0.04)_0%,rgba(5,5,5,0)_36%)]" />
        <div className="relative mx-auto max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="mb-6 text-xs font-black uppercase tracking-[0.34em] text-[#B6FF00]">
                The Method
              </p>
              <h2 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-white md:text-5xl lg:text-6xl">
                The System That Drives Results.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#9CA3AF] lg:justify-self-end">
              A structured coaching framework designed to eliminate guesswork
              and create measurable progress.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {methodSteps.map((step) => (
              <article
                key={step.number}
                className="group min-h-[300px] border border-white/10 bg-[#101010] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#B6FF00]/45 hover:bg-[#111407]"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-black uppercase tracking-[0.24em] text-[#B6FF00]">
                    Step {step.number}
                  </p>
                  <div className="h-px w-12 bg-white/15 transition group-hover:bg-[#B6FF00]" />
                </div>
                <h3 className="mt-20 text-2xl font-black uppercase tracking-[-0.04em] text-white">
                  {step.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-[#9CA3AF]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="relative border-t border-white/10 bg-[#050505] px-8 py-28 lg:px-24 lg:py-36"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(182,255,0,0.06),transparent_30%)]" />
        <div className="relative mx-auto max-w-[1440px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-6 text-xs font-black uppercase tracking-[0.34em] text-[#B6FF00]">
              Testimonials
            </p>
            <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-white md:text-5xl lg:text-6xl">
              What Clients Say.
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-[#9CA3AF]">
              Results are important. The experience matters just as much.
            </p>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.client}
                className="group relative min-h-[320px] overflow-hidden border border-white/10 bg-[#101010] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#B6FF00]/45 hover:bg-[#111407]"
              >
                <div className="absolute right-8 top-6 text-7xl font-black leading-none text-white/[0.04] transition group-hover:text-[#B6FF00]/10">
                  ”
                </div>
                <p className="text-sm tracking-[0.22em] text-[#B6FF00]">
                  ★★★★★
                </p>
                <blockquote className="relative mt-16 text-2xl font-black leading-tight tracking-[-0.04em] text-white">
                  “{testimonial.quote}”
                </blockquote>
                <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-[#9CA3AF]">
                  — {testimonial.client}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 grid border border-white/10 bg-[#0B0B0B] md:grid-cols-3">
            {trustMetrics.map((metric) => (
              <div
                key={metric.label}
                className="border-b border-white/10 p-8 text-center md:border-b-0 md:border-r last:md:border-r-0 md:border-white/10"
              >
                <p className="text-4xl font-black uppercase tracking-[-0.05em] text-white">
                  {metric.value}
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.22em] text-[#9CA3AF]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="apply"
        className="relative border-t border-white/10 bg-[#050505] px-8 py-32 lg:px-24 lg:py-44"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(182,255,0,0.12),transparent_28%),linear-gradient(180deg,#050505_0%,#0B0B0B_100%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-7 text-xs font-black uppercase tracking-[0.34em] text-[#B6FF00]">
            Final CTA
          </p>
          <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.055em] text-white md:text-6xl lg:text-7xl">
            Ready to Build Your Strongest Physique?
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#9CA3AF]">
            Apply for private coaching and get a personalized plan designed
            around your goals, lifestyle and schedule.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <a
              href="#apply"
              className="inline-flex items-center justify-center border border-[#D8FF79]/40 bg-[#B6FF00] px-10 py-4 text-sm font-black uppercase tracking-[0.16em] text-black shadow-[0_18px_50px_rgba(182,255,0,0.14)] transition hover:bg-white hover:shadow-[0_22px_60px_rgba(255,255,255,0.1)]"
            >
              Apply Now
            </a>
            <a
              href="#call"
              className="inline-flex items-center justify-center border border-white/15 px-10 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:border-[#B6FF00] hover:text-[#B6FF00]"
            >
              Book a Call
            </a>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 text-xs text-[#9CA3AF] sm:flex-row sm:gap-8">
            <span>
              <span className="mr-2 font-black text-[#B6FF00]">✓</span>
              Limited spots available
            </span>
            <span>
              <span className="mr-2 font-black text-[#B6FF00]">✓</span>
              Personalized coaching
            </span>
            <span>
              <span className="mr-2 font-black text-[#B6FF00]">✓</span>
              Weekly accountability
            </span>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050505] px-8 py-16 lg:px-24 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <a
                href="#top"
                className="inline-flex items-center gap-3 text-xl font-black uppercase tracking-[0.18em] text-white transition hover:text-[#B6FF00]"
                aria-label="ELEVATE home"
              >
                <span className="h-2 w-2 rounded-full bg-[#B6FF00]" />
                ELEVATE
              </a>
              <p className="mt-6 max-w-sm text-sm leading-7 text-[#9CA3AF]">
                Private performance coaching for men who want measurable
                transformation.
              </p>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-white">
                Navigation
              </p>
              <div className="mt-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-sm font-semibold text-[#9CA3AF] transition hover:text-[#B6FF00]"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-white">
                Contact
              </p>
              <div className="mt-6 flex flex-col gap-4">
                <a
                  href="mailto:hello@elevate.com"
                  className="text-sm font-semibold text-[#9CA3AF] transition hover:text-[#B6FF00]"
                >
                  hello@elevate.com
                </a>
                <a
                  href="https://instagram.com"
                  className="text-sm font-semibold text-[#9CA3AF] transition hover:text-[#B6FF00]"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8">
            <p className="text-xs text-[#9CA3AF]">
              © 2026 Elevate Coaching. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function App() {
  return <Hero />;
}

export default App;
