import React, { useRef, useState } from "react";

const OTP_LENGTH = 6;

export default function ForgotPw() {
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) {
      return;
    }

    const nextOtp = [...otp];
    nextOtp[index] = value;
    setOtp(nextOtp);
    setSubmitted(false);
    setError("");

    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (otp.some((digit) => digit === "")) {
      setError("Please enter the full verification code.");
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4 py-10 font-sans">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.85),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(250,204,21,0.28),_transparent_30%),linear-gradient(135deg,_rgba(252,231,243,0.65),_rgba(219,234,254,0.7)_55%,_rgba(254,249,195,0.72))]" />

      <div className="relative w-full max-w-[24rem] rounded-3xl border border-white/35 bg-white/14 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_25px_70px_rgba(15,23,42,0.18)] backdrop-blur-[28px]">
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-white/60" />

        <div className="mb-6">
          <span className="inline-flex rounded-full border border-white/55 bg-white/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
            OTP Verification
          </span>
          <h1 className="mt-4 text-2xl font-bold text-slate-900">
            Verify code
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Enter the 6-digit code sent to your email or phone number.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-3 block text-sm font-semibold text-gray-800">
              Verification Code
            </label>
            <div className="grid grid-cols-6 gap-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(element) => {
                    inputRefs.current[index] = element;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(event) => handleChange(index, event.target.value)}
                  onKeyDown={(event) => handleKeyDown(index, event)}
                  className="h-14 w-full rounded-xl border border-white/40 bg-white/20 text-center text-xl font-bold text-slate-800 outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] backdrop-blur-xl transition placeholder:text-slate-500 focus:border-yellow-200/90 focus:ring-2 focus:ring-yellow-200/70"
                  aria-label={`OTP digit ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {error ? (
            <div className="rounded-2xl border border-rose-200/80 bg-white/35 px-4 py-3 text-sm text-rose-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            className="w-full rounded-full border border-amber-300/80 bg-gradient-to-r from-amber-300 to-yellow-300 py-3 text-sm font-bold text-slate-900 shadow-sm shadow-amber-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:from-amber-400 hover:to-yellow-400 hover:shadow-md active:from-amber-500 active:to-yellow-500"
          >
            Verify code
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-slate-600">
          Didn&apos;t receive the code?{" "}
          <button
            type="button"
            className="font-semibold text-amber-600 transition hover:text-amber-700"
          >
            Resend code
          </button>
        </p>

        {submitted ? (
          <div className="mt-5 rounded-2xl border border-emerald-200/70 bg-white/35 px-4 py-3 text-sm text-emerald-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
            Code ready for verification:{" "}
            <span className="font-semibold">{otp.join("")}</span>
          </div>
        ) : null}
      </div>
    </section>
  );
}
