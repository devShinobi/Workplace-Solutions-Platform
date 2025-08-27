import { Separator } from "./ui/separator";

export function Footer() {
  const footerSections = [
    {
      title: "Platform",
      links: ["How It Works", "Features", "Pricing", "Success Stories"]
    },
    {
      title: "Solutions",
      links: ["Workplace Issues", "Scaling Support", "Mentorship", "Case Studies"]
    },
    {
      title: "Resources",
      links: ["Playbooks", "Templates", "Best Practices", "Community Guidelines"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Contact", "Privacy Policy"]
    }
  ];

  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold">WorkplacePro</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Transforming workplace challenges into success stories through community-driven solutions and expert guidance.
            </p>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-medium">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 WorkplacePro. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}