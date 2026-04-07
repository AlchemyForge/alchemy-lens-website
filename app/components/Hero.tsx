import { useEffect, useRef, useState } from "react";
import heroBg from "../assets/hero.png";
import { RightArrowIcon } from "./icons";

const LABELS = [
    "Industrial Intelligence",
    "Predictive Site Awareness",
    "Real-Time Risk Detection",
    "Supply Chain Foresight",
    "Construction AI Platform",
];

const TYPING_SPEED = 55;   // ms per character
const DELETING_SPEED = 30; // ms per character
const PAUSE_AFTER_TYPE = 2200; // ms before deleting
const PAUSE_AFTER_DELETE = 400; // ms before typing next

function useTypingRotation(labels: string[]) {
    const [displayed, setDisplayed] = useState("");
    const [labelIndex, setLabelIndex] = useState(0);
    const [phase, setPhase] = useState<"typing" | "pausing" | "deleting" | "waiting">("typing");
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const current = labels[labelIndex];

        if (phase === "typing") {
            if (displayed.length < current.length) {
                timeoutRef.current = setTimeout(() => {
                    setDisplayed(current.slice(0, displayed.length + 1));
                }, TYPING_SPEED);
            } else {
                timeoutRef.current = setTimeout(() => setPhase("deleting"), PAUSE_AFTER_TYPE);
            }
        } else if (phase === "deleting") {
            if (displayed.length > 0) {
                timeoutRef.current = setTimeout(() => {
                    setDisplayed(displayed.slice(0, -1));
                }, DELETING_SPEED);
            } else {
                timeoutRef.current = setTimeout(() => {
                    setLabelIndex((i) => (i + 1) % labels.length);
                    setPhase("typing");
                }, PAUSE_AFTER_DELETE);
            }
        }

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [displayed, phase, labelIndex, labels]);

    return displayed;
}

export const Hero = () => {
    const typedLabel = useTypingRotation(LABELS);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="hero background"
                    className="w-full h-full object-cover opacity-60 hero-mask"
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
                {/* Left content */}
                <div className="lg:col-span-7 flex flex-col items-start gap-6">
                    <div className="flex items-center gap-3">
                        <span className="h-[2px] w-12 bg-teal-600" />
                        <span className="text-teal-600 font-semibold uppercase tracking-widest text-sm inline-flex items-center">
                            {typedLabel}
                            <span className="ml-[2px] inline-block w-[2px] h-[1em] bg-teal-500 animate-pulse align-middle" />
                        </span>
                    </div>

                    <h1 className="type-display font-bold text-white leading-[0.9] tracking-tighter">
                        Forging the <br /> <span className="text-orange-500 italic">future</span> of <br /> construction.
                    </h1>

                    <p className="type-lead max-w-xl text-white/80 font-medium leading-relaxed">
                        Construction teams finish on time when every signal lines up. <span className="text-white">Alchemy Lens</span> turns schedules, consents,
                        supplier ETA’s and site notes into early, explainable calls.
                    </p>

                    {/* <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-xl font-semibold shadow-xl ai-glow-hover transition-transform active:scale-95"
                        >
                            See Alchemy Lens in Action
                            <RightArrowIcon className="w-6 h-6" />
                        </a>
                    </div> */}
                </div>

                {/* Right visual panel */}
                <div className="lg:col-span-5 hidden lg:block relative">
                    <div className="relative group">
                        <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-gray-800 shadow-2xl">
                            <img src={heroBg} alt="hero visual" className="w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-black/20" />
                        </div>

                        <div className="absolute -top-6 -left-12 glass p-6 rounded-lg shadow-2xl w-64">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Site Progress</span>
                                <span className="material-symbols-outlined text-teal-600 text-sm">analytics</span>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-white/80">Foundation</span>
                                        <span className="text-white">92%</span>
                                    </div>
                                    <div className="h-1 bg-white/10 w-full rounded">
                                        <div className="h-full bg-teal-600 w-[92%] rounded" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-white/80">Structural</span>
                                        <span className="text-white">45%</span>
                                    </div>
                                    <div className="h-1 bg-white/10 w-full rounded">
                                        <div className="h-full bg-orange-500 w-[45%] rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-10 -right-8 glass p-6 rounded-lg shadow-2xl w-72">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                                <span className="text-sm font-bold text-white uppercase tracking-tight">Alchemy Alert</span>
                            </div>
                            <p className="text-xs text-gray-300 leading-relaxed italic mb-4">
                                "Supplier ETA for Grade-A Steel delayed by 14h. Rerouting assembly teams to Zone B."
                            </p>
                            <div className="flex justify-end">
                                <span className="text-[10px] font-bold text-orange-500 uppercase">Optimizing Schedule...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};