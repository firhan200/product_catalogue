import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

export type CartItem = {
	qty: number,
	productId: number
}

type CartStore = {
	items: CartItem[],
	add: (productId: number, qty: number) => void,
	update: (productId: number, newQty: number) => void,
	delete: (productId: number) => void
}

const cartStore = create<CartStore>()(persist(
	(set, get) => ({
		items: [],
		add: (productId: number, qty: number) => set(() => {
			//validate
			const existedItems = [...get().items];
			const isExist = existedItems.filter((cart: CartItem) => cart.productId == productId).length > 0;

			if (isExist) {
				return {
					items: existedItems
				}
			}

			return {
				items: [...get().items, <CartItem>{
					productId: productId,
					qty: qty
				}]
			}
		}),
		update: (productId: number, newQty: number) => set(() => {
			const newList = [...get().items].map(cart => {
				if (cart.productId === productId) {
					cart.qty = newQty;
				}
				return cart;
			});

			return {
				items: newList
			}
		}),
		delete: (productId: number) => set(() => {
			return {
				items: [...get().items.filter(cart => cart.productId !== productId)]
			}
		})
	}),
{
	name: 'cart-storate',
		storage: createJSONStorage(() => localStorage)
}
))

export default function useCart() {
	const [items, addToCart, updateProductQty, deleteProductFromCart] = cartStore(state => [state.items, state.add, state.update, state.delete])

	const totalItem = items.length > 0 ? items.length.toString() : "";

	return {
		items,
		totalItem,
		deleteProductFromCart,
		updateProductQty,
		addToCart
	}
}
