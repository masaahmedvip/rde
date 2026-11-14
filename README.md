# لوحة مختبر Proxmox (نموذج تجريبي)

واجهة عربية بسيطة ومتجاوبة لاستكشاف شكل لوحة متابعة لمختبر Proxmox. المشروع يعمل داخل GitHub Codespaces، لكن البيانات المعروضة ثابتة وتوضيحية؛ لا يتصل بخادم Proxmox ولا ينشئ أو يتحكم بأجهزة افتراضية.

## تشغيله في Codespaces

1. افتح المستودع [`masaahmedvip/rde`](https://github.com/masaahmedvip/rde) واختر **Code → Codespaces → Create codespace on main**.
2. في الطرفية شغّل:

   ```bash
   npm start
   ```

3. وافق على فتح المنفذ 3000 إذا طلب منك Codespaces ذلك. ستظهر لوحة العرض في المتصفح.

## تشغيله محليًا

يتطلب Node.js 18 أو أحدث. من مجلد المشروع:

```bash
npm start
```

ثم افتح http://localhost:3000.

## هيكل المشروع

- `public/` — واجهة العرض العربية (HTML/CSS/JavaScript).
- `server.js` — خادم ملفات ثابت مبني على Node.js دون اعتماديات خارجية.
- `.devcontainer/devcontainer.json` — إعداد بيئة Codespaces.

## ملاحظة أمنية

هذا المشروع مجرد نموذج واجهة، وليس أداة تثبيت Proxmox. لا تُدخل كلمات مرور أو مفاتيح API هنا. الاتصال الحقيقي بخادم Proxmox يتطلب إعدادًا منفصلًا وآمنًا، وقد لا يمكن الوصول إلى خادم منزلي من Codespaces.
