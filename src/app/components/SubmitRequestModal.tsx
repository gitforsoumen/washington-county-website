import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { X } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface SubmitRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SubmitRequestModal({
  open,
  onOpenChange,
}: SubmitRequestModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    requestType: "",
    subject: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.requestType || !formData.subject || !formData.description) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Mock submission
    console.log("Form submitted:", formData);
    toast.success("Your request has been submitted successfully! We'll get back to you soon.");
    
    // Reset form and close modal
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      department: "",
      requestType: "",
      subject: "",
      description: "",
    });
    onOpenChange(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[90vw] max-w-none overflow-y-auto rounded-xl">
        <DialogHeader className="mt-[0px] mr-[0px] mb-[0px] ml-[10px] m-[0px]">
          <DialogTitle className="text-2xl font-bold text-[#002E45] dark:text-[#E6F1F4]">
            Submit a Request
          </DialogTitle>
          <DialogDescription className="text-[#4A5056] dark:text-[#AEB0B5]">
            Fill out the form below to submit a request to Washington County. We'll respond within 2-3 business days.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-[#002E45] dark:text-[#E6F1F4] font-semibold">
                First Name <span className="text-[#F01A42]">*</span>
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                placeholder="Enter your first name"
                required
                className="rounded-xl border-[#AEB0B5]/30 focus:border-[#05547A] focus:ring-[#05547A]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-[#002E45] dark:text-[#E6F1F4] font-semibold">
                Last Name <span className="text-[#F01A42]">*</span>
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                placeholder="Enter your last name"
                required
                className="rounded-xl border-[#AEB0B5]/30 focus:border-[#05547A] focus:ring-[#05547A]"
              />
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#002E45] dark:text-[#E6F1F4] font-semibold">
                Email Address <span className="text-[#F01A42]">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="your.email@example.com"
                required
                className="rounded-xl border-[#AEB0B5]/30 focus:border-[#05547A] focus:ring-[#05547A]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[#002E45] dark:text-[#E6F1F4] font-semibold">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="(435) 123-4567"
                className="rounded-xl border-[#AEB0B5]/30 focus:border-[#05547A] focus:ring-[#05547A]"
              />
            </div>
          </div>

          {/* Department Selection */}
          <div className="space-y-2">
            <Label htmlFor="department" className="text-[#002E45] dark:text-[#E6F1F4] font-semibold">
              Department
            </Label>
            <Select value={formData.department} onValueChange={(value) => handleChange("department", value)}>
              <SelectTrigger id="department" className="rounded-xl border-[#AEB0B5]/30">
                <SelectValue placeholder="Select a department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="assessor">Assessor</SelectItem>
                <SelectItem value="auditor">Auditor</SelectItem>
                <SelectItem value="clerk">Clerk</SelectItem>
                <SelectItem value="community-development">Community Development</SelectItem>
                <SelectItem value="emergency-management">Emergency Management</SelectItem>
                <SelectItem value="public-works">Public Works</SelectItem>
                <SelectItem value="roads">Roads</SelectItem>
                <SelectItem value="solid-waste">Solid Waste</SelectItem>
                <SelectItem value="planning">Planning Commission</SelectItem>
                <SelectItem value="sheriff">Sheriff</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Request Type */}
          <div className="space-y-2">
            <Label htmlFor="requestType" className="text-[#002E45] dark:text-[#E6F1F4] font-semibold">
              Request Type <span className="text-[#F01A42]">*</span>
            </Label>
            <Select value={formData.requestType} onValueChange={(value) => handleChange("requestType", value)} required>
              <SelectTrigger id="requestType" className="rounded-xl border-[#AEB0B5]/30">
                <SelectValue placeholder="Select request type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                <SelectItem value="service-request">Service Request</SelectItem>
                <SelectItem value="complaint">Complaint</SelectItem>
                <SelectItem value="records-request">Records Request (GRAMA)</SelectItem>
                <SelectItem value="permit-application">Permit Application</SelectItem>
                <SelectItem value="property-tax">Property Tax Question</SelectItem>
                <SelectItem value="road-maintenance">Road Maintenance</SelectItem>
                <SelectItem value="waste-management">Waste Management</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-[#002E45] dark:text-[#E6F1F4] font-semibold">
              Subject <span className="text-[#F01A42]">*</span>
            </Label>
            <Input
              id="subject"
              value={formData.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
              placeholder="Brief summary of your request"
              required
              className="rounded-xl border-[#AEB0B5]/30 focus:border-[#05547A] focus:ring-[#05547A]"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-[#002E45] dark:text-[#E6F1F4] font-semibold">
              Description <span className="text-[#F01A42]">*</span>
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Please provide detailed information about your request..."
              required
              rows={6}
              className="rounded-xl border-[#AEB0B5]/30 focus:border-[#05547A] focus:ring-[#05547A] resize-none"
            />
            <p className="text-sm text-[#4A5056] dark:text-[#AEB0B5]">
              Please include as much detail as possible to help us process your request efficiently.
            </p>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4 border-t border-[#AEB0B5]/30">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1 sm:flex-none rounded-xl border-[#AEB0B5]/30 hover:bg-[#F5F5F5] dark:hover:bg-[#002E45]/50"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 sm:flex-none bg-[#05547A] hover:bg-[#003D5C] text-white rounded-xl transition-all duration-200"
            >
              Submit Request
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}