import React from 'react';
import styles from './Header.module.css';

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
        <div className={styles.logo}>تراثنا</div>

        {/* البحث */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="بحث في المنشورات..."
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>بحث</button>
        </div>
        
        {/* ملف التعريف */}
        <div className={styles.profile}>
          <span className={styles.profileName}>الاسم</span>
          <img
            src="profile.jpg"
            alt="الصورة الشخصية"
            className={styles.profileImage}
          />
        </div>

        {/* الأيقونات */}
        <div className={styles.socialIcons}>
          <button className={styles.socialButton}>
            <i className='fab fa-facebook'></i>
          </button>
          <button className={styles.socialButton}>
            <i className='fab fa-twitter'></i>
          </button>
          <button className={styles.socialButton}>
            <i className='fab fa-instagram'></i>
          </button>
          <button className={styles.socialButton}>
            <i className='fab fa-linkedin'></i>
          </button>
          <button className={styles.socialButton}>
            <i className='fab fa-youtube'></i>
          </button>
        </div>
      </nav>

      {/* القائمة */}
      <div className={styles.menu}>
      </div>
    </header>
  );
};

export default Header;