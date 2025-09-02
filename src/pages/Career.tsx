import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Career = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    location: '',
    startDate: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body with form data
    const emailBody = `
Career Interest Form Submission

Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Location: ${formData.location}
Availability Start Date: ${formData.startDate}

Submitted from: Eninnov Career Interest Form
    `.trim();

    // Create mailto URL
    const mailtoURL = `mailto:contact@eninnovate.com?subject=Career Interest Form Submission&body=${encodeURIComponent(emailBody)}`;
    
    // Use window.location.href for better email client integration
    window.location.href = mailtoURL;
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        email: '',
        phone: '',
        location: '',
        startDate: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="container mx-auto px-6 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2 hover:bg-muted"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg border-0 bg-card">
            <CardHeader className="text-center space-y-4 pb-8">
              <CardTitle className="text-3xl font-bold text-gradient-hero">
                Eninnov, LLC – Candidate Interest Form
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Tell us about yourself!
              </CardDescription>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  We connect skilled professionals with top opportunities in engineering, technology, and consulting.
                </p>
                <p className="text-muted-foreground">
                  Your info stays confidential and helps us match you with the right roles.
                </p>
              </div>
            </CardHeader>

            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Your application has been submitted successfully. We've opened your email client with the form details.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    If your email client didn't open automatically, please send your information to: 
                    <span className="font-semibold text-primary"> contact@eninnovate.com</span>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Your Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Your Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-sm font-medium">
                      Current Location (City, State) *
                    </Label>
                    <Input
                      id="location"
                      name="location"
                      type="text"
                      required
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="e.g., Portland, OR"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="startDate" className="text-sm font-medium">
                      Availability Start Date *
                    </Label>
                    <Input
                      id="startDate"
                      name="startDate"
                      type="date"
                      required
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-gradient-primary text-primary-foreground font-semibold py-3 text-lg hover-glow transition-smooth"
                    >
                      Submit Application
                    </Button>
                  </div>

                  <div className="text-xs text-muted-foreground text-center pt-2">
                    * Indicates required question
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Career;
