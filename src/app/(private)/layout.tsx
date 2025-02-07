import { UserButton } from "@clerk/nextjs";
import { ReactNode } from "react";
import { NavLink } from "../../components/ui/NavLink";
import Image from "next/image";

export default function PrivateLayout({
    children}: { children: ReactNode}) {
        return (
            <div>
                <header className="flex py-2 borber-b bg-card"></header>
                <nav className="font-medium flex items-center text-sm gap-6 container">
                    <div className="flex items-center gap-2 font-semibold mr-auto">
                    
                    <Image src="/logo (1).png" alt="Profile Picture" width={100} height={100} className="rounded-full" />
                    </div>
                    <NavLink href="/home">Home</NavLink>
                    <NavLink href="/ourservices">Our Services</NavLink>
                    <NavLink href="/blog">Blog</NavLink>
                    <NavLink href="/aboutus">About Us</NavLink>
                    <NavLink href="/contactus">Contact Us</NavLink>
                    <div className="ml-auto size-10">
                        <UserButton 
                        appearance={{ elements: { userButtonAvatarBox: "size-full"}}} />
                    </div>
                </nav>

                <main className="container my-6">
                    {children}</main>
            </div>
        )
    }