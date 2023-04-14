import React from 'react';

import classes from './Footer.module.css';

function Footer() {
  return (
    <footer className={classes.footer}>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <div>
            <a href="https://www.instagram.com/alexis._.jares/" target="blank">
              <img
                src="https://img.icons8.com/ios-filled/256/instagram.png"
                alt="Instagram"
                width="60"
              />
              <h3>Instagram</h3>
            </a>
          </div>
        </li>
        <li className={classes.li}>
          <div>
            <a href="https://www.facebook.com/alexis.jares.7/" target="blank">
              <img
                src="https://img.icons8.com/ios-filled/256/facebook-new.png"
                alt="Facebook"
                width="60"
              />
              <h3>Facebook</h3>
            </a>
          </div>
        </li>
        <li className={classes.li}>
          <div>
            <a href="https://github.com/KZ211" target="blank">
              <img
                src="https://img.icons8.com/ios-filled/256/github.png"
                alt="GitHub"
                width="60"
              />
              <h3>GitHub</h3>
            </a>
          </div>
        </li>
        <li className={classes.li}>
          <div>
            <a
              href="https://www.linkedin.com/in/alexis-jares-b70857235/"
              target="blank"
            >
              <img
                src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/256/external-linkedin-social-media-tanah-basah-glyph-tanah-basah.png"
                alt="Linkedin"
                width="60"
              />
              <h3>Linkedin</h3>
            </a>
          </div>
        </li>
      </ul>
      <p>Create by Alexis Jares | all rigth reseve | 10/04/2023</p>
    </footer>
  );
}

export default Footer;
