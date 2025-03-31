"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleLogin = (e: React.MouseEvent<Element, MouseEvent>): void => {
    e.preventDefault();

    return router.push("/");
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Forgot password?</CardTitle>
          <CardDescription>Enter your email below to reset your password</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Registered Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full cursor-pointer mt-6"
              disabled={email.length === 0}
              onClick={handleLogin}
            >
              Reset Password
            </Button>

            {errorMessage && <p className="text-sm text-red-600 -mt-4">{errorMessage}</p>}

            <div className="mt-4 text-center text-sm">
              Remembered your password?{" "}
              <a href="/login" className="underline underline-offset-4">
                Login
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
