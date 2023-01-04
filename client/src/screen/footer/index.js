import React from "react";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-item-first">
          <span>NHỮNG KÊNH MÀ BẠN CÓ THỂ THEO DÕI VÀ LIÊN LẠC CÔ TELESA:</span>
        </div>
        <div className="footer-item-last">
          <div className="footer-item-last-icon">
            <a href="https://www.youtube.com/channel/UCXRCbUbPHTdrm91Oss-6ikA">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <div className="footer-item-last-icon">
            <a href="https://www.facebook.com/profile.php?id=100008755777483">
              <i className="fab fa-facebook-square"></i>
            </a>
          </div>
          <div className="footer-item-last-icon">
            <a href="https://www.tiktok.com/@learnenglishwithtelesa?lang=en">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
          <div className="footer-item-last-icon">
            <a href="https://www.facebook.com/groups/3493279500943702">
              <i className="fas fa-users"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
