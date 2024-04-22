// CalCall.js
import { CalendarIcon } from '@heroicons/react/outline';
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalCall() {
  useEffect(() => {
    (async function initializeCalendar() {
      const cal = await getCalApi();
      cal("ui", {
        "styles": {
          "branding": {
            "brandColor": "#000000"
          }
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
  }, []);

  return (
    <button className=' p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg dark:text-gray-100' >
<img data-cal-namespace="" data-cal-link="elavarasan/15min" data-cal-config='{"layout":"month_view"}' src="https://em-content.zobj.net/source/telegram/386/calendar_1f4c5.webp"  className='h-5 w-5'/>
    </button>
  );
}
