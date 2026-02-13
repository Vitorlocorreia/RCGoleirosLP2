import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const TOTAL_SECONDS = 5 * 60;

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(() => {
    const saved = sessionStorage.getItem("rc-countdown");
    if (saved) {
      const remaining = parseInt(saved, 10);
      return remaining > 0 ? remaining : 0;
    }
    return TOTAL_SECONDS;
  });

  useEffect(() => {
    if (seconds <= 0) return;
    const interval = setInterval(() => {
      setSeconds((prev) => {
        const next = prev - 1;
        sessionStorage.setItem("rc-countdown", String(next));
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  if (seconds <= 0) return null;

  return (
    <div className="inline-flex items-center gap-3 bg-accent/20 backdrop-blur-sm border-2 border-accent/40 rounded-2xl px-6 py-3 shadow-lg">
      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
        <Clock className="w-5 h-5 text-accent" />
      </div>
      <div>
        <p className="text-white/90 text-xs font-bold uppercase tracking-wide mb-0.5">
          Oferta Especial Expira Em
        </p>
        <div className="flex items-center gap-2">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 min-w-[3rem] text-center">
            <span className="text-white text-2xl font-bold tabular-nums">
              {String(mins).padStart(2, "0")}
            </span>
          </div>
          <span className="text-white text-xl font-bold">:</span>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 min-w-[3rem] text-center">
            <span className="text-white text-2xl font-bold tabular-nums">
              {String(secs).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
