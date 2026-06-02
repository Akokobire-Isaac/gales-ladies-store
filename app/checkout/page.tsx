"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { EmptyState } from "@/components/empty-state";
import { useCartStore } from "@/store/cart-store";
import { checkoutSchema, type CheckoutSchema } from "@/lib/validations";
import { openWhatsAppCheckout } from "@/lib/whatsapp";
import { formatPrice } from "@/lib/format";
import { ShoppingBag } from "lucide-react";

export default function CheckoutPage() {
  const { items, getTotal } = useCartStore();
  const total = getTotal();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutSchema>({
    resolver: zodResolver(checkoutSchema),
  });

  if (items.length === 0) {
    return (
      <EmptyState
        title="Nothing to checkout"
        description="Add items to your bag before placing an order."
        icon={<ShoppingBag className="size-8" />}
      />
    );
  }

  const onSubmit = (data: CheckoutSchema) => {
    openWhatsAppCheckout(
      {
        name: data.name,
        phone: data.phone,
        address: data.address,
        deliveryLocation: data.deliveryLocation,
      },
      items,
      total
    );
    toast.success("Opening WhatsApp", {
      description: "Complete your order in the chat.",
    });
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 font-heading text-3xl font-light tracking-wide">
        Checkout
      </h1>
      <div className="grid gap-12 lg:grid-cols-2">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" className="mt-1.5" {...register("name")} />
            {errors.name && (
              <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="phone">Phone (WhatsApp)</Label>
            <Input
              id="phone"
              placeholder="0249938095"
              className="mt-1.5"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="address">Delivery Address</Label>
            <Textarea
              id="address"
              className="mt-1.5"
              rows={3}
              {...register("address")}
            />
            {errors.address && (
              <p className="mt-1 text-xs text-destructive">
                {errors.address.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="deliveryLocation">Delivery Location / Area</Label>
            <Input
              id="deliveryLocation"
              placeholder="e.g. East Legon, Accra"
              className="mt-1.5"
              {...register("deliveryLocation")}
            />
            {errors.deliveryLocation && (
              <p className="mt-1 text-xs text-destructive">
                {errors.deliveryLocation.message}
              </p>
            )}
          </div>
          <p className="text-xs text-muted-foreground">
            Mobile Money accepted: MTN MoMo, Telecel Cash, AirtelTigo Money.
            Payment details will be confirmed on WhatsApp.
          </p>
          <Button
            type="submit"
            size="lg"
            className="w-full rounded-none"
            disabled={isSubmitting}
          >
            Place Order via WhatsApp
          </Button>
        </form>

        <div className="rounded-xl border border-border/60 bg-muted/20 p-6">
          <h2 className="font-heading text-xl font-light">Order Summary</h2>
          <ul className="mt-4 space-y-3">
            {items.map((item) => (
              <li
                key={item.product.id}
                className="flex justify-between text-sm"
              >
                <span>
                  {item.product.name} × {item.quantity}
                </span>
                <span>
                  {formatPrice(item.product.price * item.quantity)}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between border-t border-border/60 pt-4 font-medium">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
          <Button
            variant="link"
            className="mt-4 px-0"
            render={<Link href="/cart" />}
          >
            Edit bag
          </Button>
        </div>
      </div>
    </div>
  );
}
