* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #000;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  overflow-x: hidden;
}

/* HERO */

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 80px;
  gap: 50px;

  background:
    radial-gradient(circle at top right,#3a3a3a 0%,#111 40%,#000 100%);
  }

.hero-content {
  max-width: 600px;
}

.hero-tag {
  color: #999;
  letter-spacing: 3px;
  font-size: 13px;
}

.hero h1{
    font-size:clamp(4rem,8vw,8rem);
    line-height:.9;
    font-weight:900;
}

.hero p {
  color: #bbb;
  max-width:480px;
    opacity:.75;
    line-height:1.8;
}

.hero-buttons {
  display: flex;
  gap: 15px;
}

.btn-primary {
  background: white;
  color: black;
  padding: 14px 28px;
  border-radius: 999px;
  font-weight: 600;
  transition:.3s;
}

.btn-secondary {
  border: 1px solid #444;
  color: white;
  padding: 14px 28px;
  border-radius: 999px;
}

.hero-image img {
  width: 700px;
  max-width: 100%;
  object-fit: contain;
}

/* RESPONSIVO */

@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 40px 20px;
  }

  .hero h1 {
    font-size: 60px;
  }

  .hero-buttons {
    justify-content: center;
  }
}

/* NAVBAR */

.navbar {
  position: sticky;
  top: 0;
  z-index: 999;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 18px 50px;

  background: rgba(15, 15, 15, 0.8);
  backdrop-filter: blur(12px);

  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.navbar-logo a {
  color: white;
  text-decoration: none;

  font-size: 24px;
  font-weight: 800;
  letter-spacing: 4px;
}

.navbar-links {
  display: flex;
  gap: 35px;
}

.navbar-links a {
  color: #bcbcbc;
  text-decoration: none;
  font-size: 15px;
  transition: 0.25s;
  position: relative;
}

.navbar-links a:hover {
  color: white;
}

.navbar-links a::after {
  content: "";
  position: absolute;

  bottom: -6px;
  left: 0;

  width: 0;
  height: 2px;

  background: white;
  transition: 0.3s;
}

.navbar-links a:hover::after {
  width: 100%;
}

.nav-btn {
  background: white;
  color: black;

  padding: 10px 20px;
  border-radius: 999px;

  font-weight: 700;
  transition: 0.25s;
}

.nav-btn:hover {
  transform: translateY(-2px);
}

/* RESPONSIVO */

@media (max-width: 768px) {

  .navbar {
    padding: 15px 20px;
  }

  .navbar-links {
    gap: 15px;
  }

  .navbar-logo a {
    font-size: 18px;
  }

  .nav-btn {
    display: none;
  }

}

.product-card {
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-8px);
}

.product-card img {
  transition: transform 0.3s ease;
}

.product-card:hover img {
  transform: scale(1.05);
}

/* HERO */

.hero {
  position: relative;
  min-height: 100vh;

  display: flex;
  align-items: center;

  background:
    radial-gradient(circle at top right,
      rgba(255,255,255,0.08),
      transparent 30%),
    #0f0f0f;

  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      90deg,
      rgba(15,15,15,0.95),
      rgba(15,15,15,0.6)
    );
}

.hero-container {
  position: relative;

  max-width: 1400px;
  width: 100%;

  margin: 0 auto;
  padding: 0 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hero-content {
  max-width: 600px;
  z-index: 2;
}

.hero-tag {
  display: inline-block;

  color: #9f9f9f;
  font-size: 13px;
  letter-spacing: 4px;

  margin-bottom: 20px;
}

.hero-content h1 {
  font-size: 90px;
  line-height: 0.95;
  margin-bottom: 25px;
}

.hero-content p {
  color: #bcbcbc;
  font-size: 20px;
  line-height: 1.7;
  margin-bottom: 35px;
}

.hero-buttons {
  display: flex;
  gap: 15px;
}

.btn-primary {
  background: white;
  color: black;

  padding: 15px 28px;

  border-radius: 999px;
  font-weight: 700;

  transition: 0.3s;
}

.btn-primary:hover {
  transform: translateY(-3px);
}

.btn-secondary {
  border: 1px solid #444;

  color: white;

  padding: 15px 28px;

  border-radius: 999px;

  transition: 0.3s;
}

.btn-secondary:hover {
  border-color: white;
}

.hero-image {
  flex: 1;
  position:relative;
  display: flex;
  justify-content: center;
}

.hero-image img{
    animation: float 5s ease-in-out infinite;
}

@keyframes float{
    0%{
        transform:translateY(0);
    }

    50%{
        transform:translateY(-15px);
    }

    100%{
        transform:translateY(0);
    }
}

/* RESPONSIVO */

@media (max-width: 1024px) {

  .hero-container {
    flex-direction: column;
    text-align: center;

    padding: 120px 20px 60px;
  }

  .hero-content h1 {
    font-size: 60px;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-image img {
    width: 500px;
    margin-top: 40px;
  }
}

@media (max-width: 768px) {

  .hero-content h1 {
    font-size: 48px;
  }

  .hero-content p {
    font-size: 16px;
  }

  .hero-image img {
    width: 350px;
  }
}

/* NAVBAR PREMIUM */

.navbar {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 22px 50px;

  z-index: 9999;

  transition: all 0.35s ease;
}

.navbar-scrolled {
  background: rgba(15,15,15,0.85);
  backdrop-filter: blur(15px);

  border-bottom: 1px solid rgba(255,255,255,0.08);

  padding: 16px 50px;
}

.navbar-logo a {
  color: white;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 4px;
}

.navbar-links {
  display: flex;
  gap: 35px;
}

.navbar-links a {
  color: #c5c5c5;
  text-decoration: none;
  transition: 0.25s;
}

.navbar-links a:hover {
  color: white;
}

.nav-btn {
  background: white;
  color: black;

  border: none;

  padding: 10px 20px;

  border-radius: 999px;

  font-weight: 700;
}

.nav-btn:hover {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .navbar {
    padding: 15px 20px;
  }

  .navbar-links {
    display: none;
  }

  .nav-btn {
    display: none;
  }
}

.related-card {
  transition: .3s;
}

.related-card:hover {
  transform: translateY(-8px);
}

.related-card img {
  transition: .3s;
}

.related-card:hover img {
  transform: scale(1.05);
}

.mvclub {
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background:
    radial-gradient(
      circle at top,
      rgba(255,255,255,0.06),
      transparent
    ),
    #0f0f0f;

  padding: 40px;
}

.mvclub-content {
  text-align: center;
  max-width: 700px;
}

.mvclub-content span {
  color: #888;
  letter-spacing: 3px;
  font-size: 13px;
}

.mvclub-content h1 {
  font-size: 90px;
  margin: 20px 0;
}

.mvclub-content p {
  color: #bcbcbc;
  font-size: 18px;
  margin-bottom: 40px;
}

.mvclub-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.mvclub-buttons button {
  padding: 15px 30px;

  border-radius: 999px;

  border: none;

  font-weight: 700;
}

.secondary {
  background: transparent;
  border: 1px solid #444 !important;
  color: white;
}

.nav-btn {
  background: white;
  color: black;

  padding: 10px 20px;

  border-radius: 999px;

  font-weight: 700;

  text-decoration: none;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  transition: 0.3s ease;
}

.nav-btn:hover {
  transform: translateY(-2px);
}

.drawer-overlay {
  position: fixed;
  inset: 0;

  background: rgba(0,0,0,.5);

  opacity: 0;
  pointer-events: none;

  transition: .3s;

  z-index: 9998;
}

.drawer-overlay.active {
  opacity: 1;
  pointer-events: all;
}

.cart-drawer {
  position: fixed;

  top: 0;
  right: -420px;

  width: 420px;
  max-width: 90vw;

  height: 100vh;

  background: #111;

  border-left: 1px solid #222;

  transition: .35s ease;

  z-index: 9999;

  display: flex;
  flex-direction: column;
}

.cart-drawer.open {
  right: 0;
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 25px;

  border-bottom: 1px solid #222;
}

.drawer-header button {
  background: none;
  color: white;
  border: none;
  font-size: 20px;
}

.drawer-items {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.drawer-item {
  display: flex;
  gap: 15px;
  align-items: center;

  margin-bottom: 20px;
}

.drawer-item img {
  width: 80px;
}

.drawer-item h4 {
  margin: 0;
}

.drawer-item p {
  color: #bbb;
}

.drawer-item button {
  margin-left: auto;

  background: none;
  border: none;

  color: white;
  cursor: pointer;
}

.drawer-footer {
  padding: 25px;

  border-top: 1px solid #222;
}

.checkout-btn {
  width: 100%;

  padding: 15px;

  border: none;
  border-radius: 999px;

  background: white;
  color: black;

  font-weight: 700;
}
.navbar-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.cart-icon {
  position: relative;

  width: 45px;
  height: 45px;

  border-radius: 50%;

  border: 1px solid #333;

  background: #151515;
  color: white;

  font-size: 18px;

  cursor: pointer;
}

.cart-badge {
  position: absolute;

  top: -5px;
  right: -5px;

  width: 20px;
  height: 20px;

  border-radius: 50%;

  background: white;
  color: black;

  font-size: 12px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
}

.not-found {
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  text-align: center;

  background: #0f0f0f;

  padding: 20px;
}

.not-found span {
  color: #888;
  letter-spacing: 3px;
}

.not-found h1 {
  font-size: 64px;
  margin: 20px 0;
}

.not-found p {
  color: #bcbcbc;
  max-width: 500px;
  margin-bottom: 30px;
}

.not-found button {
  padding: 15px 30px;

  border: none;
  border-radius: 999px;

  background: white;
  color: black;

  font-weight: 700;
}

.profile-page {
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #0f0f0f;
}

.profile-card {
  width: 450px;

  background: #171717;

  border: 1px solid #222;

  border-radius: 30px;

  padding: 40px;

  text-align: center;
}

.profile-avatar {
  font-size: 70px;
  margin-bottom: 15px;
}

.profile-card h1 {
  margin-bottom: 10px;
}

.profile-card p {
  color: #999;
  margin-bottom: 30px;
}

.profile-actions {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.profile-actions button {
  width: 100%;

  padding: 15px;

  border: none;

  border-radius: 14px;

  background: #222;

  color: white;

  cursor: pointer;
}

.hero-image::before{
    content:"";
    position:absolute;

    width:450px;
    height:450px;

    border-radius:50%;

    background:white;

    filter:blur(180px);

    opacity:.18;

    z-index:-1;
}