import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="flex items-center justify-center bg-background px-6 py-10">
            <div className="w-full max-w-md bg-secondary text-secondary-foreground p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-6 text-center text-primary">Create Account</h1>

                <form className="space-y-4">
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        className="w-full px-4 py-2 rounded border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="w-full px-4 py-2 rounded border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="w-full px-4 py-2 rounded border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button 
                        type="submit" 
                        className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-muted transition"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-sm text-muted-foreground mt-4 text-center">
                    Already have an account? <Link to="/login" className="text-primary hover:underline">Login</Link>
                </p>
            </div>
        </div>
    )
}

export default Signup;