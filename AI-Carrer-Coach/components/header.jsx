import React from 'react'
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { Icon, ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { checkUser } from '@/lib/checkUser'
import { targetArrow } from "@lucide/lab";


const Header = async() => {
    await checkUser();
    return (
        <div>
            <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60'>
                <nav className=' w-full mx-0 my-5  px-2 h-5 flex items-center justify-between'>
                    <Link href='/'>
                        <Image src="/logo.jpg" alt="logo" width={150} height={60} className='h-16 py-1 w-auto object-contain' />
                    </Link>
                    <div className='flex items-center space-x-2 md:space-x-4'>
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
                    </div>
                </nav>


            </header>
        </div>
    )
}

export default Header
