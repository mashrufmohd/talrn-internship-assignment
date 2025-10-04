import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { z } from "zod";

const organisationSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(100),
  lastName: z.string().min(1, "Last name is required").max(100),
  jobTitle: z.string().min(1, "Job title is required").max(100),
  organization: z.string().min(1, "Organization is required").max(100),
  website: z.string().url("Invalid website URL").max(255),
  workEmail: z.string().email("Invalid email address").max(255),
  phoneNumber: z.string().min(1, "Phone number is required").max(20),
  city: z.string().min(1, "City is required").max(100),
  corporateRegistrationNumber: z.string().min(1, "Corporate registration number is required").max(50),
  referralCode: z.string().max(50).optional(),
});

const individualSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(100),
  lastName: z.string().min(1, "Last name is required").max(100),
  workEmail: z.string().email("Invalid email address").max(255),
  phoneNumber: z.string().min(1, "Phone number is required").max(20),
  city: z.string().min(1, "City is required").max(100),
  referralCode: z.string().max(50).optional(),
});

export default function Signup() {
  const [accountType, setAccountType] = useState<"organisation" | "individual">("organisation");
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const [orgForm, setOrgForm] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    organization: "",
    website: "",
    workEmail: "",
    phoneNumber: "",
    city: "",
    corporateRegistrationNumber: "",
    referralCode: "",
  });

  const [indForm, setIndForm] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    phoneNumber: "",
    city: "",
    referralCode: "",
  });

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = accountType === "organisation" ? orgForm : indForm;
      const schema = accountType === "organisation" ? organisationSchema : individualSchema;
      
      schema.parse(formData);
      setLoading(true);

      const email = formData.workEmail;

      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: {
            account_type: accountType,
            ...formData,
          },
        },
      });

      if (error) throw error;

      setOtpSent(true);
      toast({
        title: "Verification Email Sent",
        description: "Check your email for the verification code",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: error instanceof Error ? error.message : "Failed to create account",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!otp || otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid 6-digit code",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);
      const email = accountType === "organisation" ? orgForm.workEmail : indForm.workEmail;

      const { data: authData, error: verifyError } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: "email",
      });

      if (verifyError) throw verifyError;

      if (authData.user) {
        const formData = accountType === "organisation" ? orgForm : indForm;
        
        const profileData = {
          user_id: authData.user.id,
          account_type: accountType,
          first_name: formData.firstName,
          last_name: formData.lastName,
          work_email: formData.workEmail,
          phone_number: formData.phoneNumber,
          city: formData.city,
          referral_code: formData.referralCode || null,
          ...(accountType === "organisation" && {
            job_title: orgForm.jobTitle,
            organization: orgForm.organization,
            website: orgForm.website,
            corporate_registration_number: orgForm.corporateRegistrationNumber,
          }),
        };

        const { error: profileError } = await supabase
          .from("profiles")
          .insert(profileData);

        if (profileError) throw profileError;

        toast({
          title: "Success",
          description: "Account created successfully",
        });

        navigate("/");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to verify account",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-block mb-8">
          <h1 className="text-4xl font-bold text-primary">Talrn</h1>
        </Link>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-lg shadow-lg p-8">
            {!otpSent ? (
              <>
                <h2 className="text-3xl font-semibold text-center mb-4 text-foreground">
                  Create your Talrn Account
                </h2>
                
                <p className="text-center text-muted-foreground mb-4">
                  Talrn is an exclusive network of the world's top talent.
                </p>
                <p className="text-center text-muted-foreground mb-8">
                  We provide access to top companies and resources that can help accelerate your growth.
                </p>

                <Tabs value={accountType} onValueChange={(v) => setAccountType(v as "organisation" | "individual")} className="mb-6">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="organisation">Organisation</TabsTrigger>
                    <TabsTrigger value="individual">Individual</TabsTrigger>
                  </TabsList>

                  <TabsContent value="organisation">
                    <form onSubmit={handleSignup} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            value={orgForm.firstName}
                            onChange={(e) => setOrgForm({ ...orgForm, firstName: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={orgForm.lastName}
                            onChange={(e) => setOrgForm({ ...orgForm, lastName: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="jobTitle">Job title *</Label>
                          <Input
                            id="jobTitle"
                            value={orgForm.jobTitle}
                            onChange={(e) => setOrgForm({ ...orgForm, jobTitle: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="organization">Organization *</Label>
                          <Input
                            id="organization"
                            value={orgForm.organization}
                            onChange={(e) => setOrgForm({ ...orgForm, organization: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="website">Website *</Label>
                          <Input
                            id="website"
                            type="url"
                            placeholder="https://"
                            value={orgForm.website}
                            onChange={(e) => setOrgForm({ ...orgForm, website: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="workEmail">Work email *</Label>
                          <Input
                            id="workEmail"
                            type="email"
                            value={orgForm.workEmail}
                            onChange={(e) => setOrgForm({ ...orgForm, workEmail: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phoneNumber">Phone number *</Label>
                          <Input
                            id="phoneNumber"
                            type="tel"
                            value={orgForm.phoneNumber}
                            onChange={(e) => setOrgForm({ ...orgForm, phoneNumber: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            value={orgForm.city}
                            onChange={(e) => setOrgForm({ ...orgForm, city: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="corporateRegistrationNumber">Corporate Registration Number *</Label>
                          <Input
                            id="corporateRegistrationNumber"
                            value={orgForm.corporateRegistrationNumber}
                            onChange={(e) => setOrgForm({ ...orgForm, corporateRegistrationNumber: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="referralCode">Referral code</Label>
                          <Input
                            id="referralCode"
                            value={orgForm.referralCode}
                            onChange={(e) => setOrgForm({ ...orgForm, referralCode: e.target.value })}
                          />
                        </div>
                      </div>

                      <Button type="submit" className="w-full mt-6" disabled={loading}>
                        {loading ? "Creating Account..." : "Register"}
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="individual">
                    <form onSubmit={handleSignup} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="indFirstName">First Name *</Label>
                          <Input
                            id="indFirstName"
                            value={indForm.firstName}
                            onChange={(e) => setIndForm({ ...indForm, firstName: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="indLastName">Last Name *</Label>
                          <Input
                            id="indLastName"
                            value={indForm.lastName}
                            onChange={(e) => setIndForm({ ...indForm, lastName: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="indWorkEmail">Work email *</Label>
                          <Input
                            id="indWorkEmail"
                            type="email"
                            value={indForm.workEmail}
                            onChange={(e) => setIndForm({ ...indForm, workEmail: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="indPhoneNumber">Phone number *</Label>
                          <Input
                            id="indPhoneNumber"
                            type="tel"
                            value={indForm.phoneNumber}
                            onChange={(e) => setIndForm({ ...indForm, phoneNumber: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="indCity">City *</Label>
                          <Input
                            id="indCity"
                            value={indForm.city}
                            onChange={(e) => setIndForm({ ...indForm, city: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="indReferralCode">Referral code</Label>
                          <Input
                            id="indReferralCode"
                            value={indForm.referralCode}
                            onChange={(e) => setIndForm({ ...indForm, referralCode: e.target.value })}
                          />
                        </div>
                      </div>

                      <Button type="submit" className="w-full mt-6" disabled={loading}>
                        {loading ? "Creating Account..." : "Register"}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </>
            ) : (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-center text-foreground">
                  Verify Your Email
                </h2>
                <form onSubmit={handleVerifyOtp} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="otpCode">Enter 6-digit code</Label>
                    <Input
                      id="otpCode"
                      type="text"
                      placeholder="000000"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                      maxLength={6}
                      required
                    />
                    <p className="text-sm text-muted-foreground">
                      Code sent to {accountType === "organisation" ? orgForm.workEmail : indForm.workEmail}
                    </p>
                  </div>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Verifying..." : "Verify & Create Account"}
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    className="w-full"
                    onClick={() => {
                      setOtpSent(false);
                      setOtp("");
                    }}
                  >
                    Change Email
                  </Button>
                </form>
              </div>
            )}
          </div>

          {!otpSent && (
            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/admin/auth/login" className="text-primary hover:underline">
                  Login
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
