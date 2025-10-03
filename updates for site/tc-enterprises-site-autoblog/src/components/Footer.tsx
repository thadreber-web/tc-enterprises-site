import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background dark:bg-background-dark border-border dark:border-border-dark text-foreground dark:text-foreground-dark py-6 mt-12">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm">
          &copy; {new Date().getFullYear()} T &amp; C Enterprises. All rights reserved.
        </span>
        <nav className="flex gap-4">
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
}