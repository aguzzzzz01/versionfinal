import { useMemo, useState } from "react";
import { MessageCircle, ChevronDown, ChevronUp, ShoppingCart, Check } from "lucide-react";
import { Product, ProductModel } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { motion, AnimatePresence } from "motion/react";

const WHATSAPP_NUMBER = "5491138012403";
const PERFUME_CATEGORIES = new Set([
  "perfumes", "lattafa", "armaf", "afnan", "al-haramain", "al-wataniah",
  "anfar-1950", "ard-al-zaafaran", "bharara", "emper", "escada",
  "fragrance-world", "maison-alhambra", "orientica", "rasasi", "rayhaan",
  "tubbees", "french-avenue", "victoria-secret",
  "legacy-king", "paris-corner", "zakat", "zimaya", "thoq-al-hawamer",
]);

const waLink = (productName: string) => {
  const msg = `Hola David! Vi tu catálogo web. Me interesa: ${productName} - Código de seguimiento: EXPOSTORE`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};

export function ProductCard({ product }: { product: Product }) {
  const hasModels = !!product.models && product.models.length > 0;
  const hasVariants = !hasModels && !!product.variants && product.variants.length > 0;
  const hasSizes = !hasModels && !hasVariants && !!product.sizeVariants && product.sizeVariants.length > 0;

  const [modelIdx, setModelIdx] = useState(0);
  const [variantIdx, setVariantIdx] = useState(0);
  const [sizeIdx, setSizeIdx] = useState(0);
  const [modelColorIdx, setModelColorIdx] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const { addItem, items } = useCart();

  const activeModel: ProductModel | null = hasModels ? product.models![modelIdx] : null;

  const displayName = useMemo(() => {
    if (activeModel) return activeModel.name;
    if (hasVariants) return product.variants![variantIdx].name;
    if (hasSizes) return product.sizeVariants![sizeIdx].name;
    return product.name;
  }, [activeModel, hasVariants, variantIdx, hasSizes, sizeIdx, product]);

  const displayDesc = useMemo(() => {
    if (activeModel) return activeModel.description;
    if (hasVariants) return product.variants![variantIdx].description;
    if (hasSizes) return product.sizeVariants![sizeIdx].description;
    return product.description;
  }, [activeModel, hasVariants, variantIdx, hasSizes, sizeIdx, product]);

  const displayTag = useMemo(() => {
    if (activeModel) return activeModel.tag;
    if (hasVariants) return product.variants![variantIdx].tag || product.tag;
    if (hasSizes) return product.sizeVariants![sizeIdx].tag || product.tag;
    return product.tag;
  }, [activeModel, hasVariants, variantIdx, hasSizes, sizeIdx, product]);

  const displayImage = useMemo(() => {
    if (activeModel) {
      const c = activeModel.colors?.[modelColorIdx];
      if (c?.image) return c.image;
      return activeModel.image;
    }
    if (hasVariants) return product.variants![variantIdx].image;
    if (hasSizes) return product.sizeVariants![sizeIdx].image;
    return product.image;
  }, [activeModel, modelColorIdx, hasVariants, variantIdx, hasSizes, sizeIdx, product]);

  const displayPrice = useMemo(() => {
    if (activeModel) return activeModel.price;
    if (hasVariants) return product.variants![variantIdx].price;
    if (hasSizes) return product.sizeVariants![sizeIdx].price;
    return product.price || "Contactar";
  }, [activeModel, hasVariants, variantIdx, hasSizes, sizeIdx, product]);

  const isInCart = items.some((item) => item.id === product.id);
  const isPerfume = PERFUME_CATEGORIES.has(product.category as string);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: displayName,
      price: displayPrice,
      image: displayImage,
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col rounded-2xl border border-border/80 bg-card/40 p-4 hover:border-gold/50 transition-all duration-300 overflow-hidden shadow-sm backdrop-blur-md"
    >
      <div className="absolute -top-10 -right-10 size-32 rounded-full bg-gradient-gold opacity-5 blur-2xl group-hover:opacity-15 transition duration-500" />

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

      <div className="relative aspect-square rounded-xl overflow-hidden mb-4 border border-border/20">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, oklch(0.32 0.10 88 / 0.55), transparent 60%), radial-gradient(ellipse at 70% 90%, oklch(0.82 0.16 88 / 0.18), transparent 65%), linear-gradient(160deg, oklch(0.16 0.02 80) 0%, oklch(0.07 0 0) 100%)",
          }}
        />
        {isPerfume && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-100/15 via-transparent to-black/25" />
        )}
        <img
          src={displayImage}
          alt={displayName}
          loading="lazy"
          className="relative h-full w-full object-contain p-3 drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)] transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex-1 flex flex-col">
        <h3 className="text-sm font-bold text-foreground/90 line-clamp-2 min-h-[40px] leading-snug">
          {displayName}
        </h3>
        <p className="text-sm text-gold font-black mt-1 mb-3">{displayPrice}</p>

        {displayDesc && (
          <div>
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-gold transition-colors mb-2"
            >
              <span>{isExpanded ? "Ocultar descripción" : "Ver descripción"}</span>
              {isExpanded ? <ChevronUp className="size-3" /> : <ChevronDown className="size-3" />}
            </button>
            {isExpanded && (
              <p className="text-xs text-muted-foreground/80 bg-black/20 rounded-lg p-2.5 mb-3 leading-relaxed border border-border/10">
                {displayDesc}
              </p>
            )}
          </div>
        )}

        {/* Selectors can be mapped here if needed depending on selection states */}

        <div className="grid grid-cols-5 gap-2 mt-auto pt-2">
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={isInCart}
            className={`col-span-2 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
              isInCart
                ? "bg-gold/10 border-gold/30 text-gold opacity-80"
                : "bg-white/5 border-white/10 text-foreground hover:bg-white/10"
            }`}
          >
            {isInCart || justAdded ? <Check className="size-3.5" /> : <ShoppingCart className="size-3.5" />}
            <span>{isInCart ? "Agregado" : "Carrito"}</span>
          </button>

          <a
            href={waLink(displayName)}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-3 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-whatsapp text-whatsapp-foreground text-xs font-black uppercase tracking-wider shadow-glow hover:scale-[1.02] active:scale-95 transition-all"
          >
            <MessageCircle className="size-3.5" />
            <span>Consultar</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
