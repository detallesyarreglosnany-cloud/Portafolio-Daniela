"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function WhoIAmSection() {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-gold mb-3">
            ¿Quién soy y por qué deberías escucharme?
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Photo of Daniela */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-56 h-72 md:w-64 md:h-80 rounded-2xl border-2 border-gold/50 glow-border overflow-hidden">
                <Image
                  src="/images/daniela-silva.jpeg"
                  alt="Daniela Silva - Estratega Digital y Creadora de Llave Digital 3.0"
                  width={256}
                  height={320}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl -z-10 blur-md" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0F0D0B] to-transparent rounded-b-2xl" />
            </div>
          </motion.div>
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 space-y-4"
          >
            <p className="text-foreground/90 text-sm md:text-base leading-relaxed">
              Me llamo Daniela Silva y sé exactamente lo que sientes. Yo también estuve ahí:{" "}
              <span className="text-gold font-semibold">viviendo al día, contando cada moneda, haciendo malabares para que alcance</span>.
              No era la vida que soñaba, pero era la única que conocía.
            </p>
            <p className="text-foreground/90 text-sm md:text-base leading-relaxed">
              Trabajaba horas interminables en algo que no me llenaba, llegaba exhausta a casa, y seguía sin llegar a fin de mes.
              <span className="text-gold font-semibold"> Sentía que estaba fallando</span>, aunque estaba dando todo de mí.
            </p>
            <p className="text-foreground/90 text-sm md:text-base leading-relaxed">
              Un día descubrí la inteligencia artificial, y mi vida cambió. No porque fuera fácil, sino porque por primera vez
              tenía una herramienta que{" "}
              <span className="text-gold font-semibold">trabajaba para mí, no yo para ella</span>. Aprendí a usarla, la combiné
              con un sistema de ventas y empecé a generar ingresos reales desde mi celular.
            </p>
            <p className="text-foreground/90 text-sm md:text-base leading-relaxed">
              Hoy soy afiliada de <span className="text-gold font-semibold">&quot;La Franquicia IA&quot; de Tata Salazar</span>,
              uno de los programas más completos y exitosos del mercado. Y creo en este producto porque lo he vivido: funciona.
            </p>
            <p className="text-foreground/90 text-sm md:text-base leading-relaxed">
              <span className="text-gold font-semibold">Llave Digital 3.0 no es solo un curso</span>. Es el camino que yo seguí,
              simplificado y estructurado para que tú no tengas que cometer los mismos errores. Es la hoja de ruta que me
              hubiera gustado tener desde el principio.
            </p>
            <p className="text-foreground/90 text-sm md:text-base leading-relaxed">
              No te voy a prometer que te harás rica de la noche a la mañana. Eso es mentira. Pero sí te puedo decir que{" "}
              <span className="text-gold font-semibold">si sigues los pasos, si te comprometes, los resultados llegan</span>. Llegaron
              para mí, llegaron para cientos de mujeres, y pueden llegar para ti.
            </p>
            <p className="text-foreground/90 text-sm md:text-base leading-relaxed">
              No necesitas experiencia técnica. No necesitas ser experta en nada.{" "}
              <span className="text-gold font-semibold">Solo necesitas decidir que estás lista para algo diferente</span>.
            </p>
            <p className="text-foreground/90 text-sm md:text-base leading-relaxed font-semibold">
              Yo ya tomé esa decisión. ¿Y tú?
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
