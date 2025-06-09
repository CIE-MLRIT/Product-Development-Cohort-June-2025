"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check } from "lucide-react";

export default function SharonPage() {
  const [step, setStep] = useState(1); // 1: Welcome, 2: Payment Gateway
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handlePayment = () => {
    if (!name || !email) {
      alert("Please fill in all required fields!");
      return;
    }
    alert("Payment gateway integration is under development.");
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold font-poppins text-gray-900 mb-4">
            Welcome to <span className="text-blue-600">Sharon's Page</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            This is Sharon Lilly from CSE - G, roll number 24R21A05KK.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-4">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                step >= 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              {step > 1 ? <Check className="w-5 h-5" /> : "1"}
            </div>
            <span className={`font-medium ${step >= 1 ? "text-blue-600" : "text-gray-500"}`}>Welcome</span>
            <ArrowRight className="w-5 h-5 text-gray-400" />
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                step >= 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              2
            </div>
            <span className={`font-medium ${step >= 2 ? "text-blue-600" : "text-gray-500"}`}>Payment Gateway</span>
          </div>
        </div>

        {step === 1 ? (
          /* Welcome Section */
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins font-bold text-gray-900">Welcome!</CardTitle>
              <CardDescription className="text-gray-600">
                Click below to proceed to the payment gateway.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => setStep(2)}
                className="w-full bg-blue-600 hover:bg-blue-700 font-semibold text-lg py-4 rounded-xl"
              >
                Proceed to Payment
              </Button>
            </CardContent>
          </Card>
        ) : (
          /* Payment Gateway Section */
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins font-bold text-gray-900">Payment Gateway</CardTitle>
              <CardDescription className="text-gray-600">
                Fill in your details to proceed with the payment.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-base font-semibold">
                  Your Name *
                </Label>
                <Input
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 h-12 text-base"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-base font-semibold">
                  Email *
                </Label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 h-12 text-base"
                />
              </div>

              <Button
                onClick={handlePayment}
                className="w-full bg-blue-600 hover:bg-blue-700 font-semibold text-lg py-4 rounded-xl"
              >
                Pay Now
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
