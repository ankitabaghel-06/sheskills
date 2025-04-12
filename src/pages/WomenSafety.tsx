
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { PhoneCall, MapPin, BookOpen, Shield, Phone, AlertTriangle, UserRound } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const WomenSafety = () => {
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState<{lat: number, lng: number} | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const { toast } = useToast();

  const emergencyNumbers = [
    { name: "Women's Helpline", number: "1091", description: "National women's helpline for any type of assistance" },
    { name: "Police", number: "100", description: "Emergency police service" },
    { name: "Ambulance", number: "102", description: "Emergency medical service" },
    { name: "Domestic Violence Helpline", number: "181", description: "For domestic violence cases" },
    { name: "Anti-Stalking Helpline", number: "1096", description: "For reporting stalking incidents" },
    { name: "Railway Protection", number: "182", description: "For safety issues while traveling by train" }
  ];

  const safetyTips = [
    {
      title: "Share Your Location",
      description: "Always share your live location with trusted family or friends when traveling alone.",
      icon: <MapPin className="w-10 h-10 text-sheskills-purple" />
    },
    {
      title: "Stay Alert",
      description: "Be aware of your surroundings, especially in unfamiliar areas or at night.",
      icon: <AlertTriangle className="w-10 h-10 text-sheskills-purple" />
    },
    {
      title: "Emergency Contacts",
      description: "Keep emergency contacts on speed dial or easily accessible on your phone.",
      icon: <PhoneCall className="w-10 h-10 text-sheskills-purple" />
    },
    {
      title: "Use Safety Apps",
      description: "Install and use safety apps that can send SOS alerts with a single button press.",
      icon: <Shield className="w-10 h-10 text-sheskills-purple" />
    },
    {
      title: "Learn Self-Defense",
      description: "Consider learning basic self-defense techniques for emergency situations.",
      icon: <UserRound className="w-10 h-10 text-sheskills-purple" />
    },
    {
      title: "Plan Your Journey",
      description: "Plan your travel routes in advance and stick to well-lit, populated areas.",
      icon: <BookOpen className="w-10 h-10 text-sheskills-purple" />
    }
  ];

  const handleGetLocation = () => {
    setIsLocating(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setIsLocating(false);
          toast({
            title: "Location fetched",
            description: "Your current location has been added to the message."
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          setIsLocating(false);
          toast({
            title: "Location error",
            description: "Could not get your location. Please check your browser permissions.",
            variant: "destructive"
          });
        }
      );
    } else {
      setIsLocating(false);
      toast({
        title: "Geolocation not supported",
        description: "Your browser does not support geolocation.",
        variant: "destructive"
      });
    }
  };

  const handleSendAlert = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactName || !contactPhone) {
      toast({
        title: "Missing information",
        description: "Please provide an emergency contact name and phone number.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    // This would be connected to an SMS service in a production app
    setTimeout(() => {
      toast({
        title: "Alert sent",
        description: `Emergency alert sent to ${contactName} (${contactPhone}).`,
      });
      setIsLoading(false);
    }, 1500);
  };

  const handleCall = (number: string, name: string) => {
    window.location.href = `tel:${number}`;
    toast({
      title: "Calling...",
      description: `Dialing ${name} (${number})`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl font-bold mb-4">Women Safety Center</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Access emergency resources, safety tips, and quick alerts to stay safe in any situation.
            </p>
          </div>
          
          <Tabs defaultValue="emergency" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="emergency">Emergency Alert</TabsTrigger>
              <TabsTrigger value="numbers">Helpline Numbers</TabsTrigger>
              <TabsTrigger value="tips">Safety Tips</TabsTrigger>
            </TabsList>
            
            <TabsContent value="emergency">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Emergency Alert System</CardTitle>
                  <CardDescription>
                    Quickly send your location and a distress message to your emergency contacts.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSendAlert} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="contactName" className="text-sm font-medium">Emergency Contact Name</label>
                        <Input
                          id="contactName"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="e.g. Mom, Dad, Sister"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="contactPhone" className="text-sm font-medium">Emergency Contact Phone</label>
                        <Input
                          id="contactPhone"
                          type="tel"
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          placeholder="e.g. +91 9876543210"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label htmlFor="message" className="text-sm font-medium">Emergency Message</label>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={handleGetLocation}
                          disabled={isLocating}
                          className="text-xs"
                        >
                          {isLocating ? "Getting Location..." : "Add Current Location"}
                          <MapPin className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your emergency message here..."
                        rows={3}
                      />
                      {location && (
                        <div className="text-xs text-gray-500">
                          Location coordinates: {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
                        </div>
                      )}
                    </div>
                    
                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700"
                        disabled={isLoading}
                      >
                        {isLoading ? "Sending Alert..." : (
                          <>
                            <AlertTriangle className="mr-2 h-4 w-4" />
                            Send Emergency Alert
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center border-t pt-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    In an immediate emergency, always call 112 (National Emergency Number) first.
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="numbers">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {emergencyNumbers.map((number, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{number.name}</h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">{number.description}</p>
                        </div>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 text-green-600 border-green-600"
                          onClick={() => handleCall(number.number, number.name)}
                        >
                          <Phone className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center mt-4">
                        <div className="text-2xl font-mono font-semibold text-sheskills-purple">
                          {number.number}
                        </div>
                        <Button
                          variant="link"
                          className="text-sm ml-2 h-auto p-0 text-sheskills-purple"
                          onClick={() => handleCall(number.number, number.name)}
                        >
                          Tap to Call
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tips">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {safetyTips.map((tip, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        {tip.icon}
                      </div>
                      <h3 className="font-semibold text-lg text-center mb-2">{tip.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-center">{tip.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4">Recommended Safety Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">Self-Defense Techniques</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Learn basic self-defense moves that could help you in dangerous situations.
                      </p>
                      <Button asChild variant="outline" className="w-full">
                        <a 
                          href="https://www.youtube.com/watch?v=T7aNSRoDCmg" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Watch Video
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">Mental Health Support</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Access resources for mental health support and counseling.
                      </p>
                      <Button asChild variant="outline" className="w-full">
                        <a 
                          href="https://www.thelivelovelaughfoundation.org/helpline" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Get Support
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WomenSafety;
