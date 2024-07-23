import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CheckCircle, Zap, Shield, Globe } from 'lucide-react';

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

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Revolutionize Your Workflow</h1>
        <p className="text-xl text-gray-600 mb-8">Streamline your business processes with our cutting-edge SaaS solution</p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">Start Free Trial</Button>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
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
      <section className="container mx-auto px-4 py-16 bg-gray-50">
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

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 YourSaaS Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;