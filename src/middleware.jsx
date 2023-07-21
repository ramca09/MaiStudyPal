import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({req, res});
    
    const {
        data: {user},
    } = await supabase.auth.getUser();

    if (user && (req.nextUrl.pathname === '/signup' || req.nextUrl.pathname === '/signin')){
        console.log('hook');
        return NextResponse.redirect(new URL('/', req.url));
    }
    
    if (!user && ['/signup', '/signin', '/'].includes(req.nextUrl.pathname)){
        console.log("unauthorized");
        return NextResponse.redirect(new URL('/signin'), req.url);
    }
    
    return res;
}

export const config = {
    matcher: [
        '/', '/signin', '/signup'
    ]
}