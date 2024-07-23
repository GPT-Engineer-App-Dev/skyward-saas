import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { CheckCircle, Zap, Shield, Globe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Feature = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4">
    {icon}
    <h3 className="mt-4 text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

const PricingTier = ({ name, price, features }) => (
  <Card className="w-full max-w-sm">
    <CardHeader>
      <CardTitle>{name}</CardTitle>
      <CardDescription className="text-3xl font-bold">${price}/mo</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
            {feature}
          </li>
        ))}
      </ul>
      <Button className="w-full mt-6">Get Started</Button>
    </CardContent>
  </Card>
);

const Navbar = () => (
  <nav className="bg-white shadow-md">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-blue-600">YourSaaS</div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-3 py-2 text-gray-700 hover:text-blue-600" href="#features">
                Features
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-3 py-2 text-gray-700 hover:text-blue-600" href="#pricing">
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[200px]">
                  <li><NavigationMenuLink href="#">Blog</NavigationMenuLink></li>
                  <li><NavigationMenuLink href="#">Documentation</NavigationMenuLink></li>
                  <li><NavigationMenuLink href="#">Support</NavigationMenuLink></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button>Sign In</Button>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">YourSaaS</h3>
          <p className="text-gray-400">Revolutionizing your workflow with cutting-edge SaaS solutions.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
            <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><Facebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Twitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Instagram size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={24} /></a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center">
        <p>&copy; 2023 YourSaaS Company. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Revolutionize Your Workflow</h1>
        <p className="text-xl text-gray-600 mb-8">Streamline your business processes with our cutting-edge SaaS solution</p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">Start Free Trial</Button>
      </header>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature 
            icon={<Zap className="h-12 w-12 text-blue-500" />}
            title="Lightning Fast"
            description="Experience unparalleled speed and efficiency in your daily operations."
          />
          <Feature 
            icon={<Shield className="h-12 w-12 text-blue-500" />}
            title="Secure & Reliable"
            description="Your data is safe with us. We use state-of-the-art security measures."
          />
          <Feature 
            icon={<Globe className="h-12 w-12 text-blue-500" />}
            title="Global Accessibility"
            description="Access your work from anywhere in the world, at any time."
          />
          <Feature 
            icon={<CheckCircle className="h-12 w-12 text-blue-500" />}
            title="Easy Integration"
            description="Seamlessly integrate with your existing tools and workflows."
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <PricingTier 
            name="Basic"
            price={29}
            features={[
              "Up to 5 users",
              "Basic features",
              "Email support"
            ]}
          />
          <PricingTier 
            name="Pro"
            price={79}
            features={[
              "Up to 20 users",
              "Advanced features",
              "Priority support"
            ]}
          />
          <PricingTier 
            name="Enterprise"
            price={199}
            features={[
              "Unlimited users",
              "Custom features",
              "24/7 dedicated support"
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl text-gray-600 mb-8">Join thousands of satisfied customers and take your operations to the next level.</p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">Get Started Now</Button>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;