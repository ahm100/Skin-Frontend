export default function UploadGuide() {
  return (
    <div
      className="
        mt-5
        rounded-2xl
        bg-gray-50
        p-4
        text-right
        w-full
        max-w-md
        border
      "
    >
      <h3
        className="
          font-bold
          text-gray-800
        "
      >
        راهنمای گرفتن عکس برای تحلیل بهتر
      </h3>

      <ul
        className="
          mt-3
          text-sm
          text-gray-600
          space-y-2
        "
      >
         <li>
          ✓ در صورت استفاده از VPN، هنگام آپلود آن را خاموش کنید
        </li>
        
        <li>
          ✓ فقط از یک تکه از پوست خود عکس بگیرید و آن را آپلود کنید
        </li>

        <li>
          ✓ فرمت‌های قابل قبول: JPG، JPEG، PNG و WEBP
        </li>

        <li>
          ✓ حجم عکس حداکثر ۵ مگابایت باشد
        </li>

        <li>
          ✓ از نور طبیعی و کافی استفاده کنید
        </li>

        <li>
          ✓ عکس بدون فیلتر یا افکت دوربین باشد
        </li>

        <li>
          ✓ عینک، ماسک یا پوشش روی قسمت موردنظر نباشد
        </li>

       
      </ul>
    </div>
  );
}