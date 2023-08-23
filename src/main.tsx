import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './AppRouter'

import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.Fragment>
		<QueryClientProvider client={queryClient}>
			<AppRouter />
		</QueryClientProvider>
	</React.Fragment>,
)
