import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/Card/Card";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { Label } from "@/components/Label/Label";
import { Checkbox } from "@/components/Checkbox/Checkbox";
import { Switch } from "@/components/Switch/Switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar/Avatar";
import { Badge } from "@/components/Badge/Badge";
import { SidebarLayout, Sidebar, SidebarGroup, SidebarItem, useSidebarContext } from "@/components/Sidebar/Sidebar";
import { TopBar } from "@/components/TopBar/TopBar";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/Table/Table";
import {
  Mail,
  Key,
  Shield,
  User,
  Bell,
  Home,
  BarChart2,
  Settings,
  LogOut,
  Search,
  Plus,
  ArrowUpRight,
  DollarSign,
  Check,
  Package,
  Users
} from "lucide-react";

const meta: Meta = {
  title: "Layout/Page Layouts",
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center p-8 bg-muted/20 min-h-[500px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const LoginScreen: StoryObj = {
  render: () => {
    return (
      <Card className="w-full max-w-md shadow-lg border border-border">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center font-bold">Welcome back</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials below to access your project workspace.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" placeholder="name@domain.com" leftIcon={<Mail className="h-4 w-4" />} />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <a href="#" className="text-xs text-primary hover:underline font-medium">Forgot password?</a>
            </div>
            <Input id="password" type="password" placeholder="••••••••" leftIcon={<Key className="h-4 w-4" />} />
          </div>
          <div className="flex items-center space-x-2 py-1">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-xs font-normal">Remember login on this device</Label>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Button className="w-full">Sign In</Button>
          <div className="text-xs text-center text-muted-foreground mt-2">
            Don't have an account?{" "}
            <a href="#" className="text-primary hover:underline font-semibold">Create account</a>
          </div>
        </CardFooter>
      </Card>
    );
  },
};

export const SignupScreen: StoryObj = {
  render: () => {
    return (
      <Card className="w-full max-w-md shadow-lg border border-border">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center font-bold">Create an account</CardTitle>
          <CardDescription className="text-center">
            Get started today with your free trial account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Jane" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Doe" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="signup-email">Email address</Label>
            <Input id="signup-email" type="email" placeholder="name@domain.com" leftIcon={<Mail className="h-4 w-4" />} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="signup-password">Password</Label>
            <Input id="signup-password" type="password" placeholder="••••••••" leftIcon={<Key className="h-4 w-4" />} />
          </div>
          <div className="flex items-start space-x-2 py-1">
            <Checkbox id="terms" className="mt-1" />
            <Label htmlFor="terms" className="text-xs font-normal leading-normal">
              I agree to the{" "}
              <a href="#" className="text-primary hover:underline font-medium">Terms of Service</a>{" "}
              and{" "}
              <a href="#" className="text-primary hover:underline font-medium">Privacy Policy</a>.
            </Label>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Button className="w-full">Sign Up</Button>
          <div className="text-xs text-center text-muted-foreground mt-2">
            Already have an account?{" "}
            <a href="#" className="text-primary hover:underline font-semibold">Sign in</a>
          </div>
        </CardFooter>
      </Card>
    );
  },
};

export const ProfileSettings: StoryObj = {
  render: () => {
    return (
      <Card className="w-full max-w-2xl border border-border">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>Manage user parameters and email notifications.</CardDescription>
            </div>
            <Badge variant="success">Admin Access</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Avatar Section */}
          <div className="flex items-center gap-4 pb-4 border-b border-border/50">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="text-sm font-semibold text-foreground">Jane Doe</h4>
              <p className="text-xs text-muted-foreground">Admin user in workspace Modula</p>
              <div className="flex gap-2 mt-2">
                <Button size="sm" variant="outline">Change Avatar</Button>
                <Button size="sm" variant="ghost" className="text-destructive hover:bg-destructive/10">Remove</Button>
              </div>
            </div>
          </div>

          {/* Form details */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="janedoe" leftIcon={<User className="h-4 w-4" />} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">Role Permission</Label>
              <Input id="role" defaultValue="Super Administrator" disabled leftIcon={<Shield className="h-4 w-4" />} />
            </div>
          </div>

          {/* Switch Options */}
          <div className="space-y-3 pt-2">
            <h4 className="text-sm font-medium text-foreground">Notifications</h4>
            <div className="flex items-center justify-between p-3 rounded-lg border border-border/50 bg-muted/20">
              <div className="space-y-0.5">
                <Label htmlFor="email-notif" className="text-sm">Email Alerts</Label>
                <p className="text-xs text-muted-foreground">Receive weekly digest activity alerts.</p>
              </div>
              <Switch id="email-notif" checked={true} />
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg border border-border/50 bg-muted/20">
              <div className="space-y-0.5">
                <Label htmlFor="security-notif" className="text-sm">Security Warnings</Label>
                <p className="text-xs text-muted-foreground">Get notified on unauthorized login logs.</p>
              </div>
              <Switch id="security-notif" checked={true} />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-3 border-t border-border/50 pt-6">
          <Button variant="outline">Reset</Button>
          <Button>Save Settings</Button>
        </CardFooter>
      </Card>
    );
  },
};

const DashboardLogo = () => {
  const { isCollapsed } = useSidebarContext();
  return (
    <div className="flex items-center gap-2">
      <div className="h-6 w-6 rounded bg-primary flex items-center justify-center text-primary-foreground font-black text-xs shrink-0">
        L
      </div>
      {!isCollapsed && <span className="text-sm tracking-tight font-bold">Lablnet UI</span>}
    </div>
  );
};

const DashboardFooter = () => {
  const { isCollapsed } = useSidebarContext();
  if (isCollapsed) {
    return (
      <div className="flex justify-center w-full">
        <Avatar className="h-9 w-9">
          <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-3 w-full">
      <Avatar className="h-9 w-9">
        <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div className="flex-1 overflow-hidden">
        <p className="text-xs font-semibold truncate">Jane Doe</p>
        <p className="text-[10px] text-muted-foreground truncate">jane@lablnet.com</p>
      </div>
      <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-destructive shrink-0">
        <LogOut className="h-4 w-4" />
      </Button>
    </div>
  );
};

export const DashboardLayoutStory: StoryObj = {
  name: "Dashboard Layout",
  decorators: [
    (Story) => (
      <div className="w-full min-h-[650px] border border-border rounded-xl overflow-hidden bg-background shadow-2xl">
        <Story />
      </div>
    ),
  ],
  render: () => {
    return (
      <SidebarLayout>
        <Sidebar
          logo={<DashboardLogo />}
          footer={<DashboardFooter />}
        >
          <SidebarGroup title="Platform">
            <SidebarItem icon={<Home className="h-4 w-4" />} active>
              Overview
            </SidebarItem>
            <SidebarItem icon={<BarChart2 className="h-4 w-4" />}>
              Analytics
            </SidebarItem>
            <SidebarItem icon={<Package className="h-4 w-4" />}>
              Products
            </SidebarItem>
            <SidebarItem icon={<Users className="h-4 w-4" />}>
              Customers
            </SidebarItem>
          </SidebarGroup>
          <SidebarGroup title="System">
            <SidebarItem icon={<Settings className="h-4 w-4" />}>
              Settings
            </SidebarItem>
          </SidebarGroup>
        </Sidebar>

        <div className="flex flex-col flex-1 min-w-0">
          <TopBar
            leftContent={
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold tracking-tight">Overview</h1>
                <Badge variant="outline" className="text-xs bg-muted/50">v1.2.0</Badge>
              </div>
            }
            rightContent={
              <div className="flex items-center gap-3">
                <Button size="icon" variant="outline" className="relative h-9 w-9 rounded-lg">
                  <Bell className="h-4 w-4" />
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive" />
                </Button>
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            }
          >
            <Input
              type="search"
              placeholder="Search resource dashboards..."
              className="h-9 w-full bg-muted/40"
              leftIcon={<Search className="h-4 w-4" />}
            />
          </TopBar>

          <main className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Quick Metrics Grid */}
            <div className="grid gap-4 sm:grid-cols-3">
              <Card className="border border-border/60">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-xs font-semibold text-muted-foreground uppercase">
                    Total Revenue
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$48,259.00</div>
                  <p className="text-[10px] text-success-foreground font-medium flex items-center gap-1 mt-1">
                    <ArrowUpRight className="h-3 w-3 inline" /> +12.5% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/60">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-xs font-semibold text-muted-foreground uppercase">
                    Active Subscriptions
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+1,482</div>
                  <p className="text-[10px] text-success-foreground font-medium flex items-center gap-1 mt-1">
                    <ArrowUpRight className="h-3 w-3 inline" /> +4.8% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/60">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-xs font-semibold text-muted-foreground uppercase">
                    API Response Time
                  </CardTitle>
                  <Shield className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">142 ms</div>
                  <p className="text-[10px] text-muted-foreground font-medium flex items-center gap-1 mt-1">
                    Average over past 24 hours
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Table list */}
            <Card className="border border-border/60">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-base font-bold">Recent Invoices</CardTitle>
                  <CardDescription className="text-xs">
                    Overview of latest commercial settlements.
                  </CardDescription>
                </div>
                <Button size="sm" className="gap-1.5 h-8">
                  <Plus className="h-3.5 w-3.5" /> New Invoice
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-mono font-medium text-xs">#INV-0081</TableCell>
                      <TableCell>Acme Corporation</TableCell>
                      <TableCell className="font-semibold">$1,250.00</TableCell>
                      <TableCell><Badge variant="success">Paid</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono font-medium text-xs">#INV-0082</TableCell>
                      <TableCell>Vercel Inc.</TableCell>
                      <TableCell className="font-semibold">$450.00</TableCell>
                      <TableCell><Badge variant="success">Paid</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono font-medium text-xs">#INV-0083</TableCell>
                      <TableCell>Supabase Ltd.</TableCell>
                      <TableCell className="font-semibold">$890.00</TableCell>
                      <TableCell><Badge variant="warning">Pending</Badge></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </main>
        </div>
      </SidebarLayout>
    );
  },
};

export const PricingScreen: StoryObj = {
  render: () => {
    return (
      <div className="w-full max-w-5xl py-8">
        <div className="text-center space-y-3 mb-12">
          <Badge variant="primary" className="mx-auto">Simple Pricing</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            A plan designed for every stage
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Choose the pricing plan that fits your size. Scale up smoothly as your workload grows.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 items-stretch">
          {/* Free Tier */}
          <Card className="flex flex-col border border-border/80">
            <CardHeader>
              <CardTitle className="text-lg">Starter</CardTitle>
              <CardDescription>Essential core features for solo developers.</CardDescription>
              <div className="pt-4 flex items-baseline">
                <span className="text-3xl font-extrabold">$0</span>
                <span className="text-xs text-muted-foreground ml-1">/ month</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <div className="h-px bg-border/50" />
              <ul className="space-y-2.5 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span>Up to 3 projects hosted</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span>Community support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span>Standard builder access</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-4">
              <Button variant="outline" className="w-full">Get Started</Button>
            </CardFooter>
          </Card>

          {/* Pro Tier (Popular) */}
          <Card className="flex flex-col border-2 border-primary relative shadow-md">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge variant="primary" className="text-[10px] font-bold">MOST POPULAR</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-lg">Developer Pro</CardTitle>
              <CardDescription>Extended bounds for rapid scale and team projects.</CardDescription>
              <div className="pt-4 flex items-baseline">
                <span className="text-3xl font-extrabold">$29</span>
                <span className="text-xs text-muted-foreground ml-1">/ month</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <div className="h-px bg-border/50" />
              <ul className="space-y-2.5 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-foreground font-medium">Unlimited public projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span>Priority email support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span>Custom domain routing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span>Advanced dashboard reports</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-4">
              <Button className="w-full">Upgrade to Pro</Button>
            </CardFooter>
          </Card>

          {/* Enterprise Tier */}
          <Card className="flex flex-col border border-border/80">
            <CardHeader>
              <CardTitle className="text-lg">Enterprise</CardTitle>
              <CardDescription>Full compliance control for demanding operations.</CardDescription>
              <div className="pt-4 flex items-baseline">
                <span className="text-3xl font-extrabold">$149</span>
                <span className="text-xs text-muted-foreground ml-1">/ month</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <div className="h-px bg-border/50" />
              <ul className="space-y-2.5 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-foreground">SLA Guaranteed uptime</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span>Dedicated accounts manager</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span>SSO/SAML Login security</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span>Custom contract options</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-4">
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  },
};
