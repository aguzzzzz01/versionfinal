import { useState } from "react";
import { MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Product } from "@/data/products";
import { motion, AnimatePresence } from "motion/react";

const WHATSAPP_NUMBER = "5491138012403";
const waLink = (productName: string) => {
  const msg = `Hola David! Vi tu catálogo web. Me interesa: ${productName} - Código de seguimiento: EXPOSTORE`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};

export function ProductCard({ product }: { product: Product }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  // If product has variants, use selected variant details. Otherwise use main product.
  const hasVariants = product.variants && product.variants.length > 0;
  const currentVariant = hasVariants ? product.variants![selectedIdx] : null;

  const displayName = currentVariant ? currentVariant.name : product.name;
  const displayImage = currentVariant ? currentVariant.image : product.image;
  const displayPrice = currentVariant ? currentVariant.price : product.price || "Contactar";
  const displayDesc = currentVariant ? currentVariant.description : product.description;
  const displayTag = currentVariant ? currentVariant.tag || product.tag : product.tag;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col rounded-2xl border border-border/80 bg-card/40 p-4 hover:border-gold/50 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-gold/5 backdrop-blur-md"
    >
      {/* Decorative ambient background glow */}
      <div className="absolute -top-10 -right-10 size-32 rounded-full bg-gradient-gold opacity-5 blur-2xl group-hover:opacity-15 transition duration-500" />

      {/* Floating Tag */}
      <AnimatePresence mode="wait">
        {displayTag && (
          <motion.div
            key={displayTag}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full text-[9px] font-black tracking-widest bg-gold text-primary-foreground shadow-sm"
          >
            {displayTag.toUpperCase()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Image Stage */}
      <div className="relative aspect-square rounded-xl overflow-hidden bg-white mb-4 border border-border/20">
        <AnimatePresence mode="wait">
          <motion.img
            key={displayImage}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={displayImage}
            alt={displayName}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover transition duration-500"
          />
        </AnimatePresence>
      </div>

      <div className="flex-1 flex flex-col">
        {/* Title */}
        <h3 className="font-bold text-base leading-snug text-foreground/90 group-hover:text-gold transition-colors">
          {displayName}
        </h3>

        {/* Expandable, smooth slidable description with toggle button */}
        <div className="mt-2 text-xs">
          <motion.div
            animate={{ height: isExpanded ? "auto" : "2.6rem" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden relative"
          >
            <p
              className={`text-muted-foreground/90 leading-relaxed font-normal ${!isExpanded ? "line-clamp-2" : ""}`}
            >
              {displayDesc}
            </p>
          </motion.div>

          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-1 flex items-center gap-0.5 text-gold hover:text-amber-400 font-bold transition-colors cursor-pointer text-[10px] uppercase tracking-wider"
          >
            {isExpanded ? (
              <>
                <span>Ver menos</span>
                <ChevronUp className="size-3" />
              </>
            ) : (
              <>
                <span>Ver descripción completa</span>
                <ChevronDown className="size-3" />
              </>
            )}
          </button>
        </div>

        {/* Dynamic Color Selector Rings (Only if has variants) */}
        {hasVariants && (
          <div className="mt-4 space-y-1.5 border-t border-border/20 pt-3">
            <div className="text-[10px] uppercase tracking-widest font-black text-gold/80">
              Elegir Versión / Color:
            </div>
            <div className="flex flex-wrap gap-2 py-1 items-center">
              {product.variants!.map((v, idx) => {
                const isSelected = selectedIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedIdx(idx)}
                    title={v.colorName}
                    type="button"
                    className={`relative size-7 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-115 active:scale-95 border-2 ${
                      isSelected
                        ? "border-gold scale-110 shadow-glow"
                        : "border-border/60 hover:border-gold/40"
                    }`}
                    style={{ backgroundColor: v.colorHex }}
                  >
                    {/* Visual contrasting indicator dot if selected */}
                    {isSelected && (
                      <span
                        className={`size-1.5 rounded-full ${
                          v.colorHex === "#ffffff" ? "bg-black" : "bg-white"
                        }`}
                      />
                    )}
                  </button>
                );
              })}
              <span className="text-[10px] text-muted-foreground/70 font-bold ml-1">
                {product.variants![selectedIdx].colorName}
              </span>
            </div>
          </div>
        )}

        {/* Options & Specs Pricing List if available (like in iPhone) */}
        {!hasVariants && product.options && product.options.length > 0 && (
          <div className="mt-4 space-y-2 border-t border-border/20 pt-3">
            <div className="text-[9px] uppercase tracking-widest font-black text-gold/80">
              Variantes & Almacenamiento
            </div>
            <div className="space-y-1 max-h-24 overflow-y-auto pr-1 font-mono text-[11px]">
              {product.options.map((opt, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-md bg-black/20 px-2 py-1 border border-border/10 text-muted-foreground transition hover:border-gold/20"
                >
                  <span className="text-foreground/80 font-medium">{opt.spec}</span>
                  <span className="text-gold font-bold">{opt.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer actions & pricing display */}
        <div className="mt-auto pt-4 flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[9px] text-muted-foreground uppercase tracking-wider font-semibold">
              PRECIO
            </span>
            <span className="text-lg font-black text-gradient-gold">{displayPrice}</span>
          </div>

          <a
            href={waLink(displayName)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-wider rounded-xl bg-whatsapp text-whatsapp-foreground shadow-glow hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <MessageCircle className="size-4 animate-pulse" />
            <span>Pedir</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
