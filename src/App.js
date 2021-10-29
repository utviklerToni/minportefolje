import React from 'react';
import { Header } from './components/header/Header';
import './app.css';
import NavMenu from './components/section/nav/NavMenu';
import BodySection from './components/section/body/BodySection';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <NavMenu />
      <BodySection />
      <Footer />
    </div>
  );
}
