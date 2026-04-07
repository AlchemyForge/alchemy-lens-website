import { AnimatedSection } from "./AnimatedSection"
import constructionImage from "../assets/construction.webp";

export const ProblemStatement = () => {
    return (
        <AnimatedSection id="about" className="py-16 sm:py-24 lg:py-32 px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
                    <div className="lg:col-span-5">
                        <span className="label-md text-teal-600 font-bold tracking-[0.18em] uppercase block mb-4">Critical Inefficiency</span>
                        <h2 className="type-display font-bold text-gray-900 mb-6 leading-[0.95]">
                            The Problem <br />We Solve
                        </h2>
                        <p className="type-lead text-gray-600 max-w-md leading-relaxed">
                            Construction teams capture huge amounts of data, but most of it goes unused and decisions arrive too late.
                        </p>
                    </div>

                    <div className="lg:col-span-7 relative overflow-hidden">
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-teal-100/30 blur-[120px] rounded-full pointer-events-none" />
                        <div className="relative overflow-hidden aspect-[16/10] rounded-lg">
                            <img
                                src={constructionImage}
                                alt="construction"
                                className="w-full h-full object-cover grayscale brightness-75 contrast-110"
                                width={800}
                                height={500}
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />

                            {/* Floating HUD Element */}
                            <div className="absolute top-4 left-4 sm:top-8 sm:left-8 glass p-3 sm:p-6 rounded-lg border border-black/5 max-w-[220px] sm:max-w-xs">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="material-symbols-outlined text-teal-600">warning</span>
                                    <span className="font-semibold text-gray-900 text-xs uppercase tracking-widest text-white">Systemic Failure Detected</span>
                                </div>
                                <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden mb-4">
                                    <div className="h-full bg-teal-600 w-3/4" />
                                </div>
                                <p className="text-[10px] uppercase tracking-tighter text-white/80 font-bold">Data Latency: Critical Status</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Data Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 mb-12">
                    <div className="group bg-white p-8 relative overflow-hidden transition-all duration-300 hover:bg-gray-50 rounded-xl shadow border border-gray-200">                        <div className="absolute top-4 right-4 p-4 opacity-10">
                            <span className="material-symbols-outlined text-7xl text-gray-300">analytics</span>
                        </div>
                        <div className="relative z-10">
                            <div className="text-6xl font-extrabold text-teal-600 mb-4 tracking-tight">
                                95%
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Construction data goes unused, which leaves teams reacting instead of preventing issues.
                            </p>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-teal-100" />
                    </div>

                    <div className="group bg-white p-8 relative overflow-hidden transition-all duration-300 hover:bg-gray-50 rounded-xl shadow border border-gray-200">
                        <div className="absolute top-4 right-4 p-4 opacity-10">
                            <span className="material-symbols-outlined text-7xl text-gray-300">payments</span>
                        </div>
                        <div className="relative z-10">
                            <div className="text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
                                $1.85T
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Lost globally in 2020 due to bad data and poor data practices in construction.
                            </p>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-teal-100" />
                    </div>

                    <div className="group bg-white p-8 relative overflow-hidden transition-all duration-300 hover:bg-gray-50 rounded-xl shadow border border-gray-200">
                        <div className="absolute top-4 right-4 p-4 opacity-10">
                            <span className="material-symbols-outlined text-7xl text-gray-300">schedule</span>
                        </div>
                        <div className="relative z-10">
                            <div className="text-6xl font-extrabold text-orange-500 mb-4 tracking-tight">
                                30%
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Projects finish on time and on budget. Fewer than one third meet plan.
                            </p>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-teal-100" />
                    </div>
                </div>

                   <h3 className="type-sub font-bold text-gray-900 leading-tight text-2xl md:text-4xl pt-8 text-center">
                            We fix this by turning raw signals into <span className="text-teal-600">explainable, early decisions</span> with a clear next step.
                        </h3>
            </div>
        </AnimatedSection>
    )
}