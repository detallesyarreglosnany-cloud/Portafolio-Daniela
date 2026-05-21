"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { trackLead, trackInitiateCheckout } from "@/lib/pixel";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const HOTMART_LINK = "https://go.hotmart.com/S105487769E?ap=15e3";

const questions = [
  {
    q: "¿Tienes un celular con internet?",
    options: ["Sí, tengo celular e internet", "Solo celular, internet limitado", "No tengo celular propio"],
    scores: [3, 2, 0],
  },
  {
    q: "¿Cuánto tiempo puedes dedicar al día?",
    options: ["1-2 horas", "3-4 horas", "5+ horas", "Menos de 1 hora"],
    scores: [2, 3, 3, 1],
  },
  {
    q: "¿Has intentado generar ingresos online antes?",
    options: ["Nunca he intentado", "Lo intenté pero no funcionó", "Sí, y tuve algunos resultados", "Sí, y tengo experiencia"],
    scores: [2, 2, 3, 3],
  },
  {
    q: "¿Estás dispuesta a seguir un sistema paso a paso?",
    options: ["Sí, estoy lista", "Necesito pensarlo", "No estoy segura"],
    scores: [3, 1, 0],
  },
];

export function QuizSection() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (scoreIdx: number) => {
    const newAnswers = [...answers, questions[step].scores[scoreIdx]];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const maxScore = questions.length * 3;
  const isPositive = totalScore >= maxScore * 0.5;
  const progressPct = ((step + (showResult ? 1 : 0)) / questions.length) * 100;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    // Store in localStorage
    const leads = JSON.parse(localStorage.getItem("llave_digital_leads") || "[]");
    leads.push({ name, email, score: totalScore, date: new Date().toISOString() });
    localStorage.setItem("llave_digital_leads", JSON.stringify(leads));
    trackLead();
    setSubmitted(true);
    // Redirect after short delay
    setTimeout(() => {
      trackInitiateCheckout();
      window.open(HOTMART_LINK, "_blank");
    }, 1500);
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers([]);
    setShowResult(false);
    setName("");
    setEmail("");
    setSubmitted(false);
  };

  return (
    <section id="quiz" className="py-16 md:py-20 px-4 bg-[#0A0908]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-gold mb-3">
            ¿Es Llave Digital para ti?
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Responde 4 preguntas y descúbrelo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-gold/20 rounded-2xl p-6 md:p-8"
        >
          {!showResult ? (
            <>
              <div className="mb-6">
                <div className="flex justify-between text-xs text-muted-foreground mb-2">
                  <span>Pregunta {step + 1} de {questions.length}</span>
                  <span>{Math.round(progressPct)}%</span>
                </div>
                <Progress
                  value={progressPct}
                  className="h-2 [&>div]:bg-gold bg-gold/10"
                />
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-foreground font-bold text-lg md:text-xl mb-5">
                    {questions[step].q}
                  </h3>
                  <div className="space-y-3">
                    {questions[step].options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleAnswer(i)}
                        className="w-full text-left bg-[#0F0D0B] border border-gold/15 rounded-xl px-5 py-4 text-foreground/90 hover:border-gold/50 hover:bg-gold/5 transition-all duration-200 text-sm md:text-base"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-gold font-bold text-2xl mb-2">
                    {isPositive ? "¡Sí, Llave Digital es para ti!" : "Llave Digital puede funcionarte"}
                  </h3>
                  <p className="text-foreground/80 text-sm mb-6">
                    {isPositive
                      ? "Tienes todo lo necesario para empezar a generar ingresos con IA. Solo necesitas dar el primer paso."
                      : "Aunque tu situación actual es retadora, Llave Digital está diseñado para adaptarse a diferentes realidades. Con compromiso, puedes lograrlo."}
                  </p>
                  <p className="text-muted-foreground text-sm mb-6">
                    Déjanos tus datos y te enviaremos más información
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-3 max-w-sm mx-auto">
                    <Input
                      placeholder="Tu nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-[#0F0D0B] border-gold/20 text-foreground placeholder:text-muted-foreground focus:border-gold"
                      required
                    />
                    <Input
                      placeholder="Tu email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-[#0F0D0B] border-gold/20 text-foreground placeholder:text-muted-foreground focus:border-gold"
                      required
                    />
                    <Button
                      type="submit"
                      className="w-full bg-gold hover:bg-gold-light text-[#0F0D0B] font-bold py-5 rounded-lg"
                    >
                      Quiero mi Llave Digital
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="submitted"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle2 className="w-12 h-12 text-gold mx-auto mb-3" />
                  <h3 className="text-gold font-bold text-xl mb-2">¡Perfecto!</h3>
                  <p className="text-foreground/80 text-sm">
                    Te estamos redirigiendo para activar tu Llave Digital...
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          )}

          {showResult && !submitted && (
            <button
              onClick={resetQuiz}
              className="mt-4 text-xs text-muted-foreground hover:text-gold transition-colors mx-auto block"
            >
              Volver a hacer el quiz
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
