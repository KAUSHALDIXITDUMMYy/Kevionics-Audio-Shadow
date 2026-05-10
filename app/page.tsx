import Link from "next/link"
import { LoginForm } from "@/components/auth/login-form"
import { PRODUCT_DISPLAY_NAME, PRODUCT_TAGLINE } from "@/lib/branding"

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 sm:p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{PRODUCT_DISPLAY_NAME}</h1>
          <p className="text-sm sm:text-base text-muted-foreground">{PRODUCT_TAGLINE}</p>
        </div>
        <LoginForm />
        <p className="text-center mt-4 space-x-4">
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground underline">
            Terms &amp; EULA
          </Link>
          <Link href="/contact-us" className="text-sm text-muted-foreground hover:text-foreground underline">
            Contact us
          </Link>
        </p>
      </div>
    </div>
  )
}
