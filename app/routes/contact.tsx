import type { Route } from "./+types/contact";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import { Subscribe } from "~/components/Subscibe";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Contact Us - Alchemy Forge" },
        {
            name: "description",
            content: "Get in touch with the Alchemy Forge team. Book a demo or ask us anything.",
        },
    ];
}

export default function Contact() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* ── Hero band ─────────────────────────────────────────── */}
            <header className="relative bg-gray-50 pt-28 pb-16 px-8 md:px-16 overflow-hidden border-b border-gray-100">
                <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
                <div className="absolute right-8 top-8 hidden lg:block select-none pointer-events-none">
                    <div className="text-gray-900/5 font-bold text-[140px] leading-none tracking-tighter">AF</div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="mb-6 flex items-center gap-4 text-orange-500 text-[10px] font-bold tracking-[0.3em] uppercase">
                        <span className="w-10 h-px bg-orange-500" />
                        <span>Get in Touch · Alchemy Forge</span>
                    </div>
                    <h1 className="type-display font-bold text-gray-900 uppercase tracking-tight mb-4">
                        Forge Your <span className="text-orange-500">Next Move.</span>
                    </h1>
                    <p className="type-lead text-gray-500 max-w-xl">
                        Stop managing chaos and start forging results. Tell us about your project and we'll be in touch.
                    </p>
                </div>
            </header>
            <ContactForm
                title="Send us a message."
                subtitle="Our team typically responds within one business day."
            />

            <Footer />
        </div>
    );
}
