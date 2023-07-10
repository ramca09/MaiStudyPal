import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

const middleware = async (req) => {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res });

    const {
        data: { user },
    } = await supabase.auth.getUser();

    // if (user && req.nextUrl.pathname === '/summarizer' || ) {
    //     return NextResponse.redirect(new URL('/', req.url));
    // }

    if (!user && (req.nextUrl.pathname === ('/summarizer' || '/wassistant' || '/chatbot'))) {
        return NextResponse.redirect(new URL('/signin', req.url));
    }

    return res;
};

export const config = {
    matcher: ['/', '/summarizer', '/wassistant'],
};

export default middleware;