import { AnimatedSection } from "./AnimatedSection";
import step1Image from "../assets/reveal.webp";
import step2Image from "../assets/transmute.webp";
import step3Image from "../assets/forge.webp";

export const HowItWorks = () => {
    return (
        <AnimatedSection id="how-it-works" className="py-16 lg:py-24 px-6 lg:px-8 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 md:mb-20">
                    <span className="label-md text-teal-600 font-bold tracking-[0.18em] uppercase block mb-4">The Process</span>
                    <h2 className="type-display font-bold text-gray-900 leading-[0.95]">
                        How it Works
                    </h2>
                </div>

                <div className="space-y-16 md:space-y-32">
                    {/* Step 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center stagger-1">
                        <div className="md:col-span-5 order-2 md:order-1">
                            <div>
                                <span className="font-bold text-gray-900/10 text-[6rem] leading-none tracking-tighter block select-none">01</span>
                                <span className="text-teal-600 text-sm font-bold tracking-[0.25em] uppercase block mb-4">Step 01 / Integration</span>
                                <h3 className="type-sub font-bold text-gray-900 mb-6 leading-tight uppercase">Reveal the same truth.</h3>
                                <p className="type-lead text-gray-600 leading-relaxed mb-8">
                                    We unify scattered signals, schedules, consents, supplier ETAs, and site notes, turning them into a single source of truth.
                                </p>
                            </div>
                        </div>
                        <div className="md:col-span-7 order-1 md:order-2">
                            <div className="relative group">
                                <div className="hidden md:block absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-teal-200/60" />
                                <div className="hidden md:block absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-teal-200/60" />
                                <div className="overflow-hidden rounded-2xl group">
                                    <img
                                        src={step1Image}
                                        alt="Reveal – Unified data visualization"
                                        className="w-full aspect-video object-cover grayscale filter transition-all duration-700 group-hover:grayscale-0"
                                        width={1280}
                                        height={720}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center stagger-2">
                        <div className="md:col-span-7 order-1">
                            <div className="relative group">
                                <div className="hidden md:block absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-teal-200/60" />
                                <div className="hidden md:block absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-teal-200/60" />
                                <div className="overflow-hidden rounded-2xl group">
                                    <img
                                        src={step2Image}
                                        alt="Transmute – AI-powered insights"
                                        className="w-full aspect-video object-cover grayscale filter transition-all duration-700 group-hover:grayscale-0"
                                        width={1280}
                                        height={720}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-5 order-2">
                            <div className="md:pl-8">
                                <span className="font-bold text-gray-900/10 text-[6rem] leading-none tracking-tighter block select-none">02</span>
                                <span className="text-teal-600 text-sm font-bold tracking-[0.25em] uppercase block mb-4">Step 02 / Synthesis</span>
                                <h3 className="type-sub font-bold text-gray-900 mb-6 leading-tight uppercase">Transmute your business.</h3>
                                <p className="type-lead text-gray-600 leading-relaxed mb-8">
                                    Our human-augmented AI turns that unified data into predictive foresight, enabling smarter decisions with quantified outcomes.
                                </p>
                                <a href="#contact" className="inline-flex items-center gap-3 group/link" aria-label="Contact us">
                                    <span className="h-px w-10 bg-teal-600 group-hover/link:w-16 transition-all duration-300" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center stagger-3">
                        <div className="md:col-span-5 order-2 md:order-1">
                            <div>
                                <span className="font-bold text-gray-900/10 text-[6rem] leading-none tracking-tighter block select-none">03</span>
                                <span className="text-teal-600 text-sm font-bold tracking-[0.25em] uppercase block mb-4">Step 03 / Legacy</span>
                                <h3 className="type-sub font-bold text-gray-900 mb-6 leading-tight uppercase">Forge your legacy.</h3>
                                <p className="type-lead text-gray-600 leading-relaxed">
                                    We empower your team to act with confidence, creating an audit-ready trail of every decision to forge plans that last.
                                </p>
                            </div>
                        </div>
                        <div className="md:col-span-7 order-1 md:order-2">
                            <div className="relative group">
                                <div className="hidden md:block absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-teal-200/60" />
                                <div className="hidden md:block absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-teal-200/60" />
                                <div className="overflow-hidden rounded-2xl group">
                                    <img
                                        src={step3Image}
                                        alt="Forge – Actionable decisions"
                                        className="w-full aspect-video object-cover contrast-125 grayscale filter transition-all duration-700 group-hover:grayscale-0"
                                        width={1280}
                                        height={720}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};
