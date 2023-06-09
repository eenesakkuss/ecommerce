import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './resetCss.css'
import{ChakraProvider} from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { AuthProvider } from './contexts/AuthContext';
import { BasketProvider } from './contexts/BasketContext';



const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnMount:false,
      refetchOnWindowFocus:false
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ChakraProvider>
    <AuthProvider>
    <BasketProvider>
    <App />
    
    </BasketProvider>
    </AuthProvider>
    </ChakraProvider>
    <ReactQueryDevtools/>
    </QueryClientProvider>
  </React.StrictMode>
  
);

