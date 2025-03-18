export const contactDetails = {
    email: "lgrahampsychometry@outlook.com",
    phone: "+27605196193",
    location: ["279 Cape Road", "Metropolitan Office Park, Block A", "Greenacres, Newton Park", "6055"]
};


export const menuItems = [
    { name: "Home", href: "/" },
  { name: "Sevices", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Payment Terms", href: "/payment" },

];

export const footerLinks = [
    {
        group: 'Quick Links',
        items: [
            {
                title: 'Home',
                href: '/',
            },
            {
                title: 'Services',
                href: '/services',
            },
            {
                title: 'About',
                href: '/about',
            },
            {
                title: 'Contact',
                href: '/contact',
            },
   
        ],
    },
    
    {
        group: "Explore",
        items: [
          { title: "Our Services", href: "/#services" },
          { title: "About Us", href: "/#about" },
          { title: "Testimonials", href: "/#testimonials" },
          { title: "FAQ", href: "/#faq" },
   
        ]
      },
    {
        group: 'Legal',
        items: [
            {
                title: 'Privacy Policy',
                href: '/privacy-policy',
            },
      
        ],
    },
]


import servicePageImage from "@/assets/images/services-page.jpg"
import aboutPageImage from "@/assets/images/about-page.jpg"
import paymentTermsPageImage from "@/assets/images/payment-terms-page.jpg"
import privacyPolicyPageImage from "@/assets/images/privacy-policy-page.jpg"
import contactPageImage from "@/assets/images/contact-page.jpg"
import aboutFace from "@/assets/images/liam-graham-about.jpeg"

export {servicePageImage, aboutPageImage, paymentTermsPageImage, privacyPolicyPageImage, contactPageImage, aboutFace }