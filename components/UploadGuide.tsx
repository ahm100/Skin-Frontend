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
          ✓ صورت کامل داخل تصویر باشد
        </li>

        <li>
          ✓ از نور طبیعی و کافی استفاده کنید
        </li>

        <li>
          ✓ عکس بدون فیلتر یا افکت دوربین باشد
        </li>

        <li>
          ✓ عینک، ماسک یا پوشش روی صورت نباشد
        </li>

        <li>
          ✓ صورت روبه‌روی دوربین قرار بگیرد
        </li>

      </ul>

    </div>
  );
}