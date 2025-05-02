import React from "react";
import Logo from "./Logo";
import { Youtube, Twitter, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full flex flex-items-center justify-center bg-base-200">
      <footer className="max-w-6xl footer sm:footer-horizontal text-base-content p-10">
        <aside>
          <div className="w-18 h-18 fill-base-content">
            <Logo />
          </div>
          <div>
            <p className="font-bold text-md">NAME LTD.</p>
            <p className="text-md text-base-content/60">Copyright© 2025 - Bober Ltd.</p>
          </div>
        </aside>
        <nav className="sm:ml-auto">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Products</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Changelog</a>
          <a className="link link-hover">Sign In</a>
          <a className="link link-hover">Sign Up</a>
        </nav>
        <nav className="sm:ml-auto">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="sm:ml-auto">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Content policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav className="sm:ml-auto">
          <h6 className="footer-title">Social</h6>
          <a className="link link-hover flex items-center gap-1">
            <Instagram size={"16px"} />
            Instagram
          </a>
          <a className="link link-hover flex items-center gap-1">
            <Twitter size={"16px"} />
            Twitter (X)
          </a>
          <a className="link link-hover flex items-center gap-1">
            <Youtube size={"16px"} />
            Youtube
          </a>
        </nav>
      </footer>
    </div>
  );
}
