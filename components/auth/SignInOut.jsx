"use client";

import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignInOut = () => {
    const { auth, setAuth } = useAuth();
    const router = useRouter();

    const logout = () => {
        setAuth(null);
        router.push("/login");
    };

    return (
        <div>
            {auth ? (
                <>
                    <a onClick={logout}>Logout</a>
                </>
            ) : (
                <Link href={"/login"}>Login</Link>
            )}
        </div>
    );
};

export default SignInOut;
