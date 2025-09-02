import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Client = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: '',
    contactMethod: '',
    otherContactMethod: '',
    primaryContact: '',
    businessName: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      contactMethod: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body with form data
    const contactMethodText = formData.contactMethod === 'Other:' 
      ? `Other: ${formData.otherContactMethod}` 
      : formData.contactMethod;

    const emailBody = `
Client Sign-Up Form Submission

Phone Number: ${formData.phone}
Best Method to Reach Out: ${contactMethodText}
Primary Contact Person: ${formData.primaryContact}
Name of Business: ${formData.businessName}

Submitted from: Eninnov Client Sign-Up Form
    `.trim();

    // Create mailto URL
    const mailtoURL = `mailto:contact@eninnovate.com?subject=Client Sign-Up Form Submission&body=${encodeURIComponent(emailBody)}`;
    
    // Use window.location.href for better email client integration
    window.location.href = mailtoURL;
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        phone: '',
        contactMethod: '',
        otherContactMethod: '',
        primaryContact: '',
        businessName: ''
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
                Eninnov, LLC – Client Sign-Up Form
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Welcome to Eninnov, a provider of tailored engineering expertise, staffing, and consulting solutions.
              </CardDescription>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  Please complete this form to help us understand your needs.
                </p>
                <p className="text-muted-foreground">
                  All submitted information is treated with the utmost confidentiality.
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
                    Your client sign-up form has been submitted successfully. We've opened your email client with the form details.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    If your email client didn't open automatically, please send your information to: 
                    <span className="font-semibold text-primary"> contact@eninnovate.com</span>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Your Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-medium">
                      Best Method to Reach out to You: *
                    </Label>
                    <RadioGroup value={formData.contactMethod} onValueChange={handleRadioChange} required>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Phone" id="phone-method" />
                        <Label htmlFor="phone-method">Phone</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Email" id="email-method" />
                        <Label htmlFor="email-method">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Other:" id="other-method" />
                        <Label htmlFor="other-method">Other:</Label>
                        {formData.contactMethod === 'Other:' && (
                          <Input
                            name="otherContactMethod"
                            type="text"
                            value={formData.otherContactMethod}
                            onChange={handleInputChange}
                            placeholder="Please specify"
                            className="ml-2 flex-1"
                          />
                        )}
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="primaryContact" className="text-sm font-medium">
                      Primary Contact Person (Name, Title, Email): *
                    </Label>
                    <Textarea
                      id="primaryContact"
                      name="primaryContact"
                      required
                      value={formData.primaryContact}
                      onChange={handleInputChange}
                      placeholder="e.g., John Smith, CEO, john.smith@company.com"
                      className="w-full min-h-[80px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessName" className="text-sm font-medium">
                      Name of Your Business: *
                    </Label>
                    <Input
                      id="businessName"
                      name="businessName"
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="Enter your business name"
                      className="w-full"
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-gradient-primary text-primary-foreground font-semibold py-3 text-lg hover-glow transition-smooth"
                    >
                      Submit Client Information
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

export default Client;
