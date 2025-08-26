import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
title: "Tanvi Portfolio",
description: "Portfolio website of Tanvi Kanaiya",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="font-sans text-gray-800 antialiased">
<header className="flex items-center justify-between p-4 shadow-md">
<div className="flex items-center gap-3">
<Image
src="/profile.jpg"
alt="Tanvi Kanaiya"
width={50}
height={50}
className="rounded-full"
/>
<h1 className="text-xl font-bold">Tanvi Kanaiya</h1>
</div>
<nav className="flex gap-4">
<Link href="/">Home</Link>
<Link href="/contact">Contact</Link>
<a href="/resume.pdf" download className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700">
Resume
</a>
</nav>
</header>
<main className="p-6">{children}</main>
</body>
</html>
);
}
