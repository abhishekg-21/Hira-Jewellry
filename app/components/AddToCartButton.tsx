"use client";
import { useCart } from "@/app/context/CartContext";

type Props = {
  productId: string;
  slug: string;            // ← add this
  title: string;
  image: string;
  priceCents: number;
  variant?: string;        // keep optional if CartLine.variant is optional
  quantity?: number;       // optional convenience
};

export default function AddToCartButton({
  productId, slug, title, image, priceCents, variant, quantity,
}: Props) {
  const { add } = useCart();

  const onAdd = () =>
    add(
      { productId, slug, title, image, priceCents, variant },
      // if your `add` signature takes quantity separately, remove this
    );

  return (
    <button onClick={onAdd}>
      ADD TO CART
    </button>
  );
}
