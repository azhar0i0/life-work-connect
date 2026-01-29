import { Link } from 'react-router-dom';

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/get-started', label: 'Get Started' },
  { href: '/why-work-with-us', label: 'Why Us' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-foreground text-background"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link 
              to="/" 
              className="inline-block text-2xl font-bold tracking-tight focus-ring rounded-md"
              aria-label="Nexalight - Go to homepage"
            >
              <span className="text-primary">Nexa</span>light
            </Link>
            <p className="text-background/70 text-sm max-w-xs leading-relaxed">
              Flexible, legitimate remote call center opportunities that fit real life.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <h2 className="font-semibold text-sm uppercase tracking-wider text-background/50 mb-4">
              Navigation
            </h2>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors duration-150 ease-human text-sm w-fit focus-ring rounded-sm inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address className="space-y-4 not-italic">
            <h2 className="font-semibold text-sm uppercase tracking-wider text-background/50">
              Contact
            </h2>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:info@nexalightvs.com"
                className="block text-background/70 hover:text-primary transition-colors duration-150 ease-human w-fit focus-ring rounded-sm"
                aria-label="Email us at info@nexalightvs.com"
              >
                info@nexalightvs.com
              </a>
              <a
                href="tel:317-572-5034"
                className="block text-background/70 hover:text-primary transition-colors duration-150 ease-human w-fit focus-ring rounded-sm"
                aria-label="Call us at 317-572-5034"
              >
                317-572-5034
              </a>
            </div>
          </address>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {currentYear} Nexalight Virtual Solutions. All rights reserved.
            </p>
            <p className="text-background/40 text-xs" aria-label="Company keywords">
              Remote Work • Customer Support • Work-Life Balance
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
