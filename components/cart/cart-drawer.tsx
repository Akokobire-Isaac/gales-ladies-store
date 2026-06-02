"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CartItemRow } from "./cart-item";
import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/format";

export function CartDrawer() {
  const { items, isOpen, setOpen, getTotal } = useCartStore();
  const total = getTotal();

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-heading text-lg font-light tracking-wide">
            Your Bag ({items.length})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <ShoppingBag className="size-12 text-muted-foreground" />
            <p className="text-muted-foreground">Your bag is empty</p>
            <Button render={<Link href="/shop" />} onClick={() => setOpen(false)}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-1">
              {items.map((item) => (
                <CartItemRow key={item.product.id} item={item} />
              ))}
            </div>
            <div className="border-t border-border/60 pt-4">
              <div className="mb-4 flex justify-between text-sm">
                <span>Subtotal</span>
                <span className="font-medium">{formatPrice(total)}</span>
              </div>
              <Button
                className="w-full"
                render={<Link href="/checkout" />}
                onClick={() => setOpen(false)}
              >
                Checkout
              </Button>
              <Button
                variant="outline"
                className="mt-2 w-full"
                render={<Link href="/cart" />}
                onClick={() => setOpen(false)}
              >
                View Cart
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
