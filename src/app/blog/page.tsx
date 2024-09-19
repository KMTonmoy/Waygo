import React from 'react';

const BlogPage: React.FC = () => {
    const blogs = [
        {
            title: 'Top Bus Routes for Urban Exploration',
            description:
                'Explore the most scenic and efficient bus routes that offer the best views and accessibility within urban areas. This guide will help you navigate the city like a local.',
            image: 'https://media.licdn.com/dms/image/D4E12AQERulTeAFmJxA/article-cover_image-shrink_720_1280/0/1702807898744?e=2147483647&v=beta&t=_5XhJH_vQdst4-b7cSBQ2QdX46dOCYQr39VcXmYECXw',
            author: 'Alice Brown',
            date: 'September 18, 2024',
        },
        {
            title: 'The Rise of Eco-Friendly Airplanes',
            description:
                'Learn about the latest advancements in eco-friendly aviation technology. Discover how airlines are reducing their carbon footprint and what it means for the future of air travel.',
            image: 'https://media.licdn.com/dms/image/D4E12AQERulTeAFmJxA/article-cover_image-shrink_720_1280/0/1702807898744?e=2147483647&v=beta&t=_5XhJH_vQdst4-b7cSBQ2QdX46dOCYQr39VcXmYECXw',
            author: 'James Lee',
            date: 'September 21, 2024',
        },
        {
            title: 'Must-Know Tips for Comfortable Train Journeys',
            description:
                'Train travel can be both relaxing and enjoyable if you know the right tips and tricks. This blog provides essential advice for making your train trips more comfortable and stress-free.',
            image: 'https://sb.ecobnb.net/app/uploads/sites/3/2022/09/fun-and-confortable-train-ride-1170x490.jpg',
            author: 'Emily Davis',
            date: 'September 25, 2024',
        },
        {
            title: 'How to Find the Best Bus Deals and Discounts',
            description:
                'Discover how to find the best deals and discounts for bus travel. This guide covers tips for booking, finding promotions, and maximizing your savings on bus tickets.',
            image: 'data:image/jpeg;base64,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',
            author: 'Michael Smith',
            date: 'September 27, 2024',
        },
        {
            title: 'Innovations in Airplane Entertainment Systems',
            description:
                'Explore the latest innovations in in-flight entertainment systems. Learn about new technologies that are enhancing passenger experience during air travel.',
            image: 'https://www.einfochips.com/wp-content/uploads/2018/09/top-emerging-trends-of-the-global-in-flight-entertainment-market-featured.jpg',
            author: 'Sophia Johnson',
            date: 'September 29, 2024',
        },
        {
            title: 'Train Travel Hacks for the Modern Commuter',
            description:
                'Maximize your train travel experience with these handy hacks. From finding the best seats to avoiding delays, this blog provides practical advice for daily commuters.',
            image: 'https://media.timeout.com/images/103600274/image.jpg',
            author: 'Liam Brown',
            date: 'October 2, 2024',
        },
        {
            title: 'Bus Travel Safety Tips You Need to Know',
            description:
                'Ensure a safe and pleasant journey with these essential bus travel safety tips. Learn about safety protocols, what to watch out for, and how to keep your belongings secure.',
            image: 'data:image/jpeg;base64,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',
            author: 'Olivia Taylor',
            date: 'October 5, 2024',
        },
    ];


    return (
        <div className="min-h-screen bg-gray-100 py-10 px-5">


            {/* Recent Blog Posts */}
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold text-center text-[#25527E] mb-8">Recent Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.slice(1).map((blog, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden"
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#25527E] mb-2">{blog.title}</h3>
                                <p className="text-gray-700 mb-4">{blog.description}</p>
                                <div className="flex items-center text-gray-500 text-sm">
                                    <span>By {blog.author}</span>
                                    <span className="mx-2">|</span>
                                    <span>{blog.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
