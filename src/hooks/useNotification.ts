import { useEffect } from "react";
import { create } from "zustand";

type NotificationStoreState = {
	message: string,
	show: (message: string) => void 
}

const notificationStore = create<NotificationStoreState>()((set) => ({
	message: "",
	show: (message: string) => set(() => {
		return {
			message: message
		}
	})
}))

export default function useNotification(){
	const [message, show] = notificationStore(state => [state.message, state.show]);

	useEffect(() => {
		if(message === ""){
			return;
		}

		const clearNotification = setTimeout(() => {
			show('')
		}, 3000);

		return () => {
			clearTimeout(clearNotification)
		}
	}, [message, show]);

	return {
		message,
		show
	}
}
