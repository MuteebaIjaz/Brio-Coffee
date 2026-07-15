import { useEffect, useState } from 'react';

/** Determine if BRIO is currently open based on HOURS and local time. */
export function useIsOpen(): boolean {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function check() {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday
      const hour = now.getHours();
      const min = now.getMinutes();
      const totalMin = hour * 60 + min;

      if (day === 0) {
        // Sunday: 9:00 AM – 11:00 PM
        setIsOpen(totalMin >= 9 * 60 && totalMin < 23 * 60);
      } else {
        // Mon–Sat: 8:00 AM – 12:00 AM (midnight)
        setIsOpen(totalMin >= 8 * 60 && totalMin < 24 * 60);
      }
    }
    check();
    const id = setInterval(check, 60_000);
    return () => clearInterval(id);
  }, []);

  return isOpen;
}
