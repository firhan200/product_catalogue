import { create } from "zustand";

type CartItem = {
	qty: number,
	productId: number
} 

type CartStore = {
	items: CartItem[],
	add: (productId: number, qty: number) => void 
}

const cartStore = create<CartStore>()((set) => ({
	items: [],
	add: (productId: number, qty: number) => set((state) => {
		return {
			items: [...state.items, <CartItem>{
				productId: productId,
				qty: qty
			}]
		}
	})
}))

export default function useCart(){
	const [items, addToCart] = cartStore(state => [state.items, state.add])

	const totalItem = items.length > 0 ? items.length.toString() : "";

	return {
		items,
		totalItem,
		addToCart
	}
}
