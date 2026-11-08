import type { JSX } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Matcha from "./components/Matcha/Matcha";
import Wagashi from "./components/Wagashi/Wagashi";

export default function App(): JSX.Element {
  return (
    <div className="app-layout" id="top">
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
        <About />
        <Matcha />
        <Wagashi />
      </main>
    </div>
  );
}
