import { ExternalLink, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { SITE } from "./data";
import { Magnetic, Reveal, SectionHeading } from "./primitives";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);
    const subject = encodeURIComponent(String(data.get("subject") || "Portfolio enquiry"));
    const body = encodeURIComponent(
      `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`,
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening your mail app", { description: "Your message is ready to send." });
      form.reset();
    }, 700);
  };

  const field =
    "w-full rounded-2xl border border-border/70 bg-background/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/25";

  return (
    <section id="contact" className="section-pad px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something"
          sub="Clients, collaborators, and recruiters — feel free to reach out via email or order directly on Fiverr."
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <form onSubmit={onSubmit} className="glass-card gradient-border flex h-full flex-col gap-4 p-7 sm:p-9">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                    Name
                  </label>
                  <input id="name" name="name" required placeholder="Your name" className={field} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required placeholder="you@company.com" className={field} />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                  Subject
                </label>
                <input id="subject" name="subject" required placeholder="Project, collaboration, opportunity…" className={field} />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea id="message" name="message" required rows={5} placeholder="Tell me about your project or idea…" className={field} />
              </div>
              <Magnetic>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-float)] transition-transform hover:scale-[1.03] disabled:opacity-70"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <Send className="size-4" />
                  {sending ? "Sending…" : "Send Message"}
                </button>
              </Magnetic>
            </form>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <div className="glass-card flex h-full flex-col justify-center gap-6 p-7 sm:p-9">
                {[
                  { Icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
                  { Icon: ExternalLink, label: "Fiverr Profile", value: "Order directly on Fiverr (@yashh_19)", href: SITE.fiverr },
                  { Icon: Phone, label: "Availability", value: "Available for Freelance & Internships" },
                  { Icon: MapPin, label: "Based in", value: "Bangalore, India · Remote friendly" },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-foreground transition-colors hover:text-primary underline-offset-4 hover:underline"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
