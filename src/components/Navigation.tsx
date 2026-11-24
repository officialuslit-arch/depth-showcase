import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ['home', ...navItems.map((item) => item.href.slice(1))]
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.15, 0.4] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" onClick={closeMenu} className="font-display text-xl font-semibold text-foreground focus-ring">
          US<span className="text-accent">.</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const id = item.href.slice(1);
            return (
              <Button key={item.name} variant="ghost" size="sm" asChild className={activeSection === id ? 'text-primary' : 'text-muted-foreground'}>
                <a href={item.href} aria-current={activeSection === id ? 'location' : undefined}>{item.name}</a>
              </Button>
            );
          })}
          <Button asChild size="sm" className="ml-2">
            <a href="#contact">Let’s talk</a>
          </Button>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </nav>
      {isMobileMenuOpen && (
        <div id="mobile-navigation" className="border-t border-border bg-background px-5 py-3 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {navItems.map((item) => {
              const id = item.href.slice(1);
              return (
                <Button key={item.name} variant="ghost" asChild className={`h-11 justify-start rounded-none border-b border-border px-2 ${activeSection === id ? 'text-primary' : 'text-foreground'}`}>
                  <a href={item.href} aria-current={activeSection === id ? 'location' : undefined} onClick={closeMenu}>{item.name}</a>
                </Button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
