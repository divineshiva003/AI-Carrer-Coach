// import React from 'react'
// import {
//     ClerkProvider,
//     SignInButton,
//     SignUpButton,
//     SignedIn,
//     SignedOut,
//     UserButton,
// } from '@clerk/nextjs'
// import Image from 'next/image'
// import Link from 'next/link'
// import { Button } from './ui/button'
// import { Icon, ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from 'lucide-react'
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { checkUser } from '@/lib/checkUser'
// import { targetArrow } from "@lucide/lab";


// const Header = async() => {
//     await checkUser();
//     return (
//         <div>
//             <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60'>
                // <nav className=' w-full mx-0 my-5  px-2 h-5 flex items-center justify-between'>
                //     <Link href='/'>
                //         <Image src="/logo1.png" alt="logo" width={600} height={500} className="h-10 sm:h-12 md:h-16 lg:h-16 w-auto object-contain" priority />
                //     </Link>
                //     <div className='flex items-center space-x-2 md:space-x-4'>
                //         <SignedIn>
                //             <Link href='/dashboard'>
                //                 <Button variant='outline'>
                //                     <LayoutDashboard className='h-4 w-4' />
                //                     <span className='hidden md:block'>Industry Dashboard</span>
                //                 </Button>
                //             </Link>
                        
                //         <DropdownMenu>
                //             <DropdownMenuTrigger>
                //                 <Button >
                //                     <StarsIcon className='h-4 w-4' />
                //                     <span className='hidden md:block' >Growth Tools</span>
                //                     <ChevronDown className='h-4 w-4' />
                //                 </Button>
                //             </DropdownMenuTrigger>
                //             <DropdownMenuContent>
                //                 <DropdownMenuSeparator />
                //                 <DropdownMenuItem>
                //                     <Link href={'/resume'} className='flex items-center gap-2'>
                //                         <FileText className='h-4 w-4' />
                //                         <span>Build Resume</span>
                //                     </Link>
                //                 </DropdownMenuItem>
                //                 <DropdownMenuItem>
                //                     <Link href={'/ai-cover-letter'} className='flex items-center gap-2'>
                //                         <PenBox className='h-4 w-4' />
                //                         <span>Cover Letter</span>
                //                     </Link>
                //                 </DropdownMenuItem>
                //                 <DropdownMenuItem>
                //                     <Link href={'/interview'} className='flex items-center gap-2'>
                //                         <GraduationCap className='h-4 w-4' />
                //                         <span>Interview prep</span>
                //                     </Link>
                //                 </DropdownMenuItem>
                //                 <DropdownMenuItem>
                //                     <Link href={'/practice'} className='flex items-center gap-2'>
                //                         <Icon iconNode={targetArrow} size={32} outline-color="color-mix(in oklab, var(--ring) 50%, transparent" strokeWidth={2} />
                //                         <span>Practice</span>
                //                     </Link>
                //                 </DropdownMenuItem>
                //             </DropdownMenuContent>
                //         </DropdownMenu>
                //         </SignedIn>
                //         <SignedOut>
                //             <SignInButton>
                //                 <Button variant='outline'>
                //                     Sign in
                //                 </Button>
                //             </SignInButton>
                //         </SignedOut>
                //         <SignedIn className="my-0">
                //             <UserButton />
                //         </SignedIn>
                //     </div>
                // </nav>


//             </header>
//         </div>
//     )
// }

// export default Header


// components/Header.jsx

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import { Icon, ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import { checkUser } from '@/lib/checkUser'
import { targetArrow } from "@lucide/lab";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Anchor links match the sections in your current page.jsx
  const nav = [
    { href: "#features", label: "Features" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" }, // add id="contact" to your CTA section (see note below)
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-full  px-4 sm:px-6">
        <div className="h-14 flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2">
            {/* If you have a logo in /public, replace src below; fallback to text if it’s missing */}
            <div className="relative h-7 w-7 overflow-hidden rounded">
              <Image
                src="/logo.png"
                alt="AptiGeeks"
                fill
                sizes="28px"
                className="object-contain"
                onError={(e) => {
                  // hide broken image placeholder; text brand still shows
                  // @ts-ignore
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <span className="font-semibold text-xl text-foreground">
              Apti<span className="text-cyan-400 ">Geeks 2.0</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm mx-10">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition text-xl "
              >
                {item.label}
              </a>
            ))}
            </nav>
            <div className='space-x-2 justify-around flex md:space-x-4'>
            <SignedIn>
                
                            <Link href='/dashboard'>
                                <Button variant='outline'>
                                    <LayoutDashboard className='h-4 w-4' />
                                    <span className='hidden md:block'>Industry Dashboard</span>
                                </Button>
                            </Link>
                        
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button >
                                    <StarsIcon className='h-4 w-4' />
                                    <span className='hidden md:block' >Growth Tools</span>
                                    <ChevronDown className='h-4 w-4' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Link href={'/resume'} className='flex items-center gap-2'>
                                        <FileText className='h-4 w-4' />
                                        <span>Build Resume</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href={'/ai-cover-letter'} className='flex items-center gap-2'>
                                        <PenBox className='h-4 w-4' />
                                        <span>Cover Letter</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href={'/interview'} className='flex items-center gap-2'>
                                        <GraduationCap className='h-4 w-4' />
                                        <span>Interview prep</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href={'/practice'} className='flex items-center gap-2'>
                                        <Icon iconNode={targetArrow} size={32} outline-color="color-mix(in oklab, var(--ring) 50%, transparent" strokeWidth={2} />
                                        <span>Practice</span>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                       
                        </SignedIn>
          

          {/* Sign in (use Clerk defaults; change if yours differ) */}
          <div className="hidden md:block flex">
            <Link href="/sign-in">
               
              <SignedOut>
                  <SignInButton>
                      <Button variant='outline'>
                          Sign in
                      </Button>
                  </SignInButton>
                  </SignedOut>
                      <SignedIn className="my-0">
                         <UserButton />
                  </SignedIn>
            </Link>
          </div>
           </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded hover:bg-muted"
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
              <Link href="/sign-in" onClick={() => setOpen(false)}>
                <Button className="mt-1 w-full">Sign In</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
