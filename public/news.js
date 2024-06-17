// pages/news.js

import { useEffect } from "react";
import { useRouter } from "next/router";
import { Platform } from "react-native";

const NewsPage = () => {
  const router = useRouter();

  useEffect(() => {
    // التحقق مما إذا كان التطبيق مثبتًا على جهاز المستخدم
    const isAppInstalled = () => {
      // التحقق من نوع الجهاز
      if (Platform.OS === "android") {
        // التحقق من وجود التطبيق باستخدام الحزمة (package name)
        const packageName = "com.animeray.news"; // تغييرها إلى اسم الحزمة الخاص بتطبيقك
        return DeviceInfo.isAppInstalled(packageName);
      } else {
        // قم بالتحقق من وجود التطبيق بطريقة أخرى إذا لزم الأمر
        // يمكنك استخدام واجهات برمجة تطبيقات أخرى أو مكتبات مناسبة لمنصة iOS
        // على سبيل المثال: Linking.getInitialURL() في React Native
        return false;
      }
    };
    if (!isAppInstalled) {
      // إذا لم يكن التطبيق مثبتًا، قم بتوجيه المستخدم إلى الرابط الخارجي
      window.location.href = "رابط التطبيق على Google Play Store";
    }
  }, []);

  return (
    <div>
      <h1>صفحة الأخبار</h1>
      <p>محتوى الأخبار يتم عرضه هنا</p>
    </div>
  );
};

export default NewsPage;
