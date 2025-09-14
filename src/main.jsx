import { createRoot } from 'react-dom/client'
import './index.css'
import './global.css'
import App from './routes/main.routes';
import 'react-loading-skeleton/dist/skeleton.css';
import { StrictMode } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <ThemeProvider>
                <App />
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                    toastOptions={{
                        success: {
                            duration: 3000,
                        },
                        error: {
                            duration: 5000,
                        },
                    }}
                />
            </ThemeProvider>
        </AuthProvider>
    </StrictMode>,
)