
import React from 'react';
import styles from './Header.module.css';
import { Link } from "react-router-dom"; // ✅ تأكد من استيراد Link
const Header = () => {
  return (
    <header className={styles.header}>
      {/* الشريط العلوي */}
      <div className={styles.topBar} >
        <span >تتبع شحنتك</span>
      </div>

      {/* شريط التنقل الرئيسي */}
      <nav className={styles.nav}>
        {/* الشعار */}
        <h1 className={styles.logo}>تراثنا</h1>

        {/* البحث */}
        <div className={styles.searchContainer}>
        <button className={styles.searchButton}>بحث</button>
          <input
            type="text"
            placeholder="...بحث في المنشورات"
            className={styles.searchInput}
          />
          
        </div>
        
        {/* ملف التعريف */}
        <div className={styles.profile}>
          <span className={styles.profileName}>الاسم</span>
          <img src="src\assets\prof.jpg" alt="الصورة الشخصية" className={styles.profileImage} />

        </div>

        {/* الأيقونات */}
        <div className={styles.socialIcons}>
  <button className={styles.socialButton}>
  <i className="fas fa-th-large"></i>
  {/* أيقونة باقي التطبيقات */}
  </button>
  <button className={styles.socialButton}>
    <i className="fas fa-shopping-cart"></i> {/* أيقونة سلة الشراء */}
  </button>
  <button className={styles.socialButton}>
    <i className="fas fa-bell"></i> {/* أيقونة الجرس */}
  </button>
  <button className={styles.socialButton}>
    <i className="fas fa-comment-alt"></i> {/* أيقونة الرسائل */}
  </button>
  <button className={styles.socialButton}>
    <i className="fas fa-tv"></i> {/* أيقونة اللايف */}
  </button>
</div>

      </nav>

      {/* القائمة */}
  
  
      <div className={styles.menu}>
      <Link to="/collections" className={styles.menuLink}>مجموعاتك</Link>
      <Link to="/blog" className={styles.menuLink}>مدونة</Link>
      <Link to="/shop" className={styles.menuLink}>تسوق</Link>
      <Link to="/" className={styles.menuLink}>الرئيسية</Link>
      
    </div>
    </header>
  );
};

export default Header;
